import { FC } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../Avatar'

interface UserAvatarProps {
    src?: string
    fallback?: string
}

const UserAvatar: FC<UserAvatarProps> = ({
    src,
    fallback
}) => {
    return <Avatar>
        <AvatarImage src={src} />
        <AvatarFallback>
            {fallback}
        </AvatarFallback>
    </Avatar>
}

export default UserAvatar