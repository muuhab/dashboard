"use client"

import { FC } from 'react'
import { Card, LineChart, Color } from "@tremor/react";
import { formatNumber } from '@/app/lib/utils';
import { Legend } from "@tremor/react";


export type legends = {
  name: string
  color: any
}
interface LineChartComponentProps {
  data: any[]
  legends: legends[]
  secondary?: boolean,
}




const LineChartComponent: FC<LineChartComponentProps> = ({
  data,
  legends,
  secondary = false
}) => {
  if (secondary) return (
    <Card className='ring-0 fo0rm-1 flex flex-col gap-4 items-center'>

      <LineChart
        className="mt-6 "
        data={data}
        index="month"
        showLegend={false}
        categories={legends.map(legend => legend.name)}
        colors={legends.map(legend => legend.color)}
        yAxisWidth={40}
        showXAxis={false}
        curveType='natural'

      />
      <Legend
        className="space-x-4"
        categories={legends.map(legend => legend.name)}
        colors={legends.map(legend => legend.color)}
      />
    </Card>
  )


  return <Card className='ring-0 !border-0 rounded-lg  !bg-card !text-card-foreground !shadow-sm'>
    <div className='flex flex-row justify-between items-baseline'>
      <h2 className='regular-text-16-semibold  '>Revenue vs Orders</h2>
      <Legend
        className="mt-3"
        categories={legends.map(legend => legend.name)}
        colors={legends.map(legend => legend.color)}
      />
    </div>
    <LineChart
      className="mt-6 "
      data={data}
      index="month"
      showLegend={false}
      categories={legends.map(legend => legend.name)}
      colors={legends.map(legend => legend.color)}
      valueFormatter={val => formatNumber(val, 'currency')}
      yAxisWidth={40}
    />
  </Card>
}

export default LineChartComponent