import { FC } from 'react'
import { Icons } from '../ui/Icons'
import { Command, CommandInput } from '../ui/Command'
import { Button } from '../ui/Button'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/Avatar'

interface HeaderProps {

}

const Header: FC<HeaderProps> = ({ }) => {
    return <header className='flex items-center justify-between px-8 py-9'>
        <div>
            <Command className='bg-dark-6 border-b-0 '>
                <CommandInput className='border-none regular-text-14 outline-none focus:outline-none focus:ring-0  ' placeholder='Search...' />
            </Command>
        </div>
        <div className='flex gap-4 items-center'>
            <Button variant={'ghost'} size={'icon'} className='relative'>
                <span className='bg-red-main rounded-full w-2 h-2 absolute right-1 top-1' />
                <Icons.bell className='w-6 h-6' />
            </Button>
            <Avatar>
                <AvatarImage src='/images/logo.png' alt='avatar' className='w-8 h-8' />
                <AvatarFallback>MS</AvatarFallback>
            </Avatar>
            <h3 className='font-semibold text-base text-dark-main'>
                Mohab Sherif
            </h3>
        </div>
    </header>
}

export default Header