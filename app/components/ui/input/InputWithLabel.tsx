import { FC } from 'react'
import { Input } from '../Input'
import { Label } from '../Label'

interface InputWithLabelProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string
    type?: string
    placeholder?: string
    title: string
}

const InputWithLabel: FC<InputWithLabelProps> = ({
    id,
    type = 'text',
    placeholder,
    title,
    ...props
}) => {
    return <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor={id} className='regular-text-14-medium text-dark-1'>{title}</Label>
        <Input type={type} id={id} placeholder={placeholder} className='form-1 regular-text-14-medium text-dark-main flex gap-3 items-start px-3 pt-3 pb-3 ' {...props} />
    </div>
}

export default InputWithLabel