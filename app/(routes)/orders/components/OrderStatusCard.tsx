import { Card, CardContent } from '@/app/components/ui/Card'
import { cn } from '@/app/lib/utils'
import { FC } from 'react'

interface OrderStatusCardProps {
    title: string
    color: string,
    count?: number
}

const OrderStatusCard: FC<OrderStatusCardProps> = ({
    title,
    color,
    count
}) => {
    return <Card className='form-1 px-5 py-[14px]'>
        <CardContent className='flex justify-between p-0'>
            <div className="flex gap-2 items-center">
                <span className={cn('w-[6px] h-[6px] rounded-full ', color)} />
                <span className='regular-text-14-semibold text-dark-main'>
                    {title}
                </span>
            </div>
            <span className='regular-text-14-medium text-dark-main'>
                {count}
                {` `}
                Orders
            </span>
        </CardContent>
    </Card>
}

export default OrderStatusCard