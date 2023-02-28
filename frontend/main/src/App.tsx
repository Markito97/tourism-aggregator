import { lazy, Suspense, useMemo } from 'react';
import './App.css';
import { DatePickerProvider } from './context/DateContext';
import { ServiceContext } from './context/ServiceContext';
import { HousesService } from './services/houses.service';

const OtherComponent = lazy(() => {
  return import('./routes/RouterProvider');
});
const App = () => {
  const serviceWrapper = useMemo(() => {
    return { houses: new HousesService() };
  }, []);
  return (
    <ServiceContext.Provider value={serviceWrapper}>
      <DatePickerProvider>
        <Suspense>
          <OtherComponent />
        </Suspense>
      </DatePickerProvider>
    </ServiceContext.Provider>
  );
};

export default App;
