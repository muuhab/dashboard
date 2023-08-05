import { Avatar, AvatarImage } from '@/app/components/ui/Avatar'
import Breadcrumb from '@/app/components/ui/Breadcrumb'
import { Button } from '@/app/components/ui/Button'
import { Icons } from '@/app/components/ui/Icons'
import { FC } from 'react'

interface ProductDetailsHeaderProps {

}

const ProductDetailsHeader: FC<ProductDetailsHeaderProps> = ({ }) => {
    return <div className="flex justify-between items-center">

        <div className="flex gap-5 items-center">
            <Avatar className='w-[60px] h-[60px] rounded-sm'>
                <AvatarImage src="https://picsum.photos/200/300" alt="" />
            </Avatar>
            <div className="flex flex-col ">

                <Breadcrumb items={[{
                    name: 'Products',
                    href: '/products'
                },
                {
                    name: 'Product Details',
                    current: true
                }
                ]} />
                <h1 className='headline-5-32-semibold'>
                    Linmon Dark Grey
                </h1>
            </div>
        </div>
        <div className="flex gap-10 items-center">
            <div className="flex gap-4">
                <Button variant={'outline'} className='flex items-center gap-2 px-0 w-12 h-12 regular-text-14-semibold text-dark-1'>
                    <Icons.leftArrow />
                </Button>

                <Button variant={'outline'} className='flex items-center gap-2 regular-text-14-semibold text-dark-1 px-0 w-12 h-12'>
                    <Icons.rightArrow />
                </Button>
            </div>
            <Button variant={'secondary'} className='flex items-center gap-2 regular-text-14-semibold text-white'>
                <Icons.eyesOpen />
                <span>Preview</span>
            </Button>
        </div>
    </div>
}

export default ProductDetailsHeader