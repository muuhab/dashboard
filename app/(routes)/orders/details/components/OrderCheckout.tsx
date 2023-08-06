"use client"

import { Divider } from '@chakra-ui/react'
import { FC } from 'react'

interface OrderCheckoutProps {

}

const OrderCheckout: FC<OrderCheckoutProps> = ({ }) => {
    return <div className='flex flex-col gap-5 w-[329px] self-end'>
        <div className="flex flex-col gap-3">
            <div className="flex justify-between">
                <span className='regular-text-14-medium text-dark-2'>Subtotal</span>
                <span className='regular-text-14-semibold text-dark-main'>$15,302.00</span>
            </div>
            <div className="flex justify-between">
                <span className='regular-text-14-medium text-dark-2'>Shipping</span>
                <span className='regular-text-14-semibold text-dark-main'>$0.00</span>
            </div>
            <div className="flex justify-between">
                <span className='regular-text-14-medium text-dark-2'>Tax</span>
                <span className='regular-text-14-semibold text-dark-main'>$0.00</span>
            </div>
            <div className="flex justify-between">
                <span className='regular-text-14-medium text-dark-2'>Total</span>
                <span className='regular-text-14-semibold text-dark-main'>$15,302.00</span>
            </div>
            <Divider className='bg-dark-6' />
            <div className="flex justify-between">
                <span className='regular-text-14-semibold text-dark-main'>Amount to be paid</span>
                <span className='regular-text-14-semibold text-dark-main'>$15,417.00</span>
            </div>
        </div>
    </div>
}

export default OrderCheckout