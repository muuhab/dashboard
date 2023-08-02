import { Button } from '@/app/components/ui/Button'
import { Card, CardContent, CardHeader } from '@/app/components/ui/Card'
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from '@/app/components/ui/DropdownMenu'
import { ChevronDown } from 'lucide-react'
import { FC } from 'react'
import GeoAlbersUsa from './MapChart'
import MapTable from './MapTable'
import { Icons } from '@/app/components/ui/Icons'
interface MapSectionProps {

}
const data = [
    "USA",
    "Canada",
    "France",
    "Germany",
    "Spain",
]
const MapSection: FC<MapSectionProps> = ({ }) => {
    return <Card className=' '>
        <CardHeader className="flex flex-row justify-between">
            <h2 className='regular-text-16-semibold'>Traffic Channels</h2>
            <DropdownMenu>
                <DropdownMenuTrigger asChild className='border-0 !ring-0 focus:border-0 !focus:ring-0  focus:bg-transparent hover:bg-transparent '>
                    <Button variant="outline" className="ml-auto">
                        USA <Icons.arrowDropDown className="ml-2 h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    {data
                        ?.map((column, i) => {
                            return (
                                <DropdownMenuCheckboxItem
                                    key={i}
                                    className="capitalize"
                                    checked={i === 0}
                                >
                                    {column}
                                </DropdownMenuCheckboxItem>
                            )
                        })}
                </DropdownMenuContent>
            </DropdownMenu>
        </CardHeader>
        <CardContent>

            <GeoAlbersUsa height={312} width={512} />
            <MapTable />
        </CardContent>
    </Card>
}

export default MapSection