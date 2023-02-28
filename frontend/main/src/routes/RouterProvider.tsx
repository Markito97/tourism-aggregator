import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from '../components/Layout/Layout';
import { Hotels } from '../pages/Hotels';
import { ErrorBoundary } from '../components/ErrorBoundary/ErrorBoundary';
import { About } from '../pages/About';
import { Activities } from '../pages/Activities';
import { InfoPage } from '../pages/InfoPage';
import { AdminLayout } from '../components/Layout/AdminLayout';
import { HousesList } from '../pages/HousesList';
import { ActivitiesList } from '../pages/ActivitiesList';
import { HousePage } from '../pages/HousePage';
import { HouseFormPage } from '../pages/HouseFormPage';

const Home = lazy(() => {
  return import('../pages/Home');
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'hotels',
        element: <Hotels />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: 'hotel/:id',
        element: <HousePage />,
      },
      {
        path: 'aboutus',
        element: <About />,
      },
      {
        path: 'activities',
        element: <Activities />,
      },
    ],
  },
  {
    path: 'admin/*',
    element: <AdminLayout />,
    children: [
      { index: true, element: <InfoPage /> },
      { path: 'houseslist', element: <HousesList /> },
      { path: 'activitieslist', element: <ActivitiesList /> },
      { path: 'test', element: <HouseFormPage /> },
    ],
  },
]);

const Provider = (): JSX.Element => {
  return <RouterProvider router={router} />;
};

export default Provider;
