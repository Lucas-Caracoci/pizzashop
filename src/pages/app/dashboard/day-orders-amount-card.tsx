import { PackagePlus } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function DayOrdersAmountCard() {
  return (
    <Card>
      <CardHeader className="flex items-center justify-between pb-2">
        <CardTitle>Quantidade de pedidos (dia)</CardTitle>
        <PackagePlus className="text-muted-foreground h-4 w-4" />
      </CardHeader>
      <CardContent>
        <span className="text-2xl font-bold tracking-tight">13 </span>
        <p className="text-s text-muted-foreground">
          <span className="text-rose-500 dark:text-rose-400"> -7% </span>
          em relação a ontem
        </p>
      </CardContent>
    </Card>
  )
}
