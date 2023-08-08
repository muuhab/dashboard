import UserAvatar from '@/app/components/ui/Avatar/UserAvatar'
import { Badge } from '@/app/components/ui/Badge'
import { Button } from '@/app/components/ui/Button'
import { Checkbox } from '@/app/components/ui/Checkbox'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/app/components/ui/DropdownMenu'
import { Icons } from '@/app/components/ui/Icons'
import TableMain from '@/app/components/ui/Table/TableMain'
import { formatNumber } from '@/app/lib/utils'
import { Customer, Order } from '@/app/types/global'
import { ColumnDef } from '@tanstack/react-table'
import { MoreHorizontalIcon } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'

interface OrdersPlacedTableProps {

}

export type OrderPlaced = Pick<Order, 'date' | 'status' | 'id' | 'method' | 'price'>


const data: OrderPlaced[] = [
    {
        id: '#27839-00',
        status: 'Pending',
        date: '12/12/2021',
        method: '******819',
        price: 1200,
    },
    {
        id: '#27839-20',
        status: 'Pending',
        date: '12/12/2021',
        method: '******819',
        price: 1200,
    },

]

const columns: ColumnDef<OrderPlaced & { index: string }>[] = [


    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={table.getIsAllPageRowsSelected()}
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },

    {

        accessorKey: "id",
        header: "ORDER ID",
        cell: ({ row }) => {

            return (
                <div className="capitalize  regular-text-14-medium text-dark-2">
                    <span>{row.getValue("id")}</span>
                </div>
            )
        },
    },
    {
        accessorKey: "date",
        header: "DATE",
        cell: ({ row }) => {

            return (
                <div className="capitalize  regular-text-14-semibold text-dark-main">
                    <span>{row.getValue("date")}</span>
                </div>
            )
        },
    },
    {
        accessorKey: "status",
        header: "STATUS",
        cell: ({ row }) => (
            <Badge className="capitalize regular-text-14-medium text-red-main bg-red-light-main rounded-sm">
                {row.getValue("status")}
            </Badge>
        ),
    },
    {
        accessorKey: "method",
        header: "METHOD",
        cell: ({ row }) => {

            return (
                <div className="capitalize flex gap-2 items-center  regular-text-14-semibold text-dark-main">
                    <Icons.mastercard className='w-8 h-8' />
                    <span>{row.getValue("method")}</span>
                </div>
            )
        },
    },

    {
        accessorKey: "price",
        header: () => <div className="text-right">PRICE</div>,
        cell: ({ row }) => {

            return <div className="text-right regular-text-14-semibold text-dark-main">{formatNumber(row.getValue("price"), 'currency')}</div>
        },
    },

    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const payment = row.original

            return (
                <div className="">
                    <Button variant={'secondary'} size={'icon'} className='bg-transparent border-purple-main rounded-sm border !p-0 h-7 w-7'>
                        <Icons.fileDownload className='[&>*]:fill-purple-main w-4 h-4' />
                    </Button>
                </div>
            )
        },
    },
]


const OrdersPlacedTable: FC<OrdersPlacedTableProps> = ({ }) => {
    return <TableMain columns={columns} data={data} border={false} />
}

export default OrdersPlacedTable