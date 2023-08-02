
import { FC } from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/app/components/ui/Table"
import { formatNumber } from '@/app/lib/utils'


interface MapTableProps {

}

const data = [
    {
        id: 1,
        state: 'California',
        orders: 200,
        sales: 200,
    },
    {
        id: 2,
        state: 'Texas',
        orders: 200,
        sales: 200,
    },
    {
        id: 3,
        state: 'Florida',
        orders: 200,
        sales: 200,
    },
    {
        id: 4,
        state: 'New York',
        orders: 200,
        sales: 200,
    },
]

const MapTable: FC<MapTableProps> = ({ }) => {
    return <Table>
        <TableHeader>
            <TableRow>
                <TableHead className="">STATES</TableHead>
                <TableHead>ORDERS</TableHead>
                <TableHead className="text-right">SALES</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {
                data.map((item) => (
                    <TableRow key={item.id} className='border-0' >
                        <TableCell className="regular-text-14-semibold">{item.state}</TableCell>
                        <TableCell className='regular-text-14-medium'>{formatNumber(item.orders, 'decimal')}</TableCell>
                        <TableCell className="text-right regular-text-14-medium">{formatNumber(item.sales, 'currency')}</TableCell>
                    </TableRow>

                ))
            }
        </TableBody>
    </Table>

}

export default MapTable