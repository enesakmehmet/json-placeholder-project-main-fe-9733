import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import './styles/darkMode.css'
import './styles/responsive.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'animate.css/animate.min.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { ThemeProvider } from './context/ThemeProvider'
import { FavoritesProvider } from './context/FavoritesProvider'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <FavoritesProvider>
      <RouterProvider router={router} />
    </FavoritesProvider>
  </ThemeProvider>,
)
