import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import AdminLayout from '../components/Layout/AdminLayout';
import { InfoPage } from '../pages/InfoPage';
import { HousesList } from '../pages/HousesList';
import { ActivitiesList } from '../pages/ActivitiesList';
import { HouseForm } from '../components/HouseForm/HouseForm';
import { HousesLayout } from '../components/Layout/HousesLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AdminLayout />,
    children: [
      { index: true, element: <InfoPage /> },
      { path: 'activitieslist', element: <ActivitiesList /> },
      {
        path: 'houseslist/*',
        element: <HousesLayout />,
        children: [
          { index: true, element: <HousesList /> },
          {
            path: 'aboba',
            element: <HouseForm />,
          },
        ],
      },
    ],
  },
]);
const Provider = (): JSX.Element => {
  return <RouterProvider router={router} />;
};

export default Provider;
