import { FC } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/Card'
import { Icons } from '../ui/Icons'
import { buttonVariants } from '../ui/Button'
import clsx from 'clsx'
import { formatNumber, formatNumberK } from '@/app/lib/utils'
import { NumberFormatStyle } from '@/app/types/global'

interface MainCardProps {
    title: string
    amount: number
    state?: 'up' | 'down'
    today: number,
    formatStyle?: NumberFormatStyle
    icon?: any,
    secondary?: boolean,
    percentage: number

}

const MainCard: FC<MainCardProps> = ({ title, icon: Icon, secondary, amount
    , state = 'up',
    formatStyle,
    percentage
    , today }) => {
    return <Card
        className={clsx(' bg-white w-[281px] shadow-none ',
            secondary && 'bg-purple-main')}>
        <CardHeader>
            <CardTitle className='flex gap-2 items-center'>
                <span className={clsx(' rounded-full p-1.5 ',
                    secondary ? 'bg-[--statsShape-1]' : 'bg-[--statsShape-2]'
                )}>
                    <Icon className={clsx('w-3 h-3  ',
                        secondary ? 'fill-white' : 'fill-purple-main'
                    )} />
                </span>
                <span className={clsx('regular-text-14 ', secondary ? '!text-white' : '!text-dark-main')}>
                    {title}
                </span>
            </CardTitle>
        </CardHeader>
        <CardContent>
            <p className={clsx('headline-5-32-semibold ',
                secondary ? '!text-white' : '!text-dark-main')}
            >{formatNumber(amount, formatStyle || 'decimal')}</p>
        </CardContent>
        <CardFooter className='flex gap-2 '>
            <span className='flex'>
                {state === 'up' ? <Icons.topRightArrow /> : <Icons.bottomRightArrow />}
                <span className={clsx('regular-text-14-semibold ',
                    secondary ? '!text-white' : '!text-dark-main')}>{formatNumber(percentage, 'percent')}</span>
            </span>
            <span className={clsx('regular-text-14 ',
                secondary ? '!text-white' : '!text-dark-2')}>
                +{formatNumberK(today)}</span>
        </CardFooter>
    </Card>
}

export default MainCard