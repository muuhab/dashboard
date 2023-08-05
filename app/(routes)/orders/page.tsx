"use client"

import SubHeader from '@/app/components/header/SubHeader'
import { Button } from '@/app/components/ui/Button'
import { Icons } from '@/app/components/ui/Icons'
import { Tab, TabIndicator, TabList, Tabs } from '@chakra-ui/react'
import { FC } from 'react'
import OrdersTable from './components/OrdersTable'
import OrdersListView from './components/OrdersListView'
import OrdersKanbanView from './components/OrdersKanbanView'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
    return <div className='px-8 flex flex-col gap-6'>
        <SubHeader
            buttonTitle='Add New Order'
            title='Orders'
            search='Search orders...'
            showView
        >
            <div className="flex gap-3">
                <Button variant={'outline'} size={'icon'} className='p-0 border-purple-main'>
                    <Icons.refresh className='fill-purple-main w-5 h-5' />
                </Button>
                <Button size={'icon'} className='p-0' >
                    <Icons.fileDownload className='fill-white w-5 h-5' />
                </Button>
            </div>
        </SubHeader>
        {false ?
            <OrdersListView />
            :
            <OrdersKanbanView />
        }

    </div>
}

export default page