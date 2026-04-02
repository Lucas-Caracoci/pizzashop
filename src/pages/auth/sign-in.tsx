import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { PageTitle } from '@/components/page-title'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const SignInForm = z.object({
  email: z.email(),
})

type SignInForm = z.infer<typeof SignInForm>

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>()

  async function handleSignIn(data: SignInForm) {
    console.log(data)
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast.success('Enviamos um link de autenticação para o seu e-mail !')
  }

  return (
    <>
      <PageTitle title="Entrar" />

      <div className="p-8">
        <Button variant={'outline'} asChild className="absolute top-8 right-8">
          <Link to="/sign-up">Novo Estabelecimento</Link>
        </Button>
        <div className="flex w-87.5 flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar Painel
            </h1>
            <p className="text-small text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
            <div className="space-y-2">
              <Label>Seu email</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>

            <Button type="submit" disabled={isSubmitting}>
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
