import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <header className="border-b bg-white">
        <div className="mx-auto flex h-14 w-full max-w-7xl items-center px-4">
          <span className="text-sm font-semibold tracking-wide">
            Pizza Shop
          </span>
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl p-4">
        <Outlet />
      </main>
    </div>
  )
}
