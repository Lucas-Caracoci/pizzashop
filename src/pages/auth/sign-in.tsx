import { Link } from 'react-router-dom'

import { PageTitle } from '@/components/page-title'

export function SignIn() {
  return (
    <>
      <PageTitle title="Entrar" />

      <div className="space-y-4">
        <h1 className="text-xl font-semibold">Entrar</h1>
        <p className="text-sm text-zinc-500">
          Acesse sua conta para gerenciar pedidos.
        </p>

        <Link className="text-sm font-medium text-zinc-900 underline" to="/">
          Ir para dashboard
        </Link>
      </div>
    </>
  )
}
