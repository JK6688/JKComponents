const XHTML_NS = 'http://www.w3.org/1999/xhtml';

const COMMENT_NODE = 8;
const ELEMENT_NODE = 1;

const SCHEME_RE = /^[a-z][a-z0-9+.-]*:/;
const SAFE_LINK_SCHEME = /^(?:https?|mailto|tel):/;
const SAFE_RES_SCHEME = /^https?:/;

const DROP_TAGS = new Set([
  'script',
  'style',
  'iframe',
  'frame',
  'frameset',
  'noframes',
  'noembed',
  'noscript',
  'object',
  'embed',
  'applet',
  'param',
  'form',
  'input',
  'textarea',
  'select',
  'option',
  'optgroup',
  'button',
  'label',
  'fieldset',
  'legend',
  'datalist',
  'output',
  'keygen',
  'link',
  'meta',
  'base',
  'basefont',
  'title',
  'head',
  'html',
  'body',
  'svg',
  'math',
  'foreignobject',
  'image',
  'template',
  'plaintext',
  'xmp',
  'listing',
  'canvas',
  'audio',
  'video',
  'source',
  'track',
  'marquee',
  'dialog',
  'slot',
  'portal',
  'blink',
  'isindex'
]);

/** 白名单标签：保留标签本身 */
const ALLOW_TAGS = new Set([
  'a',
  'abbr',
  'b',
  'bdi',
  'bdo',
  'blockquote',
  'br',
  'caption',
  'cite',
  'code',
  'col',
  'colgroup',
  'dd',
  'del',
  'details',
  'dfn',
  'div',
  'dl',
  'dt',
  'em',
  'figcaption',
  'figure',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'hr',
  'i',
  'img',
  'ins',
  'kbd',
  'li',
  'mark',
  'ol',
  'p',
  'pre',
  'q',
  'rp',
  'rt',
  'ruby',
  's',
  'samp',
  'section',
  'small',
  'span',
  'strong',
  'sub',
  'summary',
  'sup',
  'table',
  'tbody',
  'td',
  'tfoot',
  'th',
  'thead',
  'time',
  'tr',
  'u',
  'ul',
  'var',
  'wbr'
]);

/** 所有标签都允许的属性（刻意不含 id / style / 任何 on*） */
const GLOBAL_ATTRS = new Set(['class', 'title', 'dir', 'lang']);

/** 按标签允许的属性 */
const TAG_ATTRS: Record<string, Set<string>> = {
  a: new Set(['href', 'target', 'rel', 'hreflang', 'type']),
  img: new Set(['src', 'alt', 'width', 'height', 'loading', 'referrerpolicy']),
  table: new Set(['border', 'cellpadding', 'cellspacing', 'width']),
  td: new Set(['colspan', 'rowspan', 'align', 'valign', 'width', 'height', 'scope']),
  th: new Set(['colspan', 'rowspan', 'align', 'valign', 'width', 'height', 'scope']),
  col: new Set(['span', 'width']),
  colgroup: new Set(['span', 'width']),
  ol: new Set(['start', 'type', 'reversed']),
  ul: new Set(['type']),
  li: new Set(['value']),
  blockquote: new Set(['cite']),
  q: new Set(['cite']),
  del: new Set(['cite', 'datetime']),
  ins: new Set(['cite', 'datetime']),
  time: new Set(['datetime'])
};

const LINK_URL_ATTRS = new Set(['href']);
const RES_URL_ATTRS = new Set(['src']);

/** 空格与控制字符的边界码点（U+0000–U+0020 与 U+007F） */
const SPACE_CODE = 0x20;
const DEL_CODE = 0x7f;

/** 子树递归深度上限：超深嵌套会让递归爆栈，超过就直接丢掉该子树（丢内容好过整段失败） */
const MAX_DEPTH = 500;

