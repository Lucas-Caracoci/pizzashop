import { PageTitle } from "@/components/page-title";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { OrderTableRow } from "./order-table-row";
import { OrderTableFilters } from "./order-table-filters";

export function Orders() {
    return (
        <>
            <PageTitle title="Pedidos" />
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
            </div>
            <div className="space-y-2.5">
               <OrderTableFilters />
                <div className="border rounded-md">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-16"></TableHead>
                                <TableHead className="w-36">Identificador</TableHead>
                                <TableHead className="w-44">Realizado há</TableHead>
                                <TableHead className="w-36">Status</TableHead>
                                <TableHead >Cliente</TableHead>
                                <TableHead className="w-36">Total do pedido</TableHead>
                                <TableHead className="w-40"></TableHead>
                                <TableHead className="w-32"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {Array.from({ length: 10 }).map((_, i) => {
                                return (
                                    <OrderTableRow key={i}/>
                                )
                            })}


                        </TableBody>
                    </Table>

                </div>
            </div>
        </>
    )
}