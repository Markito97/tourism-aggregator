import { Outlet, RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import { lazy } from 'react';
import { House } from '../pages/App/House';
import { Layout } from '../components/Layout/App/Layout';
import { BookinForm } from '../components/Forms/BookingForm';
import { AdminLayout } from '../components/Layout/Admin/AdminLayout';
import { HousesList } from '../pages/Admin/HousesList';
import { AdminForm } from '../components/Forms/CreateHouseFrom';
import { EditHousePage } from '../pages/Admin/EditHousePage';
import { ErrorBoundary } from '../components/ErrorBoundary/ErrorBoundary';
import { Lake } from '../pages/App/Lake';

const Home = lazy(() => import('../pages/App/Home'));
const InfoPage = lazy(() => import('../pages/Admin/InfoPage'));
const Houses = lazy(() => import('../pages/App/Houses'));

const HousesLayout = () => {
  return <Outlet />;
};

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
        path: 'houses',
        element: <Houses />,
      },
      {
        path: 'house/:id',
        element: <House />,
      },
      { path: 'booking/:id', element: <BookinForm /> },
      { path: '/:lake', element: <Lake /> },
    ],
  },
  {
    path: 'admin/*',
    element: <AdminLayout />,
    children: [
      { index: true, element: <InfoPage /> },
      {
        path: 'houseslist/*',
        element: <HousesLayout />,
        children: [
          {
            index: true,
            element: <HousesList />,
          },

          { path: 'create', element: <AdminForm /> },
        ],
      },
      {
        path: 'edit/:id',
        element: <EditHousePage />,
        errorElement: <ErrorBoundary />,
      },
    ],
  },
]);

const Provider = (): JSX.Element => {
  return <RouterProvider router={router} />;
};

export default Provider;
