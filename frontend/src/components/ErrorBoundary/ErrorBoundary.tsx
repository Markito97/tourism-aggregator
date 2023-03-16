import { Component, PropsWithChildren, ReactNode } from 'react';

export class ErrorBoundary extends Component<PropsWithChildren> {
  readonly state: { error?: Error } = {};

  static getDerivedStateFromError() {
    return { hasError: true };
  }

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
