import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import { Hotels } from '../pages/Hotels';
import { About } from '../pages/About';
import { Activities } from '../pages/Activities';
import { House } from '../components/Houses/House';
import { Layout } from '../components/Layout/Layout';
import { BookinForm } from '../components/BookingForm/BookingForm';
import { AdminLayout } from '../components/Layout/AdminLayout';

const Home = lazy(() => import('../pages/Home'));
const InfoPage = lazy(() => import('../pages/InfoPage'));
const HousesList = lazy(() => import('../pages/HousesList'));
const ActivitiesList = lazy(() => import('../pages/ActivitiesList'));
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
      },
      {
        path: 'hotels/:id',
        element: <House />,
      },
      { path: 'booking/:id', element: <BookinForm /> },
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
      // { path: 'test', element: <HouseFormPage /> },
    ],
  },
]);

const Provider = (): JSX.Element => {
  return <RouterProvider router={router} />;
};

export default Provider;
