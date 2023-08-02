import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/Select'
import { FC } from 'react'

interface OverviewHeaderProps {

}

const OverviewHeader: FC<OverviewHeaderProps> = ({ }) => {
    return <header className='flex justify-between items-center'>
        <div className="flex flex-col  gap-2">
            <h1 className='headline-4'>
                Welcome back, Mohab
            </h1>
            <p className='regular-text-14-medium text-dark-2'>
                {`Here's what's happening with your store today.`}
            </p>
        </div>
        <Select defaultValue='yearly'>
            <SelectTrigger className="w-[225px] bg-white flex  ">
                <span className='whitespace-nowrap regular-text-14'>Show stats:{` `}</span>
                <SelectValue placeholder="Show stats" className='regular-text-14-semibold' />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>

                    <SelectItem value="yearly">Yearly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="daily">Daily</SelectItem>
                </SelectGroup>

            </SelectContent>
        </Select>

    </header>
}

export default OverviewHeader