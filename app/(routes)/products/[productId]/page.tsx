
import { FC } from 'react'
import ProductDetailsHeader from './components/ProductDetailsHeader'
import ProductInformation from './components/ProductInformation'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
    return <div className='px-8 flex flex-col gap-9'>
        <ProductDetailsHeader />
        <ProductInformation />
    </div>
}

export default page