import { lazy, Suspense, useMemo, useState } from 'react';
import './App.css';
import { DatePickerProvider } from './context/DateContext';
import { ServiceContext } from './context/ServiceContext';
import { HousesService } from './services/houses.service';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';

const OtherComponent = lazy(() => {
  return import('./routes/RouterProvider');
});

{
  /* <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        columnGap: '30px',
      }}
    >
      <iframe
        width="160"
        height="315"
        src="https://youtube.com/embed/v6aPijQ5nig?feature=share"
        // src="https://www.youtube.com/embed/p9xlkJsBlbo"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <iframe
        width="160"
        height="315"
        src="https://youtube.com/embed/v6aPijQ5nig?feature=share"
        // src="https://www.youtube.com/embed/p9xlkJsBlbo"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <iframe
        width="160"
        height="315"
        src="https://youtube.com/embed/v6aPijQ5nig?feature=share"
        // src="https://www.youtube.com/embed/p9xlkJsBlbo"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div> */
}

const App = () => {
  const serviceWrapper = useMemo(() => {
    return { houses: new HousesService() };
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <ServiceContext.Provider value={serviceWrapper}>
        <DatePickerProvider>
          <Suspense>
            <OtherComponent />
          </Suspense>
        </DatePickerProvider>
      </ServiceContext.Provider>
    </ThemeProvider>
  );
};

export default App;
