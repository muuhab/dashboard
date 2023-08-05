import { Card, CardContent } from '@/app/components/ui/Card'
import { Label } from '@/app/components/ui/Label'
import Image from 'next/image'
import { FC } from 'react'

interface VariantItemProps {

}

const VariantItem: FC<VariantItemProps> = ({ }) => {
    return <div className='flex flex-col gap-2'>
        <Label className='regular-text-14-medium text-dark-main' htmlFor='prod'>
            Product
        </Label>
        <Card id='prod' className='rounded-sm py-3 relative w-[184px] h-[48px] border-dark-5 border'>
            <CardContent className='flex gap-2 items-center '>
                <Image
                    src="https://s3-alpha-sig.figma.com/img/a1e0/57b8/a26758b9757e25e1d4ef755e4db60e11?Expires=1691971200&Signature=qbt0pyB44ckbdS04qBmHrbLI4iauGPkhPdDtA-Cm5y6~YRtmSCD1ubO4Ygp4L-S-qTfLx-cgDu6L7LYnmpwFt9GEMAWRcItaE4Js49iK3yGem7-LZ5a1AmfeUG-OsUyJxhtd7cQ15T3bzEvoYS2JMPsbdH~NUixp7yEaqPbrXFg1yQaGja1FIeolqJSh6Du8zFkY3daSloQ~hNw5bNWoFiaSsJ~Q39nsrWBXiZTWZ614BgtZQczBqDIB91Te24kcz-QuXCaA7rWGq9MBcjF3puK4sS79SUZezLWa1jrr07AP~WGETvkWYhnMITRjwPqNfQuNtNPuudhj97j3YTXV8w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt=""
                    width={24}
                    height={24}
                />
                <span className='regular-text-14-medium text-dark-main'>
                    Linmon
                </span>
            </CardContent>
        </Card>
    </div>
}

export default VariantItem