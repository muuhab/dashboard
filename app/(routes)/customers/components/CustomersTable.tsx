import UserAvatar from '@/app/components/ui/Avatar/UserAvatar'
import { Button } from '@/app/components/ui/Button'
import { Checkbox } from '@/app/components/ui/Checkbox'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/app/components/ui/DropdownMenu'
import { Icons } from '@/app/components/ui/Icons'
import TableMain from '@/app/components/ui/Table/TableMain'
import { formatNumber } from '@/app/lib/utils'
import { Customer } from '@/app/types/global'
import { ColumnDef } from '@tanstack/react-table'
import { MoreHorizontalIcon } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'

interface CustomersTableProps {

}


const data: Customer[] = [
    {
        id: '219300100',
        name: 'Zachary Parker',
        email: 'lo@kac.co.uk',
        orders: 67,
        from: 'France',
        spending: 1200,
        change: 0.057,
        img: '/images/avatar.png'
    },
    {
        id: '219300120',
        name: 'Ina Crawford',
        email: 'pebajoc@edib.net',
        orders: 67,
        from: 'France',
        spending: 1200,
        change: 0.057,
        img: '/images/avatar.png'

    },
    {
        id: '219300130',
        name: 'Birdie Santiago',
        email: 'disnu@rujaju.org',
        orders: 67,
        from: 'France',
        spending: 1200,
        change: 0.057,
        img: '/images/avatar.png'

    },


]

const columns: ColumnDef<Customer & { index: string }>[] = [


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
        header: "ID",
        cell: ({ row }) => {

            return (
                <div className="capitalize  regular-text-14-medium text-dark-2">
                    <span>{row.getValue("id")}</span>
                </div>
            )
        },
    },
    {
        accessorKey: "name",
        header: "NAME",
        cell: ({ row }) => {
            const customer = row.original
            return (
                <div className="capitalize regular-text-14-semibold text-dark-main flex gap-2 items-center">
                    <UserAvatar
                        src={customer.img}
                        className='w-[38px] h-[38px]'
                        fallback={customer.name.charAt(0)}
                    />
                    <span>
                        {customer.name}
                    </span>
                </div>
            )
        },
    },
    {
        accessorKey: "email",
        header: "EMAIL",
        cell: ({ row }) => (
            <div className="capitalize regular-text-14-medium text-dark-main">
                {row.getValue("email")}
            </div>
        ),
    },
    {
        accessorKey: "from",
        header: "Country",
        cell: ({ row }) => {

            return (
                <div className="capitalize  regular-text-14-semibold text-dark-main">
                    <span>{row.getValue("from")}</span>
                </div>
            )
        },
    },
    {
        accessorKey: "orders",
        header: "Order",
        cell: ({ row }) => {

            return (
                <div className="capitalize  regular-text-14-semibold text-dark-main">
                    <span>{formatNumber(row.getValue("orders"), 'decimal')} Orders</span>
                </div>
            )
        },
    },
    {
        accessorKey: "change",
        header: "change",
        cell: ({ row }) => {

            return (
                <div className="capitalize  regular-text-14-semibold text-dark-main">
                    <span>
                        {Math.random() > 0.5 ?
                            <Icons.topRightArrow />
                            : <Icons.bottomRightArrow />
                        }
                        {formatNumber(row.getValue("change"), 'percent')}</span>
                </div>
            )
        },
    },

    {
        accessorKey: "spending",
        header: () => <div className="text-right">SPENDING</div>,
        cell: ({ row }) => {

            return <div className="text-right regular-text-14-semibold text-dark-main">{formatNumber(row.getValue("spending"), 'currency')}</div>
        },
    },

    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const payment = row.original

            return (
                <div className="flex gap-3">
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
                                onClick={() => navigator.clipboard.writeText(payment.id!)}
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


const CustomersTable: FC<CustomersTableProps> = ({ }) => {
    return <TableMain columns={columns} data={data} border={false} />
}

export default CustomersTable