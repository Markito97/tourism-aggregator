interface IReactComponent<T> {
  default: React.ComponentType<any>;
}

declare module 'admin/Layout' {
  const component: IReactComponent<any>;
  export = component;
}

declare module '*.sass' {
  const css: { [key: string]: string };
  export = css;
}

declare module '*.module.css';
declare module '*.jpg';
declare module '@utils/utility';
declare module '@components/Lakes/Lakes';
declare module '@components/Titles/Titles';
