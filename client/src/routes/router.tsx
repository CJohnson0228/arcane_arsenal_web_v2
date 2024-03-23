import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage'
import Landing from '../pages/Landing'
import MainLayout from '../pages/MainLayout'
// import ProtectedRoute from './ProtectedRoute'
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
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    loader: gsapLoader,
  },
])
