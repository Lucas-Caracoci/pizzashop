import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'

import { Button } from './ui/button'

export interface PaginationProps {
  totalCount: number
  perPage: number
  pageIndex: number
}

export const Pagination = ({
  totalCount,
  perPage,
  pageIndex,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalCount / perPage)

  return (
    <div className="flex items-center justify-between">
      <span className="text-muted-foreground text-sm">
        total de itens: {totalCount}
      </span>
      <div className="flex items-center gap-4 lg:gap-8">
        <div className="text-sm font-medium">
          Página {pageIndex + 1} de {totalPages}
        </div>
        <div className="flex items-center gap-2">
          <Button variant={'outline'} className="h-8 w-8">
            <ChevronsLeft className="h-4 w-4" />
            <span className="sr-only">Primeira página</span>
          </Button>
          <Button variant={'outline'} className="h-8 w-8">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Página anterior</span>
          </Button>
          <Button variant={'outline'} className="h-8 w-8">
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Página seguinte</span>
          </Button>
          <Button variant={'outline'} className="h-8 w-8">
            <ChevronsRight className="h-4 w-4" />
            <span className="sr-only">Última página</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
