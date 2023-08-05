import { Tag, TagCloseButton, TagLabel, TagLeftIcon } from '@chakra-ui/react'
import { Plus } from 'lucide-react'
import { FC } from 'react'

interface TagMainProps {
    title?: string
}

const TagMain: FC<TagMainProps> = ({ title }) => {

    if (!title) return <Tag className='bg-transparent'>
        <TagLeftIcon boxSize='12px' as={Plus} className='text-dark-3' />
        <TagLabel className='text-dark-3'>New Tag</TagLabel>
    </Tag>

    return <Tag
        borderRadius='full'
        variant='solid'
        className='bg-dark-6 flex gap-[10px] border-dark-5 border rounded-sm px-[6px] py-2  '
    >
        <TagLabel className='regular-text-14-medium text-dark-main '>{title}</TagLabel>
        <TagCloseButton className='text-dark-2' />
    </Tag>
}

export default TagMain