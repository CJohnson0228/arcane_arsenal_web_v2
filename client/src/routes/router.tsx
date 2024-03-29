import { createBrowserRouter } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import ErrorPage from '../pages/ErrorPage'
import Landing from '../pages/Landing'
import MainLayout from '../pages/MainLayout'
import Placeholder from '../pages/Placeholder'
import ProtectedRoute from './ProtectedRoute'
import { gsapLoader } from './gsapLoader'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
    errorElement: <ErrorPage />,
    loader: gsapLoader,
  },
  {
    path: '/home',
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
    loader: gsapLoader,
    children: [
      { index: true, element: <Dashboard /> },
      {
        path: 'create',
        element: <Placeholder title='create' />,
        errorElement: <ErrorPage />,
      },
    ],
  },
])
