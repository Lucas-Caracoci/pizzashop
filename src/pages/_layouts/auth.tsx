import { Outlet } from 'react-router-dom'
import { PizzaIcon } from 'lucide-react'
export function AuthLayout() {
  return (
    <div className="min-h-screen grid grid-cols-2 antialiased">
      <div className="h-full border-r border-foreground/5 bg-muted p-10 text-muted-foreground flex flex-col justify-between">
      <div className='flex items-center gap-3 text-xl text-foreground'>
        <PizzaIcon className='h-8 w-8'/>
        <span className='font-semibold'>Pizza.Shop</span>
        </div>
      <footer className='text-sm'>
        Painel do parceiro &copy; pizza.shop - {new Date().getFullYear()}
      </footer>
      </div>
      <div className='flex lfex-col items-center justify-center relative'>

        <Outlet />

      </div>
    </div>
  )
}
