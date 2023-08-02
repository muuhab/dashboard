import { Card, CardContent, CardHeader } from '@/app/components/ui/Card'
import { Icons } from '@/app/components/ui/Icons'
import { FC } from 'react'
import TransactionsItems from './TransactionsItems'

interface TransactionsHistoryCardProps {

}

const TransactionsHistoryCard: FC<TransactionsHistoryCardProps> = ({ }) => {
    return <Card className='flex-grow xl:max-w-[384px]'>
        <CardHeader className='flex flex-row justify-between items-center'>
            <p className='regular-text-16-semibold'>Transaction History</p>
            <div className='flex gap-[10px]'>
                <Icons.refresh />
                <Icons.more />
            </div>
        </CardHeader>
        <CardContent>
            <TransactionsItems />
        </CardContent>
    </Card>
}

export default TransactionsHistoryCard