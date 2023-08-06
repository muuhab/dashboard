"use client"

import SubHeaderSecondary from '@/app/components/header/SubHeaderSecondary'
import { FC } from 'react'
import OrderDetailsItems from './components/OrderDetailsItems'
import OrderCheckout from './components/OrderCheckout'
import UserAvatar from '@/app/components/ui/Avatar/UserAvatar'
import { Button } from '@/app/components/ui/Button'
import { Icons } from '@/app/components/ui/Icons'
import { Divider } from '@chakra-ui/react'
import ContactCard from './components/ContactCard'
import { MapPin } from 'lucide-react'

interface pageProps {

}


const ContactCardHeader = ({ title }: { title: string }) => {
    return <div className="flex justify-between">
        <span className='regular-text-14-semibold text-dark-main'>{title}</span>
        <span className="flex items-center">

            <span className='regular-text-14-medium text-purple-main'>Edit Info  </span>
            <Icons.arrowDown className='-rotate-90 [&>*]:fill-purple-main w-4 h-4' />
        </span>
    </div>
}

const page: FC<pageProps> = ({ }) => {
    return <div className=' flex flex-col gap-6'>
        <div className='px-8'>

            <SubHeaderSecondary
                buttonTitle='Edit Order'
                title='Order #27839-00'
            />
        </div>
        <div className="flex justify-between  ">
            <div className="flex flex-col  w-[726px] pb-16 pl-8">
                <div className='flex gap-2 items-baseline pl-6 border-t border-dark-5 pt-14'>

                    <h2 className='regular-text-18-semibold text-dark-main '>
                        Order details
                    </h2>
                    <span className='regular-text-16-medium text-dark-2'>(4)</span>
                </div>

                <OrderDetailsItems />
                <OrderCheckout />

            </div>
            <div className="flex flex-col gap-7 bg-white p-8 pb-20 border-t border-dark-5 w-[400px] ">
                <h2 className='regular-text-18-semibold text-dark-main mb-6'>
                    Customer
                </h2>
                <div className="flex flex-col gap-5">
                    <div className="flex justify-between items-center">
                        <div className=" flex gap-3 items-center">
                            <UserAvatar src='/images/avatar.png' className='w-10 h-10' />
                            <div className="flex flex-col ">

                                <span className='capitalize regular-text-14-semibold text-dark-main'>
                                    Zachary Parker</span>
                                <span className=' regular-text-14-medium text-dark-3'>
                                    renasaevu@bej.edu</span>
                            </div>
                        </div>
                        <Button variant={'ghost'} size={'icon'}>
                            <Icons.arrowDown className='-rotate-90 w-5 h-5 [&>*]:fill-dark-2' />
                        </Button>
                    </div>
                    <Divider className='bg-dark-5' />
                    <div className="flex justify-between items-center">
                        <div className=" flex gap-3 items-center">
                            <span className='bg-green-light-main rounded-full p-2 w-10 h-10 flex justify-center items-center'>
                                <Icons.receipt className='w-4 h-4 [&>*]:fill-green-main' />
                            </span>

                            <span className='capitalize regular-text-14-semibold text-dark-main'>
                                Order History</span>

                        </div>
                        <Button variant={'ghost'} size={'icon'}>
                            <Icons.arrowDown className='-rotate-90 w-5 h-5 [&>*]:fill-dark-2' />
                        </Button>
                    </div>
                    <Divider className='bg-dark-5' />
                </div>
                <div className="flex flex-col">
                    <ContactCardHeader title='Contact Information' />
                    <div className="flex flex-col gap-5 mt-4">
                        <ContactCard
                            icon={Icons.mail}
                            title='Email'
                            subtitle='renasaevu@bej.edu'
                            iconColor='black'

                        />
                        <ContactCard
                            icon={Icons.phone}
                            title='Phone'
                            subtitle='(562) 975-6876'
                            iconColor='black'
                        />
                        <ContactCard
                            icon={Icons.instagram}
                            title='Instagram'
                            subtitle='@zachary_p'
                            iconColor='black'
                        />

                        <Divider className='bg-dark-5' />
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <ContactCardHeader title='Shipping Address' />
                    <ContactCard
                        icon={MapPin}
                        title='45 Roker Terrace, Latheronweel
                        KW5 8NW, London'
                        subtitle='🇬🇧 United Kingdom'
                        iconColor='dark-5'
                        secondary
                    />
                    <Divider className='bg-dark-5' />
                </div>
                <div className="flex flex-col gap-4">
                    <ContactCardHeader title='Billing Address' />
                    <ContactCard
                        icon={MapPin}
                        title='45 Roker Terrace, Latheronweel
                        KW5 8NW, London'
                        subtitle='🇬🇧 United Kingdom'
                        iconColor='dark-5'
                        secondary
                    />
                    <Divider className='bg-dark-5' />
                </div>
                <div className="flex flex-col gap-4">
                    <ContactCardHeader title='MasterCard' />
                    <ContactCard
                        icon={Icons.mastercard}
                        title='Card Number'
                        subtitle='**** **** **** *819'
                        border={false}
                    />
                </div>

            </div>


        </div>
    </div>
}

export default page