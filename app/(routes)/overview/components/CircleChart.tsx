'use client'

import { FC } from 'react'
import { Card, Title, DonutChart } from "@tremor/react";
import { formatNumber } from '@/app/lib/utils';

const cities = [
    {
        name: "Direct",
        sales: 9800,
    },
    {
        name: "Organic",
        sales: 4567,
    },
    {
        name: "Referral",
        sales: 3908,
    },

];


interface CircleChartProps {

}

const CircleChart: FC<CircleChartProps> = ({ }) => {
    return <Card className="max-w-sm ring-0 !border-0 rounded-lg  !bg-card !text-card-foreground !shadow-sm ">
        <h2 className='regular-text-16-semibold  '>Traffic Channels</h2>
        <DonutChart
            className="mt-6"
            data={cities}
            category="sales"
            index="name"
            showLabel={false}
            valueFormatter={val => formatNumber(val, 'currency')}
            colors={["indigo", "emerald", "sky"]}
        />
        <div className="flex flex-wrap justify-center mt-4 gap-4 mx-auto max-w-[150px]">
            <div className='flex gap-2 items-center'>
                <span className='bg-indigo-600 rounded-full w-2 h-2 ' />
                <span className='regular-text-14-medium'>Direct</span>
            </div>
            <div className='flex gap-2 items-center'>
                <span className='bg-emerald-600 rounded-full w-2 h-2 ' />
                <span className='regular-text-14-medium'>Organic</span>
            </div>
            <div className='flex gap-2 items-center'>
                <span className='bg-sky-600 rounded-full w-2 h-2 ' />
                <span className='regular-text-14-medium'>Referral</span>
            </div>
        </div>
    </Card>
}

export default CircleChart