"use client"

import { formatNumber } from "@/app/lib/utils";
import { BarChart, Legend } from "@tremor/react";

const chartdata2 = [
    {
        name: "Topic 1",
        "Today": 890,
        "Yesterday": 338,
    },
    {
        name: "Topic 2",
        "Today": 289,
        "Yesterday": 233,
    },
    {
        name: "Topic 1",
        "Today": 890,
        "Yesterday": 338,
    },
    {
        name: "Topic 2",
        "Today": 289,
        "Yesterday": 233,
    },
    {
        name: "Topic 1",
        "Today": 890,
        "Yesterday": 338,
    },
    {
        name: "Topic 2",
        "Today": 289,
        "Yesterday": 233,
    },
];


const BarChartComp = () => (<>
    <BarChart
        className="mt-6"
        data={chartdata2}
        index="name"
        categories={["Today", "Yesterday"]}
        colors={["indigo", "emerald"]}
        showLegend={false}
        showXAxis={false}
        valueFormatter={(value) => formatNumber(value, 'decimal')}
        yAxisWidth={38}
    />
    <div className="w-fit mx-auto">

        <Legend
            className="mt-3 gap-2 "
            categories={["Today", "Yesterday"]}
            colors={["indigo", "green"]}
        />
    </div>
</>
);

export default BarChartComp;