import { FC } from 'react'
import { Input } from '../Input'
import { Label } from '../Label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../Select'

type item = {
    name: string
    value: string
}

interface InputNumberProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string
    type?: string
    placeholder?: string
    title: string
    defaultSelected?: string
    items?: item[]
}

const InputNumber: FC<InputNumberProps> = ({
    id,
    type = 'number',
    placeholder,
    title,
    defaultSelected,
    items,
    ...props
}) => {
    return <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor={id} className='regular-text-14-medium text-dark-1'>{title}</Label>
        <div className='flex'>
            <Select defaultValue={defaultSelected}>
                <SelectTrigger className="w-[77px] ">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {items?.map((item, index) => (
                            <SelectItem key={index} value={item.value}>{item.name}</SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Input type={type} id={id} placeholder={placeholder} className='form-1 regular-text-14-medium text-dark-main flex gap-3 items-start px-3 pt-3 pb-3 
          
            ' {...props} />

        </div>
    </div>
}

export default InputNumber