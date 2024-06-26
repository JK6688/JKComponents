import type { App, Plugin } from 'vue';

/** 组件得到install方法 */
export function withInstall<T>(component: T, alias?: string) {
  const comp = component as any;
  comp.install = (app: App) => {
    app.component(comp.name || comp.displayName, component as any);
    if (alias) {
      app.config.globalProperties[alias] = component;
    }
  };
  return component as T & Plugin;
}
