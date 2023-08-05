import { Tab, TabIndicator, TabList, Tabs } from '@chakra-ui/react'
import { FC } from 'react'
import OrdersTable from './OrdersTable'

interface OrdersListViewProps {

}

const OrdersListView: FC<OrdersListViewProps> = ({ }) => {
    return <div className='flex flex-col gap-6'>
        <Tabs position="relative" variant="unstyled" className='border-b border-dark-5'>
            <TabList className='regular-text-14-semibold text-dark-main'>
                <Tab>One</Tab>
                <Tab>Two</Tab>
                <Tab>Three</Tab>
            </TabList>
            <TabIndicator
                className='bg-purple-main'
                height="2px"
                bg="blue.500"
                borderRadius="1px"
            />

        </Tabs>
        <OrdersTable />
    </div>
}

export default OrdersListView