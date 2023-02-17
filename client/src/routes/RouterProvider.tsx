import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Layout } from '../components/Layout/Layout'
import { Hotels } from '../pages/Hotels'
import { ErrorBoundary } from '../components/ErrorBoundary/ErrorBoundary'
import { About } from '../pages/About'
import { Activities } from '../pages/Activities'
import { AdminPage } from '../pages/AdminPage'

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
        path: 'aboutus',
        element: <About />,
      },
      {
        path: 'activities',
        element: <Activities />,
      },
      { path: 'admin', element: <AdminPage /> },
    ],
  },
])

export const Provider = (): JSX.Element => {
  return <RouterProvider router={router} />
}
