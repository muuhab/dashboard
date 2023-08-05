import { Avatar, AvatarFallback, AvatarImage } from '@/app/components/ui/Avatar'
import { Badge } from '@/app/components/ui/Badge'
import { Button } from '@/app/components/ui/Button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/app/components/ui/DropdownMenu'
import { Icons } from '@/app/components/ui/Icons'
import TableMain from '@/app/components/ui/Table/TableMain'
import { formatNumber } from '@/app/lib/utils'
import { Order } from '@/app/types/global'
import { ColumnDef } from '@tanstack/react-table'
import { MoreHorizontalIcon } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'

interface OrdersTableProps {

}


const data: Order[] = [
    {
        id: '#27839-00',
        customerName: 'John Doe',
        status: 'Pending',
        date: '12/12/2021',
        method: '******819',
        price: 1200,
        customerImage: '/images/avatar.png'
    },
    {
        id: '#27839-20',
        customerName: 'John Doe',
        status: 'Pending',
        date: '12/12/2021',
        method: '******819',
        price: 1200,
        customerImage: '/images/avatar.png'
    },

]

const columns: ColumnDef<Order & { index: string }>[] = [

    {
        accessorKey: "index",
        header: "NO",
        cell: ({ row }) => (
            <div className="capitalize regular-text-14-medium !text-dark-2">{row.index + 1}.</div>
        ),
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
        accessorKey: "customerName",
        header: "CUSTOMER NAME",
        cell: ({ row }) => {
            const customer = row.original
            return (
                <div className="capitalize regular-text-14-semibold text-dark-main flex gap-2 items-center">
                    <Avatar>
                        <AvatarImage src={customer.customerImage} />
                        <AvatarFallback>
                            {customer.customerName.charAt(0)}
                        </AvatarFallback>
                    </Avatar>
                    <span>
                        {customer.customerName}</span></div>
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
                <div className="flex gap-3">
                    <Icons.print className='w-6 h-6' />
                    <Icons.trash className='w-6 h-6' />
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontalIcon className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem
                                onClick={() => navigator.clipboard.writeText(payment.id)}
                            >
                                Copy payment ID
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>View customer</DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href={`/products/${payment.id}`}>
                                    View product details
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            )
        },
    },
]


const OrdersTable: FC<OrdersTableProps> = ({ }) => {
    return <TableMain columns={columns} data={data} border={false} />
}

export default OrdersTable