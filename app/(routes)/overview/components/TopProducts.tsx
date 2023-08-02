import { Card, CardContent, CardHeader } from '@/app/components/ui/Card'
import { FC } from 'react'
import TopProductsTable from './TopProductsTable'

interface TopProductsProps {

}

const TopProducts: FC<TopProductsProps> = ({ }) => {
    return <Card className='flex-grow'>
        <CardHeader className='flex flex-row justify-between items-center'>
            <p className='regular-text-16-semibold'>Top Products</p>
            <p className='regular-text-14-medium !text-purple-main'>View all</p>
        </CardHeader>
        <CardContent>
            <TopProductsTable />
        </CardContent>
    </Card>
}

export default TopProducts