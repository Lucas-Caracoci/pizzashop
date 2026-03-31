import { RouterProvider } from 'react-router-dom'

import { router } from './routes'
import { ThemeProvider } from './components/theme/theme-provider'



export function App() {
  return (
    <ThemeProvider storageKey='pizzashop-theme'>
      <RouterProvider router={router} />
    </ThemeProvider>

  )
}
