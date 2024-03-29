import ReactDOM from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import store from './redux/store.tsx'
import { router } from './routes/router.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ReduxProvider store={store}>
    <RouterProvider router={router} />
  </ReduxProvider>
)
