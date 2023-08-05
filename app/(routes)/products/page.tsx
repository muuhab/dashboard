"use client"

import SubHeader from '@/app/components/header/SubHeader'
import { FC } from 'react'
import ProductsTable from './components/ProductsTable'
import { useRouter } from 'next/navigation'

interface pageProps {

}

const Page: FC<pageProps> = ({ }) => {
    const router = useRouter()
    return <div className='px-8 flex flex-col gap-7'>
        <SubHeader
            title='All Products'
            buttonTitle='Add Product'
            search='Search products...'
            onClick={() => router.push('/products/add')}
        />
        <ProductsTable />
    </div>
}

export default Page