"use client"

import { FC } from 'react'
import { Button } from '../ui/Button'
import { Plus } from 'lucide-react'
import { Input } from '../ui/Input'
import { Icons } from '../ui/Icons'

interface SubHeaderProps {
    title: string
    search?: string
    buttonTitle: string
}

const SubHeader: FC<SubHeaderProps> = ({ title, buttonTitle, search }) => {
    return <div className='flex justify-between items-baseline'>
        <h3 className='text-2xl font-semibold leading-[48px] text-dark-main'>
            {title}
        </h3>
        <div className="flex justify-center gap-3">
            <div className='flex items-center justify-end shadow-box-shadow-input'>

                <Input
                    id="search-input"
                    type='text'
                    placeholder={search}
                    className='border-0  bg-white text-dark-1  !outline-none !ring-0 !focus:outline-none !focus:ring-0 !focus:border-0 
                    placeholder:text-[14px] placeholder:font-medium 
                    placeholder:leading-7 focus-visible:ring-offset-0'
                />
                <Button variant={'default'} className='p-2 flex-1 bg-white hover:bg-white  '>
                    <Icons.search />
                </Button>
            </div>

            <Button className=' regular-text-14-semibold' >
                <Plus className='w-4 h-4' />
                {buttonTitle}
            </Button>
        </div>
    </div>
}

export default SubHeader