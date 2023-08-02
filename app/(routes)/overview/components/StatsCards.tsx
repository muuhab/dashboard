import MainCard from '@/app/components/card/MainCard'
import { Icons } from '@/app/components/ui/Icons'
import { FC } from 'react'

interface StatsCardsProps {

}

const StatsCards: FC<StatsCardsProps> = ({ }) => {
    return <div className='flex flex-grow flex-wrap pt-1.5'>
        <MainCard title='Total Sales' amount={391820.75}
            formatStyle='currency' percentage={0.219} icon={Icons.dollar} today={6700} secondary />
        <MainCard title='Visitor' amount={831071} percentage={0.13} icon={Icons.visitor} today={7000} />
        <MainCard title='Total orders' amount={1042665} percentage={0.057} icon={Icons.receipt} today={5000} />
        <MainCard title='Refunded' amount={50441} percentage={0.11} icon={Icons.undo} today={21} state='down' />
    </div>
}

export default StatsCards