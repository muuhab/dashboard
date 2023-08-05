import { Card, CardContent } from '@/app/components/ui/Card'
import { FC } from 'react'

interface ComponentCardProps {
    icon?: any
    title: string
    productsNumber?: number
    variantNumber?: number
}

const ComponentCard: FC<ComponentCardProps> = ({
    icon: Icon,
    title,
    productsNumber,
    variantNumber
}) => {
    return <Card className='p-6 pr-[69px] form-1'>
        <CardContent className='flex flex-col gap-3 p-0'>
            <Icon />
            <div className="flex flex-col gap-2">
                <h4 className='regular-text-16-bold text-dark-main'>{title}</h4>
                <div className="flex regular-text-14-medium text-dark-2 gap-1">
                    <span>{productsNumber} Products</span>
                    <span>-</span>
                    <span>{variantNumber} Variants</span>
                </div>
            </div>
        </CardContent>
    </Card>
}

export default ComponentCard