import { Home, PizzaIcon, Utensils } from 'lucide-react'

import { AccountMenu } from './account-menu'
import { NavLink } from './nav-link'
import { ThemeToggle } from './theme/theme-toggle'
import { Separator } from './ui/separator'

export function Header() {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <PizzaIcon className="h-8 w-8" />

        <Separator orientation="vertical" className="h-1/2" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/" className="flex items-center gap-2">
            <Home className="h-4 w-4" />
            Inicio
          </NavLink>
          <NavLink to="/orders" className="flex items-center gap-2">
            <Utensils className="h-4 w-4" />
            Pedidos
          </NavLink>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <AccountMenu />
        </div>
      </div>
    </header>
  )
}
