import SelectMain from '@/app/components/ui/Select/SelectMain'
import { FC } from 'react'
import ActivityCard from './ActivityCard'
import { Button } from '@/app/components/ui/Button'
import { Icons } from '@/app/components/ui/Icons'

interface ActivitySectionProps {

}

const ActivitySection: FC<ActivitySectionProps> = ({ }) => {
    return <div className=' py-8 bg-white flex flex-col '>
        <div className="flex justify-between items-center px-6">
            <div className='flex gap-2 items-baseline  '>

                <h2 className='regular-text-18-semibold text-dark-main '>
                    Activity
                </h2>
                <span className='regular-text-16-medium text-dark-2'>(4)</span>
            </div>
            <SelectMain
                items={[
                    {
                        name: 'All',
                        value: 'all'
                    },
                    {
                        name: 'New',
                        value: 'new'
                    },
                ]}
                className='w-[98px]'
                defaultSelected='all'
            />
        </div>
        <ul className="flex flex-col mt-3">
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
        </ul>
        <Button variant={'secondary'} className='flex gap-2 w-fit mx-auto mt-9 bg-transparent border-dark-5 border' >
            <Icons.autoRenew />
            <span className='regular-text-14-semibold text-purple-main'>Load More</span>
        </Button>
    </div>
}

export default ActivitySection