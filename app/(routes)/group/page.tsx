import SubHeader from '@/app/components/header/SubHeader'
import { FC } from 'react'
import GroupCard from './components/GroupCard'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
    return <div className='px-8 flex flex-col '>
        <SubHeader
            buttonTitle='Add Group'
            title='Group'
            search='Search group...'
        />
        <div className="flex flex-wrap mt-8 pt-8 border-t border-dark-5 gap-6">
            <GroupCard
                title='Amazon Echo Plus (3nd Gen)
                - Premium Quality'
                range='$ 45.00 - $ 55.00'
                stocks={20}

            />
            <GroupCard
                title='Amazon Echo Plus (3nd Gen)
                - Premium Quality'
                range='$ 45.00 - $ 55.00'
                stocks={20}

            />
            <GroupCard
                title='Amazon Echo Plus (3nd Gen)
                - Premium Quality'
                range='$ 45.00 - $ 55.00'
                stocks={20}

            />
            <GroupCard
                title='Amazon Echo Plus (3nd Gen)
                - Premium Quality'
                range='$ 45.00 - $ 55.00'
                stocks={20}

            />
            <GroupCard
                title='Amazon Echo Plus (3nd Gen)
                - Premium Quality'
                range='$ 45.00 - $ 55.00'
                stocks={20}

            />
        </div>
    </div>
}

export default page