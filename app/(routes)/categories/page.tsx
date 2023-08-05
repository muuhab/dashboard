import SubHeader from '@/app/components/header/SubHeader'
import { FC } from 'react'
import ComponentCard from './components/ComponentCard'
import { Icons } from '@/app/components/ui/Icons'
import CategoriesTable from './components/CategoriesTable'

interface pageProps {

}


const page: FC<pageProps> = ({ }) => {
    return <div className='px-8 flex flex-col'>
        <SubHeader
            buttonTitle='Add Category'
            title='Categories'
            search='Search categories...'
            showView
        />
        {false ? <div className='mt-8 pt-8 border-t !border-dark-5'>
            <CategoriesTable />
        </div> :
            <div className="flex flex-wrap mt-8 pt-8 border-t border-dark-5 gap-6">
                <ComponentCard
                    title='Electronics'
                    productsNumber={10}
                    variantNumber={20}
                    icon={Icons.electronics}
                />
                <ComponentCard
                    title='Beauty'
                    productsNumber={10}
                    variantNumber={20}
                    icon={Icons.beauty}
                />
                <ComponentCard
                    title='Books'
                    productsNumber={10}
                    variantNumber={20}
                    icon={Icons.books}
                />
                <ComponentCard
                    title='Investments'
                    productsNumber={10}
                    variantNumber={20}
                    icon={Icons.barChart}
                />
                <ComponentCard
                    title='Music'
                    productsNumber={10}
                    variantNumber={20}
                    icon={Icons.music}
                />

            </div>
        }

    </div>
}

export default page