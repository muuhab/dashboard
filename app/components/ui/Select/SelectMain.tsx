import { FC } from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../Select'
import { cn } from '@/app/lib/utils'


type item = {
    name: string
    value: string
}


interface SelectMainProps {
    placeholder?: string
    defaultSelected?: string
    items?: item[]
    className?: string,
}

const SelectMain: FC<SelectMainProps> = ({ items, placeholder, defaultSelected, className }) => {
    return <Select defaultValue={defaultSelected}>
        <SelectTrigger className={cn(
            'bg-white flex',
            className
        )}>
            {placeholder
                &&
                <span className='whitespace-nowrap regular-text-14'>{placeholder}:{` `}</span>
            }
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
}

export default SelectMain