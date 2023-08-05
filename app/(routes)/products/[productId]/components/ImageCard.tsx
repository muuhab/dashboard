"use client"
import { Button } from '@/app/components/ui/Button'
import { Card, CardContent } from '@/app/components/ui/Card'
import { Icons } from '@/app/components/ui/Icons'
import { Divider } from '@chakra-ui/react'
import Image from 'next/image'
import { FC } from 'react'

interface ImageCardProps {

}

const ImageCard: FC<ImageCardProps> = ({ }) => {
    return <div className='flex flex-col gap-2'>
        <Card className='rounded-sm p-6 w-[165px] h-[165px] border-dark-5 border'>
            <CardContent className='relative aspect-square  '>
                <Image
                    src="https://s3-alpha-sig.figma.com/img/a1e0/57b8/a26758b9757e25e1d4ef755e4db60e11?Expires=1691971200&Signature=qbt0pyB44ckbdS04qBmHrbLI4iauGPkhPdDtA-Cm5y6~YRtmSCD1ubO4Ygp4L-S-qTfLx-cgDu6L7LYnmpwFt9GEMAWRcItaE4Js49iK3yGem7-LZ5a1AmfeUG-OsUyJxhtd7cQ15T3bzEvoYS2JMPsbdH~NUixp7yEaqPbrXFg1yQaGja1FIeolqJSh6Du8zFkY3daSloQ~hNw5bNWoFiaSsJ~Q39nsrWBXiZTWZ614BgtZQczBqDIB91Te24kcz-QuXCaA7rWGq9MBcjF3puK4sS79SUZezLWa1jrr07AP~WGETvkWYhnMITRjwPqNfQuNtNPuudhj97j3YTXV8w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt=""
                    fill
                />
            </CardContent>
        </Card>
        <Card className='flex-grow'>
            <CardContent className='flex justify-evenly p-2 gap-4  '>
                <Button variant={'ghost'} size={'icon'}>

                    <Icons.eyesOpen className='fill-dark-3 w-6 h-6' />
                </Button>
                <div>
                    <Divider orientation='vertical' className='bg-dark-3 w-[1px]' />
                </div>
                <Button variant={'ghost'} size={'icon'}>

                    <Icons.trash className='h-6 w-6' />
                </Button>
            </CardContent>
        </Card>
    </div>
}

export default ImageCard