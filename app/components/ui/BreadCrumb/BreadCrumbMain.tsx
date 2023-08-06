import { cn } from '@/app/lib/utils'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { FC } from 'react'


type BreadcrumbItem = {
    name: string
    href?: string
    current?: boolean
}

interface BreadCrumbMainProps {
    items: BreadcrumbItem[]
}

const BreadCrumbMain: FC<BreadCrumbMainProps> = ({
    items
}) => {
    return <Breadcrumb>
        {items.map((item, index) => (
            <BreadcrumbItem key={index} isCurrentPage={item?.current}>
                <BreadcrumbLink as={item?.current ? Text : Link} href={item.href || '#'} className={
                    cn(
                        "hover:text-blue-500  regular-text-14-medium",
                        item.current ? "!text-dark-main" : "!text-dark-2",
                    )
                }>
                    {item.name}
                </BreadcrumbLink>
            </BreadcrumbItem>
        ))}

    </Breadcrumb >
}

export default BreadCrumbMain