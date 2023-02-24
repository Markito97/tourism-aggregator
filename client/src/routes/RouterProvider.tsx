import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Layout } from '../components/Layout/Layout'
import { Hotels } from '../pages/Hotels'
import { ErrorBoundary } from '../components/ErrorBoundary/ErrorBoundary'
import { About } from '../pages/About'
import { Activities } from '../pages/Activities'
import { InfoPage } from '../pages/InfoPage'
import { AdminLayout } from '../components/Layout/AdminLayout'
import { HousesList } from '../pages/HousesList'
import { ActivitiesList } from '../pages/ActivitiesList'
import { lazy } from 'react'
import { HotelPage } from '../pages/HotelPage'

const Home = lazy(() => import('../pages/Home'))

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
        element: <HotelPage />,
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
    ],
  },
])

const Provider = (): JSX.Element => {
  return <RouterProvider router={router} />
}

export default Provider
