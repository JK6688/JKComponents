import type { ComponentPublicInstance, FunctionalComponent, VNode } from 'vue';

declare global {
  declare type Nullable<T> = T | null;

  declare type NonNullable<T> = T extends null | undefined ? never : T;

  declare type Recordable<T = any> = Record<string, T>;

  declare interface ChangeEvent extends Event {
    target: HTMLInputElement;
  }

  namespace JSX {
    type Element = VNode;

    interface ElementAttributesProperty {
      $props: any;
    }
    interface IntrinsicElements {
      [elem: string]: any;
    }
    interface IntrinsicAttributes {
      [elem: string]: any;
    }
  }
}

declare module 'vue' {
  export type JSXComponent<Props = any> =
    | { new (): ComponentPublicInstance<Props> }
    | FunctionalComponent<Props>;
}
