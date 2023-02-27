interface IReactComponent<T> {
  default: React.ComponentType<T>
}

declare module 'admin/Button' {
  const component: IReactComponent<{ text: string; onClick: VoidFunction }>
  export = component
}

declare module '*.module.css'
declare module '*.jpg'
declare module '@utils/utility'
declare module '@components/Lakes/Lakes'
declare module '@components/Titles/Titles'
