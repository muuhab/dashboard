import { FC } from 'react'
import ProductDetailsHeader from '../[productId]/components/ProductDetailsHeader'
import ProductInformation from '../[productId]/components/ProductInformation'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
    return <div className='px-8 flex flex-col gap-9'>
        <ProductDetailsHeader add />
        <ProductInformation add />
    </div>
}

export default page