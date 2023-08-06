"use client"


import { Tab, TabIndicator, TabList, Tabs } from '@chakra-ui/react'
import { FC } from 'react'
import CustomersTable from './components/CustomersTable'
import SubHeader from '@/app/components/header/SubHeader'
import { Button } from '@/app/components/ui/Button'
import { Icons } from '@/app/components/ui/Icons'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
    return <div className='px-8 flex flex-col gap-6'>
        <SubHeader
            buttonTitle='Add Customer'
            title='All CUstomers'
            search='Search'
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

                <CustomersTable />
            </div>
        </div>

    </div>


}

export default page