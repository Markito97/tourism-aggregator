import { Suspense, ComponentType, Component, ExoticComponent } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';

export function reactLazyComponentHoc<P>(
  LazyComponent: ExoticComponent<P>,
): ComponentType<P> {
  return class SyncComponent extends Component<P> {
    render() {
      return (
        <ErrorBoundary>
          <Suspense fallback="Loading...">
            <LazyComponent {...this.props} />
          </Suspense>
        </ErrorBoundary>
      );
    }
  };
}
