import { FunctionComponent, lazy, Suspense } from 'react'
// import { Provider } from '../src/routes/RouterProvider'
import './App.css'
import { DatePickerProvider } from '../src/context/DateContext'
import { ServiceContext } from '../src/context/ServiceContext'
import { HousesService } from '../src/services/houses.service'

const OtherComponent = lazy(() => import('./routes/RouterProvider'))
const App: FunctionComponent<any> = () => {
  console.log('aboba')
  return (
    <ServiceContext.Provider
      value={{
        houses: new HousesService(),
      }}
    >
      <DatePickerProvider>
        <Suspense>
          <OtherComponent />
        </Suspense>
      </DatePickerProvider>
    </ServiceContext.Provider>
  )
}

export default App
