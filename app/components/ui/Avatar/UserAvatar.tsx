import { FC } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../Avatar'
import { cn } from '@/app/lib/utils'

interface UserAvatarProps extends React.ComponentPropsWithoutRef<'span'> {
    src?: string
    fallback?: string
    cover?: boolean
}

const UserAvatar: FC<UserAvatarProps> = ({
    src,
    fallback,
    cover,
    ...props
}) => {
    return <Avatar {...props}>
        <AvatarImage src={src} className={cn(cover && 'object-cover')} />
        <AvatarFallback>
            {fallback}
        </AvatarFallback>
    </Avatar>
}

export default UserAvatar