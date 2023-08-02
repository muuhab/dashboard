"use client"

import { FC } from 'react'
import SidebarItem from './SidebarItem'
import { Icons } from '../ui/Icons'
import useRoutes from '@/app/hooks/useRoutes'
import Button from '../Button'

interface SidebarProps {
    children: React.ReactNode
}

const Sidebar: FC<SidebarProps> = ({ children }) => {

    const routes = useRoutes()

    return (
        <div className='h-full'>
            <aside className='fixed z-40 inset-y-0 left-0 h-screen w-[250px] bg-white flex justify-between flex-col' >

                <nav >
                    <header className='pl-8 pt-8 mb-12 '>
                        <div className='flex gap-2 items-center'>
                            <Icons.logo />
                            <h1 className='prose-2xl'>Substance</h1>
                        </div>
                    </header>
                    <ul className='px-3 overflow-auto'>
                        {routes.map((route, index) => (
                            <SidebarItem key={index} href={route.href} label={route.label} icon={route.icon} active={route.active} menu={route?.menu} />
                        ))}
                    </ul>
                </nav>
                <nav className='flex flex-col pb-8 px-6 '>
                    <div className='border-t border-t-dark-5'>
                        <div className='flex flex-col gap-4 pt-6 pb-12'>
                            <h3 className='regular-text-14-semibold'>
                                Technical help
                            </h3>
                            <h3 className='regular-text-14-semibold'>
                                Contact us
                            </h3>
                        </div>

                        <div className='rounded-[4px] flex  flex-col gap-[14px] pt-4 pl-1 pb-12 bg-sidebar-shape bg-right  bg-cover   '>
                            <h5 className='regular-text-12-semibold max-w-[144px] '>
                                Release you maximal potential software.
                            </h5>
                            <Button >
                                Upgrade to Pro
                            </Button>
                        </div>
                    </div>

                </nav>
            </aside>
            <main className='pl-[250px] h-full'>
                {children}
            </main>
        </div>
    )
}

export default Sidebar