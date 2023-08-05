"use client"

import {
    ColumnDef,
    SortingState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable
} from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import * as React from "react"


import { Button } from "@/app/components/ui/Button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/app/components/ui/DropdownMenu"
import { Icons } from "@/app/components/ui/Icons"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/app/components/ui/Table"
import { Badge } from "@/app/components/ui/Badge"
import { formatNumber } from "@/app/lib/utils"
import DataTablePagination from "@/app/components/table/pagination/DataTablePagination"
import { Avatar } from "@/app/components/ui/Avatar"
import { AvatarImage } from "@radix-ui/react-avatar"
import Link from "next/link"

const data: Product[] = [{
    "code": "203269437-9",
    "item": "Muffin Hinge Container 6",
    "type": "Retaining Wall and Brick Pavers",
    "change": 0.291,
    "price": 994,
    "sold": 48232,
    "sales": 2832072
}, {
    "code": "107586203-5",
    "item": "Appetizer - Cheese Bites",
    "type": "HVAC",
    "change": 0.649,
    "price": 974,
    "sold": 50630,
    "sales": 8995137
}, {
    "code": "851722916-9",
    "item": "Kellogs All Bran Bars",
    "type": "Curb & Gutter",
    "change": 0.013,
    "price": 488,
    "sold": 43203,
    "sales": 883062
}, {
    "code": "575308690-X",
    "item": "Wasabi Paste",
    "type": "Asphalt Paving",
    "change": 0.124,
    "price": 384,
    "sold": 59593,
    "sales": 4609788
}, {
    "code": "199974026-2",
    "item": "Chervil - Fresh",
    "type": "Exterior Signage",
    "change": 0.567,
    "price": 159,
    "sold": 91756,
    "sales": 883464
}, {
    "code": "645265017-3",
    "item": "Puree - Mango",
    "type": "Termite Control",
    "change": 0.814,
    "price": 493,
    "sold": 34915,
    "sales": 3372837
}, {
    "code": "554927933-9",
    "item": "Cheese - Montery Jack",
    "type": "Curb & Gutter",
    "change": 0.018,
    "price": 728,
    "sold": 22025,
    "sales": 2995190
}, {
    "code": "661901439-9",
    "item": "Dikon",
    "type": "Rebar & Wire Mesh Install",
    "change": 0.422,
    "price": 135,
    "sold": 65505,
    "sales": 8099420
}, {
    "code": "819206458-1",
    "item": "Oven Mitt - 13 Inch",
    "type": "Exterior Signage",
    "change": 0.956,
    "price": 966,
    "sold": 10798,
    "sales": 9730764
}, {
    "code": "626968652-0",
    "item": "Cheese - Blue",
    "type": "Temp Fencing, Decorative Fencing and Gates",
    "change": 0.72,
    "price": 12,
    "sold": 21730,
    "sales": 5588369
}, {
    "code": "520713593-7",
    "item": "Nori Sea Weed - Gold Label",
    "type": "Electrical",
    "change": 0.579,
    "price": 603,
    "sold": 46446,
    "sales": 7746795
}, {
    "code": "520498304-X",
    "item": "Transfer Sheets",
    "type": "Roofing (Asphalt)",
    "change": 0.107,
    "price": 654,
    "sold": 30311,
    "sales": 3296819
}, {
    "code": "173699719-X",
    "item": "Sausage - Andouille",
    "type": "Hard Tile & Stone",
    "change": 0.5,
    "price": 656,
    "sold": 72815,
    "sales": 9140762
}, {
    "code": "283041069-6",
    "item": "Cheese - La Sauvagine",
    "type": "Waterproofing & Caulking",
    "change": 0.654,
    "price": 320,
    "sold": 46660,
    "sales": 5146900
}, {
    "code": "889802507-6",
    "item": "Bread - Wheat Baguette",
    "type": "Ornamental Railings",
    "change": 0.046,
    "price": 188,
    "sold": 65120,
    "sales": 525735
}, {
    "code": "212583773-0",
    "item": "Lid Coffee Cup 8oz Blk",
    "type": "Sitework & Site Utilities",
    "change": 0.773,
    "price": 421,
    "sold": 21319,
    "sales": 2161319
}, {
    "code": "273250804-7",
    "item": "Radish - Black, Winter, Organic",
    "type": "Granite Surfaces",
    "change": 0.622,
    "price": 564,
    "sold": 47749,
    "sales": 5733226
}, {
    "code": "897162563-5",
    "item": "Dc - Sakura Fu",
    "type": "Rebar & Wire Mesh Install",
    "change": 0.101,
    "price": 215,
    "sold": 3499,
    "sales": 2727441
}, {
    "code": "193175068-8",
    "item": "Soup - Campbells Broccoli",
    "type": "Overhead Doors",
    "change": 0.821,
    "price": 617,
    "sold": 14253,
    "sales": 8448307
}, {
    "code": "525141111-1",
    "item": "Nori Sea Weed - Gold Label",
    "type": "Electrical and Fire Alarm",
    "change": 0.048,
    "price": 64,
    "sold": 21330,
    "sales": 5504995
}, {
    "code": "276721823-1",
    "item": "Cookie Dough - Double",
    "type": "Ornamental Railings",
    "change": 0.515,
    "price": 55,
    "sold": 62045,
    "sales": 2942743
}, {
    "code": "612870484-0",
    "item": "Sugar - Palm",
    "type": "Rebar & Wire Mesh Install",
    "change": 0.221,
    "price": 756,
    "sold": 13390,
    "sales": 9399703
}, {
    "code": "912674085-0",
    "item": "Soup - Knorr, Country Bean",
    "type": "Rebar & Wire Mesh Install",
    "change": 0.609,
    "price": 142,
    "sold": 96544,
    "sales": 2436975
}, {
    "code": "606645038-7",
    "item": "Artichokes - Jerusalem",
    "type": "Hard Tile & Stone",
    "change": 0.933,
    "price": 353,
    "sold": 72206,
    "sales": 4050244
}, {
    "code": "321205668-1",
    "item": "Pasta - Canelloni",
    "type": "Construction Clean and Final Clean",
    "change": 0.242,
    "price": 450,
    "sold": 90521,
    "sales": 274753
}, {
    "code": "985930630-3",
    "item": "Clams - Canned",
    "type": "Electrical",
    "change": 0.544,
    "price": 983,
    "sold": 99653,
    "sales": 7965725
}, {
    "code": "309753674-4",
    "item": "Cookie - Oatmeal",
    "type": "Framing (Steel)",
    "change": 0.242,
    "price": 789,
    "sold": 49212,
    "sales": 7735285
}, {
    "code": "069994134-2",
    "item": "Catfish - Fillets",
    "type": "Electrical",
    "change": 0.683,
    "price": 824,
    "sold": 23764,
    "sales": 7836120
}, {
    "code": "514185885-5",
    "item": "Garbage Bags - Clear",
    "type": "Epoxy Flooring",
    "change": 0.486,
    "price": 172,
    "sold": 32346,
    "sales": 2307376
}, {
    "code": "250223147-7",
    "item": "Flour - Bread",
    "type": "Asphalt Paving",
    "change": 0.984,
    "price": 131,
    "sold": 65327,
    "sales": 7548218
}, {
    "code": "723918701-2",
    "item": "Water, Tap",
    "type": "Casework",
    "change": 0.701,
    "price": 467,
    "sold": 52910,
    "sales": 824073
}, {
    "code": "342342401-X",
    "item": "Lettuce - Baby Salad Greens",
    "type": "Electrical and Fire Alarm",
    "change": 0.188,
    "price": 759,
    "sold": 73764,
    "sales": 6253541
}, {
    "code": "636627735-4",
    "item": "Pasta - Penne, Lisce, Dry",
    "type": "Retaining Wall and Brick Pavers",
    "change": 0.505,
    "price": 640,
    "sold": 56069,
    "sales": 6492227
}, {
    "code": "380461432-9",
    "item": "Butter - Unsalted",
    "type": "Painting & Vinyl Wall Covering",
    "change": 0.429,
    "price": 811,
    "sold": 74270,
    "sales": 9782978
}, {
    "code": "978593549-3",
    "item": "Spice - Greek 1 Step",
    "type": "Electrical",
    "change": 0.992,
    "price": 429,
    "sold": 61871,
    "sales": 2764345
}, {
    "code": "155275566-5",
    "item": "Pan Grease",
    "type": "Site Furnishings",
    "change": 0.052,
    "price": 973,
    "sold": 79,
    "sales": 1795015
}, {
    "code": "190098849-6",
    "item": "Vinegar - Raspberry",
    "type": "Roofing (Metal)",
    "change": 0.147,
    "price": 996,
    "sold": 51299,
    "sales": 5924227
}, {
    "code": "243852458-8",
    "item": "Sugar - Palm",
    "type": "Roofing (Metal)",
    "change": 0.111,
    "price": 212,
    "sold": 77394,
    "sales": 3402928
}, {
    "code": "631009341-X",
    "item": "Rosemary - Fresh",
    "type": "Termite Control",
    "change": 0.6,
    "price": 376,
    "sold": 20995,
    "sales": 5216335
}, {
    "code": "066387977-9",
    "item": "Danishes - Mini Cheese",
    "type": "Drilled Shafts",
    "change": 0.092,
    "price": 933,
    "sold": 49095,
    "sales": 6403216
}, {
    "code": "779326731-1",
    "item": "Chickhen - Chicken Phyllo",
    "type": "EIFS",
    "change": 0.764,
    "price": 660,
    "sold": 54734,
    "sales": 8266298
}, {
    "code": "209701516-6",
    "item": "Soup - French Onion, Dry",
    "type": "Electrical and Fire Alarm",
    "change": 0.124,
    "price": 117,
    "sold": 69632,
    "sales": 1426847
}, {
    "code": "924935853-9",
    "item": "Veal - Leg",
    "type": "Sitework & Site Utilities",
    "change": 0.701,
    "price": 714,
    "sold": 58899,
    "sales": 7463949
}, {
    "code": "180623976-0",
    "item": "Vinegar - White",
    "type": "HVAC",
    "change": 0.215,
    "price": 362,
    "sold": 1188,
    "sales": 5424736
}, {
    "code": "552078017-X",
    "item": "Sauce - Soya, Light",
    "type": "Drilled Shafts",
    "change": 0.979,
    "price": 768,
    "sold": 6287,
    "sales": 1479817
}, {
    "code": "394471767-8",
    "item": "Pepper - Red Bell",
    "type": "HVAC",
    "change": 0.624,
    "price": 60,
    "sold": 51467,
    "sales": 304746
}, {
    "code": "398873810-7",
    "item": "Beef - Rib Eye Aaa",
    "type": "Granite Surfaces",
    "change": 0.854,
    "price": 750,
    "sold": 54094,
    "sales": 5335228
}, {
    "code": "521459761-4",
    "item": "Soup - Campbells Tomato Ravioli",
    "type": "Elevator",
    "change": 0.068,
    "price": 824,
    "sold": 58078,
    "sales": 5025258
}, {
    "code": "936672630-5",
    "item": "Rabbit - Saddles",
    "type": "Construction Clean and Final Clean",
    "change": 0.008,
    "price": 159,
    "sold": 29269,
    "sales": 5233587
}, {
    "code": "055515147-6",
    "item": "Sauce - Soya, Dark",
    "type": "Electrical",
    "change": 0.94,
    "price": 167,
    "sold": 92498,
    "sales": 9195620
}, {
    "code": "630159084-8",
    "item": "Wine - Gato Negro Cabernet",
    "type": "Fire Protection",
    "change": 0.411,
    "price": 823,
    "sold": 66467,
    "sales": 8661061
}, {
    "code": "679990905-5",
    "item": "Beer - Fruli",
    "type": "Retaining Wall and Brick Pavers",
    "change": 0.522,
    "price": 600,
    "sold": 36698,
    "sales": 1934428
}, {
    "code": "653868745-8",
    "item": "Sobe - Green Tea",
    "type": "Temp Fencing, Decorative Fencing and Gates",
    "change": 0.115,
    "price": 777,
    "sold": 34082,
    "sales": 8479162
}, {
    "code": "730283276-5",
    "item": "Lettuce - Mini Greens, Whole",
    "type": "Sitework & Site Utilities",
    "change": 0.581,
    "price": 770,
    "sold": 33418,
    "sales": 1875282
}, {
    "code": "000559214-3",
    "item": "Wine - Red, Pelee Island Merlot",
    "type": "Electrical and Fire Alarm",
    "change": 0.676,
    "price": 154,
    "sold": 55832,
    "sales": 3895966
}, {
    "code": "114593088-3",
    "item": "Shrimp - 16/20, Iqf, Shell On",
    "type": "Soft Flooring and Base",
    "change": 0.917,
    "price": 208,
    "sold": 43114,
    "sales": 3540980
}, {
    "code": "948700650-8",
    "item": "Sage - Ground",
    "type": "Exterior Signage",
    "change": 0.76,
    "price": 810,
    "sold": 6290,
    "sales": 6515563
}, {
    "code": "175240289-8",
    "item": "Lettuce - Radicchio",
    "type": "Retaining Wall and Brick Pavers",
    "change": 0.929,
    "price": 116,
    "sold": 19383,
    "sales": 6016379
}, {
    "code": "717246092-8",
    "item": "Ezy Change Mophandle",
    "type": "Termite Control",
    "change": 0.677,
    "price": 558,
    "sold": 38502,
    "sales": 6222633
}, {
    "code": "111582949-1",
    "item": "Flower - Commercial Spider",
    "type": "Elevator",
    "change": 0.741,
    "price": 124,
    "sold": 67431,
    "sales": 2482025
}, {
    "code": "240044286-X",
    "item": "Wine - Red, Concha Y Toro",
    "type": "Roofing (Asphalt)",
    "change": 0.234,
    "price": 542,
    "sold": 40165,
    "sales": 9213020
}, {
    "code": "892298561-5",
    "item": "Stock - Veal, White",
    "type": "Structural & Misc Steel Erection",
    "change": 0.358,
    "price": 612,
    "sold": 68776,
    "sales": 5301039
}, {
    "code": "077161342-3",
    "item": "Ecolab - Lime - A - Way 4/4 L",
    "type": "Construction Clean and Final Clean",
    "change": 0.421,
    "price": 414,
    "sold": 19210,
    "sales": 8521616
}, {
    "code": "997376331-9",
    "item": "Cranberries - Fresh",
    "type": "Framing (Wood)",
    "change": 0.731,
    "price": 217,
    "sold": 54511,
    "sales": 1164890
}, {
    "code": "049848508-0",
    "item": "Spice - Chili Powder Mexican",
    "type": "Prefabricated Aluminum Metal Canopies",
    "change": 0.615,
    "price": 418,
    "sold": 69606,
    "sales": 2201412
}, {
    "code": "310103900-2",
    "item": "Pernod",
    "type": "Site Furnishings",
    "change": 0.083,
    "price": 531,
    "sold": 98253,
    "sales": 6907059
}, {
    "code": "051925237-3",
    "item": "Beans - Long, Chinese",
    "type": "Plumbing & Medical Gas",
    "change": 0.736,
    "price": 633,
    "sold": 87021,
    "sales": 2633765
}, {
    "code": "332809417-2",
    "item": "Vinegar - Balsamic, White",
    "type": "EIFS",
    "change": 0.155,
    "price": 595,
    "sold": 10809,
    "sales": 7490934
}, {
    "code": "311217724-X",
    "item": "Nantucket Cranberry Juice",
    "type": "Fire Protection",
    "change": 0.847,
    "price": 759,
    "sold": 15799,
    "sales": 5508390
}, {
    "code": "188108351-9",
    "item": "Scampi Tail",
    "type": "Asphalt Paving",
    "change": 0.341,
    "price": 763,
    "sold": 91169,
    "sales": 1427445
}, {
    "code": "238477522-7",
    "item": "Beef - Roasted, Cooked",
    "type": "Roofing (Metal)",
    "change": 0.226,
    "price": 295,
    "sold": 6941,
    "sales": 5870279
}, {
    "code": "352086434-7",
    "item": "Pasta - Orzo, Dry",
    "type": "Fire Protection",
    "change": 0.702,
    "price": 493,
    "sold": 38065,
    "sales": 7204207
}, {
    "code": "613091906-9",
    "item": "Pasta - Canelloni, Single Serve",
    "type": "Framing (Wood)",
    "change": 0.365,
    "price": 507,
    "sold": 33492,
    "sales": 1795442
}, {
    "code": "391797995-0",
    "item": "Cookie Dough - Peanut Butter",
    "type": "Wall Protection",
    "change": 0.072,
    "price": 916,
    "sold": 18011,
    "sales": 1096868
}, {
    "code": "338694715-8",
    "item": "Chicken - White Meat With Tender",
    "type": "Fire Sprinkler System",
    "change": 0.652,
    "price": 259,
    "sold": 62438,
    "sales": 3518738
}, {
    "code": "622100511-6",
    "item": "Muffin Mix - Raisin Bran",
    "type": "Marlite Panels (FED)",
    "change": 0.518,
    "price": 66,
    "sold": 31950,
    "sales": 3625014
}, {
    "code": "701508590-9",
    "item": "Chicken - Diced, Cooked",
    "type": "Soft Flooring and Base",
    "change": 0.838,
    "price": 956,
    "sold": 14079,
    "sales": 5512152
}, {
    "code": "185766059-5",
    "item": "Grouper - Fresh",
    "type": "Structural and Misc Steel (Fabrication)",
    "change": 0.271,
    "price": 697,
    "sold": 27104,
    "sales": 9754410
}, {
    "code": "928784760-6",
    "item": "Peppercorns - Pink",
    "type": "HVAC",
    "change": 0.935,
    "price": 59,
    "sold": 26477,
    "sales": 4209354
}, {
    "code": "201698548-8",
    "item": "Pasta - Fusili, Dry",
    "type": "Casework",
    "change": 0.45,
    "price": 280,
    "sold": 79740,
    "sales": 1246978
}]


