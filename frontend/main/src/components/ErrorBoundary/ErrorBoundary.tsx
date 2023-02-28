/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import { Component, PropsWithChildren, ReactNode } from 'react';

export class ErrorBoundary extends Component<PropsWithChildren> {
  readonly state: { error?: Error } = {};

  componentDidCatch(error: Error) {
    this.setState({ error });
  }

  render(): ReactNode {
    if (this.state.error) {
      return (
        <div>Error :(</div>
      );
    }

    return this.props.children;
  }
}
