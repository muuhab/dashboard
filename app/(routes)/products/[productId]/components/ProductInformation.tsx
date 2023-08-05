'use client'

import Editor from '@/app/components/ui/Editor/Editor'
import InputNumber from '@/app/components/ui/input/InputNumber'
import InputWithLabel from '@/app/components/ui/input/InputWithLabel'
import { FC } from 'react'
import ImageCard from './ImageCard'
import { Card, CardContent } from '@/app/components/ui/Card'
import { Icons } from '@/app/components/ui/Icons'
import SelectMain from '@/app/components/ui/Select/SelectMain'
import VariantItem from './VariantItem'
import SelectSecondary from '@/app/components/ui/Select/SelectSecondary'
import ColorSelect from '@/app/components/ui/Select/ColorSelect'
import { Divider, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Tag, TagCloseButton, TagLabel } from '@chakra-ui/react'
import { Label } from '@/app/components/ui/Label'
import { Button } from '@/app/components/ui/Button'
import { Plus } from 'lucide-react'
import TagMain from '@/app/components/ui/TagMain'

interface ProductInformationProps {
    add?: boolean
}

const ProductInformation: FC<ProductInformationProps> = ({ add }) => {
    return <div className='flex gap-8'>
        <div className='pt-8 border-t border-dark-5 w-[726px]'>
            <h2 className='regular-text-18-semibold text-dark-main mb-6'>
                Product Information
            </h2>
            <div className="grid grid-cols-2 justify-between w-[726px] gap-x-5 gap-y-8">
                <InputWithLabel id='name' title='Product name' />
                <InputNumber items={[
                    { name: 'USD', value: 'usd' },
                    { name: 'EGP', value: 'egp' },]}
                    defaultSelected='usd'
                    placeholder='000.00'
                    id='price' title='Price' className='w-48' />
                <InputWithLabel id='sku' title='SKU' />
                <InputNumber items={[
                    { name: 'KG', value: 'kg' },
                    { name: 'Pound', value: 'pound' },]}
                    defaultSelected='kg'
                    placeholder='0.2'
                    id='weight' title='Weight' className='w-48' />
            </div>
            <div className='flex flex-col gap-2 mt-8'>
                <span className='regular-text-14-medium text-dark-1'>
                    Description
                </span>
                <Editor />
            </div>
            <div className='flex flex-col gap-5 mt-12 border-t border-b border-dark-5 pt-8 pb-12'>
                <p className='regular-text-18-medium text-dark-main'>
                    Media
                </p>
                <div className="flex flex-row gap-6">
                    <ImageCard />
                    <ImageCard />
                    <ImageCard />
                    <Card className='flex items-center aspect-square w-[165px] h-[165px] '>
                        <CardContent className='flex flex-col gap-[14px] justify-center align-middle items-center '>
                            <Icons.image />
                            <span className='regular-text-14-medium text-purple-main'>Browse image..</span>
                        </CardContent>
                    </Card>
                </div>


            </div>
            <div className="flex justify-between items-center mt-8">
                <p className='regular-text-18-medium text-dark-main'>
                    Variants
                </p>
                <div>

                    <SelectMain
                        items={[
                            { name: 'Most search', value: 'most' },
                        ]}
                        placeholder='Sort by'
                        defaultSelected='most'
                        className='w-[203px]'
                    />
                </div>
            </div>
            <div className="flex justify-between items-center">
                <VariantItem />
                <SelectSecondary
                    items={[
                        // sizes in cm height * width
                        { name: '120*80', value: '120*80' },
                        { name: '180*10', value: '180*10' },
                        { name: '250*70', value: '250*70' },
                    ]}
                    defaultSelected='120*80'
                    id='size'
                    label='Size'
                />
                <ColorSelect
                    items={[
                        // color with color in the name
                        { name: `Black`, value: 'black', color: 'bg-black' },
                        { name: 'Blue', value: 'white', color: 'bg-blue-600' },
                        { name: 'Red', value: 'red', color: 'bg-red-600' },

                    ]}
                    defaultSelected='black'
                    id='color'
                    label='Color'
                    color='bg-blue-600'

                />
                <div className="flex flex-col gap-2">
                    <Label className='regular-text-14-medium text-dark-1'>
                        Stock
                    </Label>
                    <NumberInput defaultValue={15} min={10} max={20} className='w-1/2'>
                        <NumberInputField className='form-1 regular-text-14-medium text-dark-main flex gap-3 items-start px-3 pt-3 pb-3 focus-visible:ring-0 focus-visible:border-dark-5 ' />
                        <NumberInputStepper >
                            <NumberIncrementStepper className='border-0' >
                                <Icons.keyboardArrowDown className='w-4 h-4 rotate-180' />
                            </NumberIncrementStepper>
                            <NumberDecrementStepper className='border-0' >
                                <Icons.keyboardArrowDown className='w-4 h-4' />
                            </NumberDecrementStepper>
                        </NumberInputStepper>
                    </NumberInput>
                </div>
                {add ? <Button className='bg-dark-main self-end'>
                    <Plus className='w-4 h-4' />
                    <span>Add</span>
                </Button> :
                    <Card className='self-end'>
                        <CardContent className='flex justify-evenly p-0 gap-4  '>
                            <Button variant={'ghost'} size={'icon'}>

                                <Icons.edit className='fill-dark-3 w-5 h-5' />
                            </Button>
                            <div>
                                <Divider orientation='vertical' className='bg-dark-3 w-[1px]' />
                            </div>
                            <Button variant={'ghost'} size={'icon'}>

                                <Icons.trash className='h-5 w-5' />
                            </Button>
                        </CardContent>
                    </Card>
                }

            </div>
            <Button variant={'outline'} className='regular-text-14-semibold text-purple-main w-full mt-11 border-dashed border-purple-main' >
                <Plus className='w-4 h-4' />
                Add New Variant
            </Button>
            <Card className='shadow-box-shadow-input mt-14 mb-16 '>
                <CardContent className='flex justify-between px-5 pt-4 items-center'>
                    <p className='regular-text-14-medium text-dark-main'>Saved on system 5 mins ago</p>
                    <div className="flex gap-4">
                        <Button variant={'ghost'} size={'icon'} className='bg-red-light-main'>
                            <Icons.trash className=' w-5 h-5' />
                        </Button>
                        <Button className=''>
                            <Plus className='w-4 h-4' />
                            Save Products
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>

        <div className="flex flex-col bg-white p-8 w-[400px]">
            <h2 className='regular-text-18-semibold text-dark-main mb-6'>
                Organization
            </h2>
            <div className="flex flex-col gap-8">
                <SelectSecondary
                    id='brand'
                    label='Brand'
                    className='w-full'
                    items={[
                        { name: 'IKEA', value: 'ikea' },
                        { name: 'H&M', value: 'h&m' },
                        { name: 'Zara', value: 'zara' },
                    ]}
                    defaultSelected='ikea'

                />
                <SelectSecondary
                    id='category'
                    label='Category'
                    className='w-full'
                    items={[
                        { name: 'Furniture', value: 'furniture' },
                        { name: 'Decoration', value: 'decoration' },
                        { name: 'Lighting', value: 'lighting' },
                    ]}
                    defaultSelected='furniture'
                />
                <SelectSecondary
                    id='collection'
                    label='Collection'
                    className='w-full'
                    additionalBtn={
                        <Button variant={'link'} className=' !no-underline regular-text-14-semibold text-purple-main p-0 h-fit'>
                            +Add into collection
                        </Button>}
                    items={[
                        { name: 'Furniture', value: 'furniture' },
                        { name: 'Decoration', value: 'decoration' },
                        { name: 'Lighting', value: 'lighting' },
                    ]}
                    defaultSelected='decoration'
                />
            </div>
            <span className='regular-text-12-medium text-dark-2 mt-3'>
                Note : Add this product to a collection so it’s easy
                to find in your store.
            </span>
            <div className='mt-8 flex flex-col gap-4'>
                <p className='regular-text-14-medium text-dark-1'>Tags</p>
                <div className="flex  gap-x-3 gap-y-[10px] flex-wrap">
                    <TagMain title='Table' />
                    <TagMain title='Workspace' />
                    <TagMain title='Desk' />
                    <TagMain title='Dark Grey' />
                    <TagMain />
                </div>
            </div>
        </div>
    </div>
}

export default ProductInformation