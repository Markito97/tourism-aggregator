import { FunctionComponent, lazy, Suspense } from 'react'
// import { Provider } from '../src/routes/RouterProvider'
import './App.css'
import { DatePickerProvider } from '../src/context/DateContext'
import { ServiceContext } from '../src/context/ServiceContext'
import { HousesService } from '../src/services/houses.service'
import { AdminMf } from './dts/components'

const str = 'aboba'

const OtherComponent = lazy(() => import('./routes/RouterProvider'))
const App: FunctionComponent<any> = () => {
  console.log(AdminMf)
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
    // <>
    // {/* <AdminMf.button text="aboba" onClick={() => void 0} /> */}
    // </>
  )
}

export default App
