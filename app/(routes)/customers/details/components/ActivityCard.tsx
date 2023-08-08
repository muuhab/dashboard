import { Checkbox } from '@/app/components/ui/Checkbox'
import { Icons } from '@/app/components/ui/Icons'
import { Label } from '@/app/components/ui/Label'
import { FC } from 'react'

interface ActivityCardProps {

}

const ActivityCard: FC<ActivityCardProps> = ({ }) => {
    return <li className=' px-6 py-4'>
        <div className='flex justify-between border-b border-dark-5 pb-4 '>

            <div className="flex items-center gap-2">
                <Checkbox id="terms" className='border-dark-2 border-2' />
                <div className="flex gap-4">
                    <span className='flex items-center justify-center rounded-full bg-dark-6 w-9 h-9'>
                        <Icons.account />
                    </span>
                    <div className="flex flex-col">
                        <Label
                            htmlFor="terms"
                            className="regular-text-14-semibold text-dark-main"
                        >
                            You
                        </Label>
                        <p className='regular-text-14 text-dark-main'>You submitted a customer data request.</p>
                    </div>
                </div>
            </div>
            <span className='regular-text-12-medium text-dark-2'>10:18 AM</span>
        </div>
    </li>
}

export default ActivityCard