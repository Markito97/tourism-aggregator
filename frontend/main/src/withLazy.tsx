import { ErrorBoundary } from './ErrorBoundary'
import { Suspense, ComponentType, Component, ExoticComponent } from 'react'

export function reactLazyComponentHoc<P>(
  LazyComponent: ExoticComponent<P>
): ComponentType<P> {
  return class SyncComponent extends Component<P> {
    render() {
      return (
        <>
          <ErrorBoundary>
            <Suspense fallback="Loading...">
              <LazyComponent {...this.props} />
            </Suspense>
          </ErrorBoundary>
        </>
      )
    }
  }
}
