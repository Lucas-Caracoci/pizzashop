import { PackagePlus } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MonthOrdersAmountCard() {
  return (
    <Card>
      <CardHeader className="flex items-center justify-between pb-2">
        <CardTitle>Quantidade de pedidos (mês)</CardTitle>
        <PackagePlus className="text-muted-foreground h-4 w-4" />
      </CardHeader>
      <CardContent>
        <span className="text-2xl font-bold tracking-tight">100 </span>
        <p className="text-s text-muted-foreground">
          <span className="text-emerald-500 dark:text-emerald-400"> +2% </span>
          em relação ao mês anterior
        </p>
      </CardContent>
    </Card>
  )
}
