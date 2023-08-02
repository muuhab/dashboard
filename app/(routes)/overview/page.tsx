import { FC } from 'react'
import CircleChart from './components/CircleChart'
import LineChartComponent from './components/LineChartComponent'
import MapSection from './components/MapSection'
import NewCustomersCard from './components/NewCustomers/NewCustomersCard'
import OverviewHeader from './components/OverviewHeader'
import StatsCards from './components/StatsCards'
import TopProducts from './components/TopProducts'
import TransactionsHistoryCard from './components/TrasnactionsCard/TransactionsHistoryCard'
import RealTimeSales from './components/RealTimeSales/RealTimeSales'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
    return <div className='px-8 flex flex-col gap-6'>
        <OverviewHeader />
        <StatsCards />
        <div className='flex flex-row gap-6 justify-between flex-wrap lg:flex-nowrap'>
            <LineChartComponent />
            <CircleChart />
        </div>
        <div className='flex flex-row gap-6 justify-between flex-wrap lg:flex-nowrap'>
            <MapSection />
            <TopProducts />
        </div>
        <div className='flex flex-row gap-6 justify-between flex-wrap lg:flex-nowrap'>
            <NewCustomersCard />
            <TransactionsHistoryCard />
            <RealTimeSales />
        </div>
    </div>
}

export default page