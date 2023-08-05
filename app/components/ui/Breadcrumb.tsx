import { cn } from '@/app/lib/utils'
import Link from 'next/link'
import { FC } from 'react'

type BreadcrumbItem = {
    name: string
    href?: string
    current?: boolean
}
interface BreadcrumbProps {
    items: BreadcrumbItem[]
}

const Breadcrumb: FC<BreadcrumbProps> = ({ items }) => {
    return (

        <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center ">

                {items.map((item, index) => (
                    <li key={index} >
                        <div className="flex items-center ">

                            <Link href="#" className={cn(
                                "hover:text-blue-500  regular-text-14-medium",
                                item.current ? "!text-dark-main" : "!text-dark-2",
                            )}>{item.name}</Link>
                            {items.length - 1 === index ? null :
                                <span className={cn(
                                    'mx-1',
                                )}>/</span>
                            }
                        </div>
                    </li>
                ))}
            </ol>
        </nav>

    )
}

export default Breadcrumb