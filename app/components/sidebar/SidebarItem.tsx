"use client"

import Link from 'next/link'
import { FC, useState } from 'react'
import { Icons } from '../ui/Icons'
import clsx from 'clsx'

interface SidebarItemItemProps {
    label: string,
    href: string
    icon?: any
    active?: boolean
    menu?: SidebarItemItemProps[]
    onClick?: () => void
}

const SidebarItemItem: FC<SidebarItemItemProps> = ({ label, href, icon: Icon, active, menu, onClick }) => {

    const [toggleMenu, setToggleMenu] = useState(false)

    const handleClick = () => {
        if (menu?.length) {
            return setToggleMenu(prev => !prev);
        }
    }

    return <li
        className='cursor-pointer '
        onClick={handleClick}>
        <Link href={href} className='flex items-center justify-between hover:bg-purple-light-main group'>

            <span className='flex gap-4 items-center'  >
                <span className='py-3 pl-3'>
                    <Icon className={clsx(
                        'fill-dark-2 group-hover:fill-purple-main',
                        active && 'fill-purple-main'
                    )} />
                </span>
                <span className='regular-text-14-semibold'>
                    {label}
                </span>
            </span>
            {menu?.length && (
                <span className='p-3'>
                    {toggleMenu ? <Icons.arrowUp /> : <Icons.arrowDown />}
                </span>
            )}
        </Link>

        {menu?.length && (

            <ul className={clsx(!toggleMenu && 'hidden', toggleMenu && 'block')} >
                {menu.map((item, index) => (
                    <li key={index} className='pl-6 py-4 hover:bg-purple-light-main group'>
                        <Link className='flex gap-4 items-center' href={item.href} >
                            <span className='py-3 pl-3'>
                                {item.icon}
                            </span>
                            <span className='text-sm font-semibold leading-5'>
                                {item.label}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        )}
    </li>
}

export default SidebarItemItem