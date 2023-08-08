"use client"

import ContactCard from '@/app/components/Contact/ContactCard'
import ContactCardHeader from '@/app/components/Contact/ContactCardHeader'
import SubHeaderSecondary from '@/app/components/header/SubHeaderSecondary'
import UserAvatar from '@/app/components/ui/Avatar/UserAvatar'
import { Button } from '@/app/components/ui/Button'
import { Icons } from '@/app/components/ui/Icons'
import { Divider, Tab, TabIndicator, TabList, Tabs } from '@chakra-ui/react'
import { MapPin } from 'lucide-react'
import { FC } from 'react'
import LineChartComponent from '../../overview/components/LineChartComponent'
import Editor from '@/app/components/ui/Editor/Editor'
import OrdersPlacedTable from './components/OrdersPlaced'
import ActivitySection from './components/ActivitySection'

interface pageProps {

}

const chartdata = [
    {
        month: "Apr",
        "Today": 2.04,
        "Yesterday": 1.53,
    },
    {
        month: 'May',
        "Today": 1.96,
        "Yesterday": 1.58,
    },
    {
        month: 'June',
        "Today": 1.96,
        "Yesterday": 1.61,
    },
    {
        month: 'July',
        "Today": 1.93,
        "Yesterday": 1.61,
    },

];

const page: FC<pageProps> = ({ }) => {
    return <div className=' flex flex-col gap-6'>
        <div className='px-8'>

            <SubHeaderSecondary
                title='Zachary Parker'
                items={[
                    {
                        name: 'Customer',
                        href: '/customer',
                        current: false
                    },
                    {
                        name: 'Customer Details',
                        href: '/customer/details',
                        current: true
                    }
                ]}
            >
                <div className="flex gap-3 items-center">
                    <Button className='bg-white'>
                        <Icons.call className='w-4 h-4' />
                        <span className='regular-text-14-semibold text-dark-1'>Call</span>
                    </Button>
                    <Button variant={'secondary'} className=' regular-text-14-semibold text-white gap-2'  >
                        <Icons.mail className='w-4 h-4 [&>*]:fill-white' />
                        <span>Direct Chat</span>
                    </Button>
                </div>
            </SubHeaderSecondary>

        </div>
        <div className="flex justify-between  ">
            <div className='w-[726px] flex flex-col gap-8'>

                <div className="flex flex-col   bg-white ml-8 mt-10 p-6 rounded-sm">

                    <div className="flex justify-between">
                        <ContactCard
                            title='Zachary Parker'
                            subtitle='renasaevu@bej.edu'

                        >
                            <UserAvatar src='/images/avatar.png' className='w-10 h-10' />

                        </ContactCard>
                        <Button>
                            Save Changes
                        </Button>
                    </div>
                    <Editor className='min-h-[160px] form-1 mt-7' />

                    <div className="flex flex-col gap-4 mt-16 p-6">
                        <div className='flex gap-2 items-baseline  '>

                            <h2 className='regular-text-18-semibold text-dark-main '>
                                Order details
                            </h2>
                            <span className='regular-text-16-medium text-dark-2'>(4)</span>
                        </div>

                        <div className='flex flex-col gap-6'>
                            <Tabs position="relative" variant="unstyled" className='border-b border-dark-5'>
                                <TabList className='regular-text-14 text-dark-main' >
                                    <Tab className='aria-selected:font-semibold' >All</Tab>
                                    <Tab className='aria-selected:font-semibold'>New</Tab>
                                    <Tab className='aria-selected:font-semibold'>Returning</Tab>
                                    <Tab className='aria-selected:font-semibold'>Abandoned Checkout</Tab>
                                    <Tab className='aria-selected:font-semibold'>Subscribers</Tab>
                                </TabList>
                                <TabIndicator
                                    className='bg-purple-main'
                                    height="2px"
                                    bg="blue.500"
                                    borderRadius="1px"
                                />

                            </Tabs>
                            <div className='bg-white rounded-sm'>

                                <OrdersPlacedTable />
                            </div>
                        </div>

                    </div>

                </div>

                <div className='ml-8'>

                    <ActivitySection />
                </div>

            </div>




            <div className="flex flex-col gap-7 bg-white p-8 pb-20 border-t border-dark-5 w-[400px] ">

                <div className="flex flex-col gap-5">
                    <ContactCardHeader title='Contact Info' />
                    <div className="flex justify-between items-center mt-1">
                        <ContactCard
                            title='Zachary Parker'
                            subtitle='renasaevu@bej.edu'

                        >
                            <UserAvatar src='/images/avatar.png' className='w-10 h-10' />

                        </ContactCard>

                        <Button variant={'ghost'} size={'icon'}>
                            <Icons.arrowDown className='-rotate-90 w-5 h-5 [&>*]:fill-dark-2' />
                        </Button>
                    </div>
                    <ContactCard
                        icon={Icons.mail}
                        title='Email'
                        subtitle='renasaevu@bej.edu'
                        iconColor='black'
                        size='large'

                    />
                    <ContactCard
                        icon={Icons.phone}
                        title='Phone'
                        subtitle='(562) 975-6876'
                        iconColor='black'
                        size='large'
                    />
                    <ContactCard
                        icon={Icons.instagram}
                        title='Instagram'
                        subtitle='@zachary_p'
                        iconColor='black'
                        size='large'
                    />
                    <Divider className='bg-dark-5' />
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
                <Divider className='bg-dark-5' />
                <p className='regular-text-18-bold text-dark-main'>Website Stats Activity</p>

                <LineChartComponent data={chartdata} legends={[
                    {
                        name: "Today",
                        color: "indigo",
                    },
                    {
                        name: "Yesterday",
                        color: "gray",
                    },
                ]} secondary />
            </div>


        </div>
    </div>
}

export default page