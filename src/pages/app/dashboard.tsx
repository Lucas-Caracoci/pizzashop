import { Link } from 'react-router-dom'

import { PageTitle } from '@/components/page-title'

export function Dashboard() {
  return (
    <>
      <PageTitle title="Inicio" />

      <div className="space-y-3">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-sm text-zinc-500">Resumo do seu restaurante.</p>

        <Link
          className="text-sm font-medium text-zinc-900 underline"
          to="/sign-in"
        >
          Sair e ir para login
        </Link>
      </div>
    </>
  )
}
