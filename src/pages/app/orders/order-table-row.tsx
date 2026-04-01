import { Button } from "@/components/ui/button"
import { TableCell, TableRow } from "@/components/ui/table"
import { ArrowRight, Search, X } from "lucide-react"


export function OrderTableRow() {
    return (
        <TableRow>
            <TableCell>
                <Button variant="outline" size="sm">
                    <Search className="h-4 w-4" />
                    <span className="sr-only">Ver detalhes do pedido</span>
                </Button>
            </TableCell>
            <TableCell className="font-mono text-sm font-medium">#123456</TableCell>
            <TableCell className="text-muted-foreground">há 20 minutos</TableCell>
            <TableCell>
                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-yellow-400"></span>
                    <span className="font-medium text-muted-foreground">Pendente</span>
                </div>
            </TableCell>
            <TableCell className="font-medium">Lucas Caracoci Gomes Lima</TableCell>
            <TableCell className="font-medium">R$ 59,90</TableCell>
            <TableCell>
                <Button variant="outline" size="sm">
                    <ArrowRight className="h-4 w-4 mr-2 text-green-500" />
                    Aprovar
                </Button>
            </TableCell>
            <TableCell>
                <Button variant="ghost" size="sm">
                    <X className="h-4 w-4 mr-2 text-red-500" />
                    Cancelar
                </Button>
            </TableCell>


        </TableRow>
    )
}