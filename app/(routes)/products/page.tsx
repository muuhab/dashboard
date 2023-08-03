import SubHeader from '@/app/components/header/SubHeader'
import { FC } from 'react'
import ProductsTable from './components/ProductsTable'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
    return <div className='px-8 flex flex-col gap-7'>
        <SubHeader
            title='All Products'
            buttonTitle='Add Product'
            search='Search products...'
        />
        <ProductsTable />
    </div>
}

export default page