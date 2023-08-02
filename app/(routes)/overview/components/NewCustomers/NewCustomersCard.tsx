import { Card, CardContent, CardHeader } from '@/app/components/ui/Card'
import { FC } from 'react'
import NewCustomersTable from './NewCustomersItems'
import NewCustomersItems from './NewCustomersItems'
import { Icons } from '@/app/components/ui/Icons'

interface NewCustomersCardProps {

}

const NewCustomersCard: FC<NewCustomersCardProps> = ({ }) => {
    return <Card className='flex-grow xl:max-w-[384px]'>
        <CardHeader className='flex flex-row justify-between items-center'>
            <p className='regular-text-16-semibold'>New Customers</p>
            <div className='flex gap-[10px]'>
                <Icons.refresh />
                <Icons.more />
            </div>
        </CardHeader>
        <CardContent>
            <NewCustomersItems />
        </CardContent>
    </Card>
}

export default NewCustomersCard