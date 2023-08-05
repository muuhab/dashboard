import { FC } from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../Select'
import { cn } from '@/app/lib/utils'
import { Label } from '../Label'


type item = {
    name: string
    value: string
}


interface SelectSecondaryProps {
    defaultSelected?: string
    items?: item[]
    className?: string,
    label?: string
    id?: string
    additionalBtn?: React.ReactNode
}

const SelectSecondary: FC<SelectSecondaryProps> = ({ items, id, label, defaultSelected, className, additionalBtn }) => {
    return <div className='flex flex-col gap-2'>
        <Label htmlFor={id} className='regular-text-14-medium text-dark-1 flex justify-between items-center'>
            <span>

                {label}
            </span>
            {additionalBtn}
        </Label>
        <Select defaultValue={defaultSelected} >
            <SelectTrigger className={cn(
                'bg-white flex',
                className
            )} id={id}>

                <SelectValue className={cn(
                    'regular-text-14-semibold',
                    className
                )} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {items?.map((item, index) => (
                        <SelectItem key={index} value={item.value}>{item.name}</SelectItem>
                    ))}
                </SelectGroup>

            </SelectContent>
        </Select>
    </div>
}

export default SelectSecondary