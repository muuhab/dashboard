import UserAvatar from '@/app/components/ui/Avatar/UserAvatar'
import { FC } from 'react'

interface OrderDetailsItemProps {

}

const OrderDetailsItem: FC<OrderDetailsItemProps> = ({ }) => {
    return <div className='flex justify-between px-5 py-8 border-b border-dark-6 last:border-b-0'>
        <div className="flex gap-3 items-center">
            <UserAvatar src='/images/headphones.png' className='w-16 h-16 rounded-sm ' cover />
            <div className="flex flex-col gap-1">
                <span className='regular-text-14-semibold text-dark-main'>
                    Aedle VK-X - Premium..
                </span>
                <span className='regular-text-14-medium text-dark-2'>
                    Type : VK-X-100A
                </span>
                <span className='regular-text-14-medium text-dark-2'>
                    Color : Metallic Silver
                </span>
            </div>
        </div>
        <div className="flex gap-8">
            <span className='regular-text-14-medium text-dark-2'>x1</span>
            <span className='regular-text-14-semibold  text-dark-main'>
                $15,302.00
            </span>
        </div>
    </div>
}

export default OrderDetailsItem