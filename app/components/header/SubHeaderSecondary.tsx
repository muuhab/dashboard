"use client"

import { FC } from 'react'
import { Button } from '../ui/Button'
import { Plus } from 'lucide-react'
import { Input } from '../ui/Input'
import { Icons } from '../ui/Icons'
import SelectSecondary from '../ui/Select/SelectSecondary'
import ColorSelect from '../ui/Select/ColorSelect'
import ViewSelect from '../ui/Select/ViewSelect'
import BreadCrumbMain from '../ui/BreadCrumb/BreadCrumbMain'
import Breadcrumb from '../ui/Breadcrumb'

interface SubHeaderSecondaryProps {
    title: string
    buttonTitle: string
    showView?: boolean
    onClick?: () => void,
    children?: React.ReactNode
}

const SubHeaderSecondary: FC<SubHeaderSecondaryProps> = ({ title, buttonTitle, onClick, children }) => {
    return <div className='flex justify-between items-center'>
        <div className="flex flex-col gap1">
            <BreadCrumbMain
                items={[
                    {
                        name: 'Orders',
                        href: '/orders',
                        current: false
                    },
                    {
                        name: 'Order Details',
                        href: '/orders/details',
                        current: true
                    }
                ]}
            />
            <h3 className='text-2xl font-semibold leading-[48px] text-dark-main'>
                {title}
            </h3>
        </div>
        <div className="flex justify-center items-center gap-3">


            {children ?
                children
                :
                <div className="flex gap-3 items-center">
                    <Button className='bg-white'>
                        <Icons.print className='w-4 h-4' />
                        <span className='regular-text-14-semibold text-dark-1'>Print</span>
                    </Button>
                    <Button variant={'secondary'} className=' regular-text-14-semibold text-white gap-2' onClick={onClick} >
                        <Icons.edit className='w-4 h-4 [&>*]:fill-white' />
                        <span>{buttonTitle}</span>
                    </Button>
                </div>
            }
        </div>
    </div>
}

export default SubHeaderSecondary