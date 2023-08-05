import { Card, CardContent } from '@/app/components/ui/Card'
import Image from 'next/image'
import { FC } from 'react'

interface GroupCardProps {
    title: string
    range: string
    stocks: number
}

const GroupCard: FC<GroupCardProps> = ({ range, stocks, title }) => {
    return <Card className='p-5 rounded-sm'>
        <CardContent className='p-0   flex flex-col gap-3 w-[223px]'>
            <div className='relative w-[223px] h-[155px]'>
                <Image
                    alt='group'
                    src='/images/headphones.png'
                    fill
                    className='object-cover'
                />
            </div>
            <p className='regular-text-16-semibold text-dark-main'>
                {title}
            </p>
            <div className="flex justify-between">
                <span className='regular-text-14-semibold text-purple-main'>
                    {range}
                </span>
                <span className='regular-text-14-medium text-gray-2'>Stock {stocks}</span>
            </div>
        </CardContent>
    </Card>
}

export default GroupCard