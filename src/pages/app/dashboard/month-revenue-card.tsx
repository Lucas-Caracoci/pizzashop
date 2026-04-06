import { DollarSign } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MonthRevenueCard() {
  return (
    <Card>
      <CardHeader className="flex items-center justify-between pb-2">
        <CardTitle>Receita total (mês)</CardTitle>
        <DollarSign className="text-muted-foreground h-4 w-4" />
      </CardHeader>
      <CardContent>
        <span className="text-2xl font-bold tracking-tight">R$ 10.000,00</span>
        <p className="text-s text-muted-foreground">
          <span className="text-emerald-500 dark:text-emerald-400"> +2% </span>
          em relação ao mês anterior
        </p>
      </CardContent>
    </Card>
  )
}
