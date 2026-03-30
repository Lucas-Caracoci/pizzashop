

import { PageTitle } from '@/components/page-title'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function SignIn() {
  return (
    <>
      <PageTitle title="Entrar" />

      <div className="p-8 ">
        <div className='w-87.5 flex flex-col justify-center gap-6'>
          <div className='flex flex-col gap-2 text-center'>
            <h1 className='text-2xl font-semibold tracking-tight'>Acessar Painel</h1>
            <p className='text-small text-muted-foreground'>Acompanhe suas vendas pelo painel do parceiro</p>
          </div>
          <form className='space-y-4'>

            <div className='space-y-2'>
              <Label>Seu email</Label>
              <Input/>
            </div>

            <Button type='submit' >Acessar painel</Button >
          </form>

        </div>
      </div>
    </>
  )
}
