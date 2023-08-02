import { Avatar, AvatarFallback, AvatarImage } from '@/app/components/ui/Avatar'
import { Icons } from '@/app/components/ui/Icons'
import { formatNumber } from '@/app/lib/utils'
import clsx from 'clsx'
import { FC } from 'react'

interface TransactionsItemProps {
    customer: {
        id: number
        first_name: string
        last_name: string
        status: string
        cust_id: number
    }
}

const TransactionsItem: FC<TransactionsItemProps> = ({ customer }) => {
    return <li>
        <div className="flex items-center justify-between">
            <div className="flex gap-2 items-start">
                <Avatar className='w-6 h-6'>
                    {/* <AvatarImage src={customer.img} /> */}
                    <AvatarFallback>
                        <span className="regular-text-14-semibold">{customer.first_name[0]}{customer.last_name[0]}</span>
                    </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                    <span className="regular-text-14-semibold">{customer.first_name} {customer.last_name}</span>
                    <span className='regular-text-12-medium text-dark-2'>Customer ID #{customer.status}</span>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <span className='regular-text-12-semibold text-dark-main'> +{formatNumber(customer.cust_id, 'currency')}</span>
                <span className={
                    clsx('regular-text-12-medium ', customer.status === 'DECLINED' && '!text-red-main'
                        , customer.status === 'FOR PICKUP' && '!text-purple-main'
                        , customer.status === 'COMPLETED' && '!text-green-main'
                    )
                }>{customer.status}</span>
            </div>

        </div>
    </li>
}

export default TransactionsItem