export type Product = {
    code: string
    item: string
    type: string
    change: number
    price: number
    sold: number
    sales: number
}

export const columns: ColumnDef<Product>[] = [

    {
        accessorKey: "code",
        header: "Code",
        cell: ({ row }) => (
            <div className="capitalize regular-text-14-medium !text-dark-2">{row.getValue("code")}</div>
        ),
    },
    {
        accessorKey: "item",
        header: "Item",
        cell: ({ row }) => (
            <div className="capitalize regular-text-14-semibold flex gap-2 items-center">
                <Avatar className="rounded-sm w-9 h-9">
                    <AvatarImage src="https://picsum.photos/200" />
                </Avatar>
                <span>
                    {row.getValue("item")}</span></div>
        ),
    },
    {
        accessorKey: "type",
        header: "Type",
        cell: ({ row }) => (
            <div className="capitalize regular-text-14-medium">
                <Badge variant={'default'} className="bg-dark-3 rounded-sm py-1 px-2">
                    {row.getValue("type")}
                </Badge>
            </div>
        ),
    },
    {
        accessorKey: "change",
        header: "change",
        cell: ({ row }) => (
            <div className="capitalize regular-text-14-medium flex gap-1">
                {Math.random() > 0.5 ? <Icons.topRightArrow /> : <Icons.bottomRightArrow />}
                <span>{formatNumber(row.getValue("change"), 'percent')}</span>
            </div>
        ),
    },

    {
        accessorKey: "price",
        header: () => <div className="text-right">Price</div>,
        cell: ({ row }) => {

            return <div className="text-right regular-text-14-medium">{formatNumber(row.getValue("price"), 'currency')}</div>
        },
    },
    {
        accessorKey: "sold",
        header: () => <div className="text-right">Sold</div>,
        cell: ({ row }) => {

            return <div className="text-right regular-text-14-medium">{formatNumber(row.getValue("sold"), 'currency')}</div>
        },
    },
    {
        accessorKey: "sales",
        header: () => <div className="text-right">sales</div>,
        cell: ({ row }) => {

            return <div className="text-right regular-text-14-semibold">{formatNumber(row.getValue("sales"), 'currency')}</div>
        },
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const payment = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(payment.code)}
                        >
                            Copy payment ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href={`/products/${payment.code}`}>
                                View product details
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]

function ProductsTable() {
    const [sorting, setSorting] = React.useState<SortingState>([])


    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting,
        },
    })

    return (
        <div className="w-full">
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="mt-9">

                <DataTablePagination
                    currentPage={table.getState().pagination.pageIndex + 1 || 1}
                    totalCount={data.length}
                    pageSize={table.getState().pagination.pageSize}
                    table={table} title="products" />
            </div>
        </div>
    )
}

export default ProductsTable