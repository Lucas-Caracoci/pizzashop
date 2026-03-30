import { Link } from 'react-router-dom'

import { PageTitle } from '@/components/page-title'

export function NotFound() {
  return (
    <>
      <PageTitle title="Pagina nao encontrada" />

      <div className="flex min-h-screen items-center justify-center bg-zinc-100 p-4">
        <div className="space-y-3 rounded-xl border bg-white p-6 text-center shadow-sm">
          <h1 className="text-2xl font-semibold">404</h1>
          <p className="text-sm text-zinc-500">Pagina nao encontrada.</p>

          <Link className="text-sm font-medium text-zinc-900 underline" to="/">
            Voltar para dashboard
          </Link>
        </div>
      </div>
    </>
  )
}
