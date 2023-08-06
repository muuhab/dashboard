import { FC } from 'react'
import OrderDetailsItem from './OrderDetailsItem'

interface OrderDetailsItemsProps {

}

const OrderDetailsItems: FC<OrderDetailsItemsProps> = ({ }) => {
    return <div className='mt-[9px] flex flex-col'>
        <OrderDetailsItem />
        <OrderDetailsItem />
        <OrderDetailsItem />
        <OrderDetailsItem />
    </div>
}

export default OrderDetailsItems