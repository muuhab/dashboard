"use client"

import { FC } from 'react'
import { Card, LineChart } from "@tremor/react";
import { formatNumber } from '@/app/lib/utils';
import { Legend } from "@tremor/react";

interface LineChartComponentProps {

}

const chartdata = [
  {
    month: "Apr",
    "Revenue": 2.04,
    "Orders": 1.53,
  },
  {
    month: 'May',
    "Revenue": 1.96,
    "Orders": 1.58,
  },
  {
    month: 'June',
    "Revenue": 1.96,
    "Orders": 1.61,
  },
  {
    month: 'July',
    "Revenue": 1.93,
    "Orders": 1.61,
  },
  {
    month: 'Aug',
    "Revenue": 1.88,
    "Orders": 1.67,
  },
  //...
];


const LineChartComponent: FC<LineChartComponentProps> = ({ }) => {
  return <Card className='ring-0 !border-0 rounded-lg  !bg-card !text-card-foreground !shadow-sm'>
    <div className='flex flex-row justify-between items-baseline'>
      <h2 className='regular-text-16-semibold  '>Revenue vs Orders</h2>
      <Legend
        className="mt-3"
        categories={["Revenue", "Orders"]}
        colors={["indigo", "green"]}
      />
    </div>
    <LineChart
      className="mt-6 "
      data={chartdata}
      index="month"
      showLegend={false}
      categories={["Revenue", "Orders"]}
      colors={["indigo", "green"]}
      valueFormatter={val => formatNumber(val, 'currency')}
      yAxisWidth={40}
    />
  </Card>
}

export default LineChartComponent