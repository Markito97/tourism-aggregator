import { Component, PropsWithChildren, ReactNode } from 'react';

export class ErrorBoundary extends Component<PropsWithChildren> {
  readonly state: { error?: Error } = {};

  componentDidCatch(error: Error): void {
    this.setState({ error });
  }

  render(): ReactNode {
    if (this.state.error) {
      return <div>Error (</div>;
    }
    return this.props.children;
  }
}
