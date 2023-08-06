import { cn } from '@/app/lib/utils'
import { FC } from 'react'

interface ContactCardProps {
    icon: any
    iconColor?: string
    title: string
    subtitle: string
    secondary?: boolean
    border?: boolean
}

const ContactCard: FC<ContactCardProps> = ({
    icon: Icon,
    title,
    iconColor,
    subtitle,
    secondary,
    border = true

}) => {
    return <div className="flex gap-3 items-center ">
        {
            !border ?
                <Icon className={
                    cn('w-8 h-8 ', iconColor && `[&>*]:fill-${iconColor} `)
                } />
                :
                <span className='bg-white border-dark-5 border rounded-full p-1 w-8 h-8 flex justify-center items-center'>
                    <Icon className={
                        cn('w-4 h-4 ', iconColor && `[&>*]:fill-${iconColor} `)
                    } />
                </span>
        }
        <div className="flex flex-col ">

            <span className={
                cn(
                    'capitalize',
                    secondary ? 'regular-text-14-medium text-dark-main' : ' regular-text-12 text-dark-3'
                )
            }>
                {title}</span>
            <span className={
                cn(
                    'regular-text-14-medium',
                    secondary ? ' text-dark-3' : '  text-dark-main'
                )
            }>
                {subtitle}</span>
        </div>
    </div>
}

export default ContactCard