import UserAvatar from '@/app/components/ui/Avatar/UserAvatar'
import { Badge } from '@/app/components/ui/Badge'
import { Button } from '@/app/components/ui/Button'
import { Card, CardContent } from '@/app/components/ui/Card'
import { Icons } from '@/app/components/ui/Icons'
import { Order } from '@/app/types/global'
import { Divider } from '@chakra-ui/react'
import { FC } from 'react'


interface OrderCardProps {
    order: Order
}

const OrderCard: FC<OrderCardProps> = ({
    order
}) => {
    return <Card className=' form-1'>
        <CardContent className='p-0 flex flex-col'>
            <div className="flex justify-between items-center p-5 ">
                <div className="flex gap-3 items-center">

                    <UserAvatar
                        src={order.customerImage}
                        fallback={order.customerName.charAt(0)}
                    />
                    <span className='regular-text-14-semibold  text-dark-main'>
                        {order.customerName}
                    </span>
                </div>
                <Badge className="capitalize regular-text-14-medium text-red-main bg-red-light-main rounded-sm px-3">
                    {order.status}
                </Badge>
            </div>
            <Divider className=' w-full' />
            <div className='p-5'>
                <div className="flex justify-between border-b border-dark-5 pb-4">
                    <span className='regular-text-12-medium text-dark-2'>ORDER ID</span>
                    <span className='regular-text-12-semibold text-dark-main'>{order.id}</span>
                </div>
                <div className="flex justify-between border-b border-dark-5 py-4">
                    <span className='regular-text-12-medium text-dark-2'>METHOD ID</span>
                    <div className="flex gap-2 items-center">
                        <Icons.mastercard className='w-5 h-5' />
                        <span className='regular-text-12-semibold text-dark-main'>{order.method}</span>
                    </div>
                </div>
                <div className="flex justify-between border-b border-dark-5 py-4">
                    <span className='regular-text-12-medium text-dark-2'>DATE</span>
                    <span className='regular-text-12-semibold text-dark-main'>{order.date}</span>
                </div>
                <div className="flex justify-between  pt-4">
                    <span className='regular-text-12-medium text-dark-2'>PRICE</span>
                    <span className='regular-text-12-semibold text-dark-main'>{order.price}</span>
                </div>
                <div className='mt-6'>
                    <div className='flex justify-evenly p-0 gap-4  '>
                        <Button variant={'ghost'} size={'icon'}>

                            <Icons.print className='fill-dark-3 w-5 h-5' />
                        </Button>
                        <div>
                            <Divider orientation='vertical' className='bg-dark-5 w-[1px]' />
                        </div>
                        <Button variant={'ghost'} size={'icon'}>

                            <Icons.trash className='h-5 w-5' />
                        </Button>
                    </div>
                </div>

            </div>
        </CardContent>
    </Card>
}

export default OrderCard