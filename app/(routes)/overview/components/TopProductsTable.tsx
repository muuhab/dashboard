"use client"

import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/app/components/ui/Table"
import { FC, useState } from 'react'
import { Button } from "@/app/components/ui/Button"
import { formatNumber } from "@/app/lib/utils"
import { Icons } from "@/app/components/ui/Icons"
import { Avatar } from "@/app/components/ui/Avatar"
import { AvatarImage } from "@radix-ui/react-avatar"

const data: Payment[] = [{
    "id": 1,
    "item": "Carroway Seed",
    "change": 0.75,
    "price": "24.22",
    "sold": "8827.68",
    "sales": "21.18M"
}, {
    "id": 2,
    "item": "Pasta - Rotini, Colour, Dry",
    "change": 0.71,
    "price": "10.85",
    "sold": "9983.62",
    "sales": "278.18M"
}, {
    "id": 3,
    "item": "Wine - Merlot Vina Carmen",
    "change": 0.39,
    "price": "57.87",
    "sold": "9770.74",
    "sales": "6.77B"
}, {
    "id": 4,
    "item": "Beer - Camerons Cream Ale",
    "change": 0.100,
    "price": "44.10",
    "sold": "1978.96",
    "sales": "6.71B"
}, {
    "id": 5,
    "item": "Sprouts - Bean",
    "change": 0.26,
    "price": "21.34",
    "sold": "9264.69",
    "sales": "217.64M"
}, {
    "id": 6,
    "item": "Soup - Verve - Chipotle Chicken",
    "change": 0.91,
    "price": "90.01",
    "sold": "857.16",
    "sales": "2.88B"
}, {
    "id": 7,
    "item": "Olives - Morracan Dired",
    "change": 0.91,
    "price": "79.69",
    "sold": "3443.82",
    "sales": "524.17M"
}, {
    "id": 8,
    "item": "Coffee - Beans, Whole",
    "change": 0.14,
    "price": "64.08",
    "sold": "8759.34",
    "sales": "10.72M"
}]

export type Payment = {
    id: number
    item: string
    change: number
    price: string
    sold: string
    sales: string
}


export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "item",
        header: "Item",
        cell: ({ row }) => (
            <div className=" flex gap-4 items-center">
                <Avatar className="rounded-sm">
                    <AvatarImage src="./images/top-products-img-1.png" />
                </Avatar>
                <span className="capitalize regular-text-14-semibold">
                    {row.getValue("item")}
                </span>
            </div>
        ),
    },
    {
        accessorKey: "change",
        header: "Change",
        cell: ({ row }) => (
            <div className="capitalize flex regular-text-14-medium">
                {Math.random() > 0.5 ?
                    <Icons.topRightArrow />
                    : <Icons.bottomRightArrow />
                }
                {formatNumber(row.getValue("change"), 'percent')}</div>
        ),
    },
    {
        accessorKey: "price",
        header: "Price",
        cell: ({ row }) => (
            <div className="capitalize regular-text-14-medium">{formatNumber(parseFloat(row.getValue("price")), 'currency')}</div>
        ),
    },
    {
        accessorKey: "sold",
        header: "Sold",
        cell: ({ row }) => (
            <div className="capitalize regular-text-14-medium">{formatNumber(parseFloat(row.getValue("sold")), 'currency')}</div>
        ),
    },

    {
        accessorKey: "sales",
        header: () => <div className="text-right">Sales</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("sales"))

            // Format the amount as a dollar amount
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(amount)

            return <div className="text-right regular-text-14-semibold">{formatted}</div>
        },
    },

]

interface TopProductsTableProps {

}

const TopProductsTable: FC<TopProductsTableProps> = ({ }) => {


    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <div className="w-full">

            <div className="rounded-md ">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id} className="regular-text-12-semibold !text-dark-2">
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                    className="border-0"
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

        </div>
    )
}

export default TopProductsTable