/**
 * 剥掉控制字符与空白
 *
 * 不写成正则字符类是为了让「控制字符」以码点比较表达，源码里不会出现裸控制字节；
 * 协议判断必须先剥掉它们，否则 `java\tscript:` 这类写法能绕过协议白名单。
 */
function stripControlAndSpace(str: string) {
  let out = '';
  for (const ch of str) {
    const code = ch.codePointAt(0) ?? 0;
    if (code > SPACE_CODE && code !== DEL_CODE) {
      out += ch;
    }
  }
  return out;
}

/** 链接类协议白名单（http/https/mailto/tel，以及相对路径与锚点） */
function isSafeUrl(raw: string, isResource: boolean) {
  const v = stripControlAndSpace(String(raw)).toLowerCase();
  if (!v) {
    return false;
  }
  // 没有协议前缀 → 相对路径 / 锚点 / 查询串，放行
  if (!SCHEME_RE.test(v)) {
    return true;
  }
  return isResource ? SAFE_RES_SCHEME.test(v) : SAFE_LINK_SCHEME.test(v);
}

function cleanAttributes(el: Element, tag: string) {
  const tagAttrs = TAG_ATTRS[tag];

  Array.from(el.attributes).forEach((attr) => {
    const name = attr.name.toLowerCase();

    if (name.startsWith('on') || !(GLOBAL_ATTRS.has(name) || tagAttrs?.has(name))) {
      el.removeAttribute(attr.name);
      return;
    }

    // 属性值里出现尖括号时整条丢弃：这类值重新序列化后可能被解析器当成标签再解析（mXSS）
    if (/[<>]/.test(attr.value)) {
      el.removeAttribute(attr.name);
      return;
    }

    if (LINK_URL_ATTRS.has(name) && !isSafeUrl(attr.value, false)) {
      el.removeAttribute(attr.name);
      return;
    }

    if (RES_URL_ATTRS.has(name) && !isSafeUrl(attr.value, true)) {
      el.removeAttribute(attr.name);
    }
  });

  // 链接统一补 rel：避免被打开页面通过 window.opener 反向导航
  if (tag === 'a') {
    el.setAttribute('rel', 'noopener noreferrer');
  }
}

function cleanSubtree(parent: Element, depth = 0) {
  Array.from(parent.childNodes).forEach((node) => {
    if (node.nodeType === COMMENT_NODE) {
      node.remove();
      return;
    }
    // 文本节点原样保留
    if (node.nodeType !== ELEMENT_NODE) {
      return;
    }

    const el = node as Element;
    const tag = el.tagName.toLowerCase();

    // 危险标签、以及外来命名空间（SVG / MathML）一律整棵丢弃
    if (DROP_TAGS.has(tag) || el.namespaceURI !== XHTML_NS) {
      el.remove();
      return;
    }

    // 超出深度上限：无法再安全递归，直接丢掉这棵子树
    if (depth >= MAX_DEPTH) {
      el.remove();
      return;
    }

    // 先清理子树，再决定当前标签去留，避免解包时把未净化的节点搬出去
    cleanSubtree(el, depth + 1);

    if (!ALLOW_TAGS.has(tag)) {
      // 不在白名单但本身无危险：解包，保留子节点，尽量不丢内容
      el.replaceWith(...Array.from(el.childNodes));
      return;
    }

    cleanAttributes(el, tag);
  });
}

/** 净化一段 HTML，返回可安全交给 `v-html` / `innerHTML` 的字符串 */
export function sanitizeHtml(dirty: unknown): string {
  const input = typeof dirty === 'string' ? dirty : '';
  if (!input || !/<[a-z!/]/i.test(input)) {
    return input;
  }
  if (typeof window === 'undefined' || typeof DOMParser === 'undefined') {
    return '';
  }

  try {
    const doc = new DOMParser().parseFromString(input, 'text/html');
    if (!doc?.body) {
      return '';
    }
    cleanSubtree(doc.body);
    return doc.body.innerHTML;
  } catch {
    return '';
  }
}
