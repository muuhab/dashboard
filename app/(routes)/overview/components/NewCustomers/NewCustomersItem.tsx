import { Avatar, AvatarFallback, AvatarImage } from '@/app/components/ui/Avatar'
import { Icons } from '@/app/components/ui/Icons'
import { FC } from 'react'

interface NewCustomersItemProps {
    customer: {
        id: number
        first_name: string
        last_name: string
        img: string
        cust_id: number
    }
}

const NewCustomersItem: FC<NewCustomersItemProps> = ({ customer }) => {
    return <li>
        <div className="flex items-center justify-between">
            <div className="flex gap-2 items-center">
                <Avatar>
                    <AvatarImage src={customer.img} />
                    <AvatarFallback>
                        <span className="regular-text-14-semibold">{customer.first_name[0]}{customer.last_name[0]}</span>
                    </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                    <span className="regular-text-14-semibold">{customer.first_name} {customer.last_name}</span>
                    <span className='regular-text-12-medium text-dark-2'>Customer ID #{customer.cust_id}</span>
                </div>
            </div>
            <div className="flex gap-[10px] items-center">
                <Icons.block />
                <Icons.mail />
                <Icons.personAdd />
            </div>

        </div>
    </li>
}

export default NewCustomersItem