import { FC } from 'react'
import OrderStatusCard from './OrderStatusCard'
import OrderCard from './OrderCard'

interface OrdersKanbanViewProps {

}

const OrdersKanbanView: FC<OrdersKanbanViewProps> = ({ }) => {
    return <div className='grid grid-cols-4 gap-x-6 gap-y-4'>
        <div className="flex flex-col gap-4">
            <OrderStatusCard
                color='bg-green-main'
                title='Paid'
                count={10}
            />
            <OrderCard order={{
                status: 'Paid',
                date: '12/12/2021',
                method: 'Mastercard',
                price: 1200,
                customerName: 'Zachary Parker',
                customerImage: '/images/avatar.png',
            }} />
            <OrderCard order={{
                status: 'Paid',
                date: '12/12/2021',
                method: 'Mastercard',
                price: 1200,
                customerName: 'Zachary Parker',
                customerImage: '/images/avatar.png',
            }} />
            <OrderCard order={{
                status: 'Paid',
                date: '12/12/2021',
                method: 'Mastercard',
                price: 1200,
                customerName: 'Zachary Parker',
                customerImage: '/images/avatar.png',
            }} />
        </div>
        <div className="flex flex-col gap-4">
            <OrderStatusCard
                color='bg-red-main'
                title='Pending'
                count={10}
            />
            <OrderCard order={{
                status: 'Paid',
                date: '12/12/2021',
                method: 'Mastercard',
                price: 1200,
                customerName: 'Zachary Parker',
                customerImage: '/images/avatar.png',
            }} />
            <OrderCard order={{
                status: 'Paid',
                date: '12/12/2021',
                method: 'Mastercard',
                price: 1200,
                customerName: 'Zachary Parker',
                customerImage: '/images/avatar.png',
            }} />
        </div>
        <div className="flex flex-col gap-4">
            <OrderStatusCard
                color='bg-green-main'
                title='Completed'
                count={10}
            />
            <OrderCard order={{
                status: 'Paid',
                date: '12/12/2021',
                method: 'Mastercard',
                price: 1200,
                customerName: 'Zachary Parker',
                customerImage: '/images/avatar.png',
            }} />
            <OrderCard order={{
                status: 'Paid',
                date: '12/12/2021',
                method: 'Mastercard',
                price: 1200,
                customerName: 'Zachary Parker',
                customerImage: '/images/avatar.png',
            }} />
        </div>
        <div className="flex flex-col gap-4">
            <OrderStatusCard
                color='bg-yellow-main'
                title='Cancelled'
                count={10}
            />
            <OrderCard order={{
                status: 'Paid',
                date: '12/12/2021',
                method: 'Mastercard',
                price: 1200,
                customerName: 'Zachary Parker',
                customerImage: '/images/avatar.png',
            }} />
            <OrderCard order={{
                status: 'Paid',
                date: '12/12/2021',
                method: 'Mastercard',
                price: 1200,
                customerName: 'Zachary Parker',
                customerImage: '/images/avatar.png',
            }} />
        </div>




    </div>
}

export default OrdersKanbanView