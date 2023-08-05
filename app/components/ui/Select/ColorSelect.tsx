import { FC } from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../Select'
import { cn } from '@/app/lib/utils'
import { Label } from '../Label'


type item = {
    name: string
    value: string,
    color?: string
}


interface ColorSelectProps {
    defaultSelected?: string
    items?: item[]
    className?: string,
    label?: string
    id?: string
    placeholder?: string
    color?: string

}



const ColorSelect: FC<ColorSelectProps> = ({
    items,
    className,
    defaultSelected,
    id,
    label,
    color,
}) => {
    return <div className='flex flex-col gap-2'>
        <Label htmlFor={id} className='regular-text-14-medium text-dark-1'>
            {label}
        </Label>
        <Select defaultValue={defaultSelected} >
            <SelectTrigger className={cn(
                'bg-white flex items-center gap-2',
                className
            )} id={id}>
                <span className={cn(' w-2 h-2 rounded-full', color)} />

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

export default ColorSelect