interface IReactComponent<T> {
  default: React.ComponentType<T>;
}

declare module 'admin/Button' {
  const component: IReactComponent<{ text: string; onClick: VoidFunction }>;
  export = component;
}

declare module '*.module.sass' {
  const css: { [key: string]: string };
  export = css;
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
