import { Card, CardContent, CardHeader } from '@/app/components/ui/Card'
import { Icons } from '@/app/components/ui/Icons'
import { formatNumber } from '@/app/lib/utils'
import { FC } from 'react'
import BarChartComp from '../BarChartComp'

interface RealTimeSalesProps {

}

const RealTimeSales: FC<RealTimeSalesProps> = ({ }) => {
    return <Card className='flex-grow xl:max-w-[384px]'>
        <CardHeader className='flex flex-row justify-between items-center'>
            <p className='regular-text-16-semibold'>Real-Time Sale</p>
            <div className='flex gap-[10px]'>
                <Icons.refresh />
                <Icons.more />
            </div>
        </CardHeader>
        <CardContent>
            <div className="flex flex-row justify-between gap-4">
                <div className="flex flex-col gap-2">
                    <span className='regular-text-14-medium !text-dark-2'>
                        Refunded
                    </span>
                    <div className='flex gap-2 flex-row items-center '>

                        <span className='font-bold text-[18px] text-dark-main'>{formatNumber(160200, 'currency')}</span>
                        <span className='regular-text-12-medium flex gap-2'><Icons.topRightArrow /> {formatNumber(0.02, 'percent')}</span>
                    </div>
                </div>
                <div className="flex flex-col gap-2">

                    <span className='regular-text-14-medium !text-dark-2'>
                        Avg. Sales per day
                    </span>
                    <div className='flex gap-2 flex-row items-center '>

                        <span className='font-bold text-[18px] text-dark-main'>{formatNumber(22180, 'currency')}</span>
                        <span className='regular-text-12-medium flex gap-2'><Icons.bottomRightArrow /> {formatNumber(0.104, 'percent')}</span>
                    </div>
                </div>
            </div>

            <BarChartComp />
        </CardContent>
    </Card>
}

export default RealTimeSales