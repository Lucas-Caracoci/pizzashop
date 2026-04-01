import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, X } from "lucide-react";

export function OrderTableFilters() {
    return (
        <form className="flex items-center gap-2">
            <span className="text-sm font-semibold">Filtros:</span>
            <Input placeholder="Id do pedido" className="h-8 w-auto" />
            <Input placeholder="Buscar por nome do cliente" className="h-8 w-80" />
            <Select defaultValue="all">
                <SelectTrigger>
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">Todos</SelectItem>
                    <SelectItem value="pending">Pendente</SelectItem>
                    <SelectItem value="processing">Em processamento</SelectItem>
                    <SelectItem value="shipped">Enviado</SelectItem>
                    <SelectItem value="delivered">Entregue</SelectItem>
                </SelectContent>
            </Select>
            <Button variant="outline" >
                <Search className="h-4 w-4 mr-2" />
                Filtrar Resultados
            </Button>
            <Button variant="ghost" >
                <X className="h-4 w-4 mr-2" />
                Limpar Filtros
            </Button>
        </form>
    )
}