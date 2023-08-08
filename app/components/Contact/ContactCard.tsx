import { cn } from '@/app/lib/utils'
import { FC } from 'react'

interface ContactCardProps {
    icon?: any
    iconColor?: string
    title: string
    subtitle: string
    secondary?: boolean
    border?: boolean
    size?: 'small' | 'medium' | 'large'
    children?: any
}

const ContactCard: FC<ContactCardProps> = ({
    icon: Icon,
    title,
    iconColor,
    subtitle,
    secondary,
    size = 'medium',
    border = true,
    children

}) => {
    return <div className="flex gap-3 items-center ">
        {
            children ? children :
                !border ?
                    <Icon className={
                        cn(
                            size === 'medium' && 'w-8 h-8 ',
                            size === 'large' && 'w-10 h-10 ',
                            iconColor && `[&>*]:fill-${iconColor} `
                        )
                    } />
                    :
                    <span className={cn(
                        'bg-white border-dark-5 border rounded-full flex justify-center items-center'
                        ,
                        size === 'medium' && 'w-8 h-8 p-1 ',
                        size === 'large' && 'w-10 h-10 p-2.5  ')}>
                        <Icon className={
                            cn(
                                'w-8 h-8 '
                                , iconColor && `[&>*]:fill-${iconColor} `)
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