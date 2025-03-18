import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'animate.css/animate.min.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

createRoot(document.getElementById('root')!).render(
  <>
    <RouterProvider router={router} />
  </>,
)
