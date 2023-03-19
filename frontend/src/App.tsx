import { lazy, Suspense, useMemo, useState } from 'react';
import './App.css';
import { DatePickerProvider } from './context/DateContext';
import { ServiceContext } from './context/ServiceContext';
import { HousesService } from './services/houses.service';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import Provider from './routes/RouterProvider';

// const OtherComponent = lazy(() => {
//   return import('./routes/RouterProvider');
// });

const App = () => {
  const serviceWrapper = useMemo(() => {
    return { houses: new HousesService() };
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <ServiceContext.Provider value={serviceWrapper}>
        <DatePickerProvider>
          <Suspense>
            <Provider />
            {/* <OtherComponent /> */}
          </Suspense>
        </DatePickerProvider>
      </ServiceContext.Provider>
    </ThemeProvider>
  );
};

export default App;
