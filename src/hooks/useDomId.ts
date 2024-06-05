export function useDomId(idName: string) {
  if (!idName) {
    throw new TypeError('idName is undefined!');
  }
  return `jk-vue-comps-${idName}`;
}
