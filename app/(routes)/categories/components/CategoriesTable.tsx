"use client"

import { Button } from '@/app/components/ui/Button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/app/components/ui/DropdownMenu'
import { Icons } from '@/app/components/ui/Icons'
import TableMain from '@/app/components/ui/Table/TableMain'
import { formatNumber } from '@/app/lib/utils'
import { ColumnDef } from '@tanstack/react-table'
import { MoreHorizontal } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'

interface CategoriesTableProps {

}
type Category = {
    icon: any
    title: string
    productsNumber?: number
    variantNumber?: number
    sales: number
    stocks: number
    groups: number
}

const data: Category[] = [
    {

        title: 'Electronics',
        productsNumber: 10,
        variantNumber: 20,
        icon: Icons.electronics,
        sales: 1000,
        stocks: 100,
        groups: 10
    },
    {
        title: 'Beauty',
        productsNumber: 10,
        variantNumber: 20,
        icon: Icons.beauty,
        sales: 1000,
        stocks: 100,
        groups: 10
    },
    {
        title: 'Books',
        productsNumber: 10,
        variantNumber: 20,
        icon: Icons.books,
        sales: 1000,
        stocks: 100,
        groups: 10
    },
    {
        title: 'Investments',
        productsNumber: 10,
        variantNumber: 20,
        icon: Icons.barChart,
        sales: 1000,
        stocks: 100,
        groups: 10
    },
    {
        title: 'Music',
        productsNumber: 10,
        variantNumber: 20,
        icon: Icons.music,
        sales: 1000,
        stocks: 100,
        groups: 10
    },
]

const columns: ColumnDef<Category & { index: string }>[] = [

    {
        accessorKey: "index",
        header: "INDEX",
        cell: ({ row }) => (
            <div className="capitalize regular-text-14-medium !text-dark-2">{row.index + 1}</div>
        ),
    },
    {
        accessorKey: "title",
        header: "TITLE",
        cell: ({ row }) => {

            return (
                <div className="capitalize flex gap-3 regular-text-14-semibold text-dark-main">
                    <row.original.icon />
                    <span>{row.getValue("title")}</span>
                </div>
            )
        },
    },
    {
        accessorKey: "groups",
        header: "GROUPS",
        cell: ({ row }) => (
            <div className="capitalize regular-text-14-semibold text-dark-main flex gap-2 items-center">

                <span>
                    {row.getValue("groups")}</span></div>
        ),
    },
    {
        accessorKey: "stocks",
        header: "STOCKS",
        cell: ({ row }) => (
            <div className="capitalize regular-text-14-medium text-dark-main">
                {row.getValue("stocks")}
            </div>
        ),
    },
    {
        accessorKey: "productsNumber",
        header: "PRODUCTS",
        cell: ({ row }) => (
            <div className="capitalize regular-text-14-medium text-dark-main flex gap-1">
                <span>{formatNumber(row.getValue("productsNumber"), 'decimal')}</span>
                Products
            </div>
        ),
    },
    {
        accessorKey: "variantNumber",
        header: "VARIANTS",
        cell: ({ row }) => (
            <div className="capitalize regular-text-14-medium text-dark-main flex gap-1">
                <span>{formatNumber(row.getValue("variantNumber"), 'decimal')}</span>
                Variants
            </div>
        ),
    },
    {
        accessorKey: "sales",
        header: () => <div className="text-right">TOTAL SALES</div>,
        cell: ({ row }) => {

            return <div className="text-right regular-text-14-semibold text-dark-main">{formatNumber(row.getValue("sales"), 'currency')}</div>
        },
    },

    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const payment = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(payment.title)}
                        >
                            Copy payment ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href={`/products/${payment.title}`}>
                                View product details
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]

const CategoriesTable: FC<CategoriesTableProps> = ({ }) => {
    return <TableMain columns={columns} data={data} border={false} />
}

export default CategoriesTable