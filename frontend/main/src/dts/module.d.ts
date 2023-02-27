interface IReactComponent<T> {
  default: React.ComponentType<T>
}

declare module 'admin/Button' {
  const component: IReactComponent<{ text: string; onClick: VoidFunction }>
  export = component
}
