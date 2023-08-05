import { cn } from '@/app/lib/utils'
import { FC } from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../Select'
import { Icons } from '../Icons'



interface ViewSelectProps {
    defaultSelected?: string
}



const ViewSelect: FC<ViewSelectProps> = ({
    defaultSelected,
}) => {
    return <Select defaultValue={defaultSelected} >
        <SelectTrigger className={cn(
            'bg-white flex items-center gap-2 w-fit h-[40px]',
        )} >
            <SelectValue className={cn(
                'regular-text-14-semibold',
            )} />
        </SelectTrigger>
        <SelectContent>
            <SelectGroup>
                <SelectItem value='tile'>
                    <Icons.tileView className='w-5 h-5' />
                </SelectItem>

                <SelectItem value='kanban'>
                    <Icons.kanbanView className='w-5 h-5' />
                </SelectItem>

                <SelectItem value='list'>
                    <Icons.listView className='w-5 h-5' />
                </SelectItem>
            </SelectGroup>

        </SelectContent>
    </Select>


}

export default ViewSelect