import { FC } from 'react'
import NewCustomersItem from './NewCustomersItem'

interface NewCustomersItemsProps {

}
const data = [{
    "id": 1,
    "first_name": "Darsie",
    "last_name": "Poulsum",
    "img": "http://dummyimage.com/112x100.png/dddddd/000000",
    "cust_id": 16090
}, {
    "id": 2,
    "first_name": "Claudina",
    "last_name": "Buckner",
    "img": "http://dummyimage.com/112x100.png/dddddd/000000",
    "cust_id": 23828
}, {
    "id": 3,
    "first_name": "Evonne",
    "last_name": "Godon",
    "img": "http://dummyimage.com/112x100.png/dddddd/000000",
    "cust_id": 41563
}, {
    "id": 4,
    "first_name": "Matthieu",
    "last_name": "Shea",
    "img": "http://dummyimage.com/112x100.png/dddddd/000000",
    "cust_id": 6348
}, {
    "id": 5,
    "first_name": "Perla",
    "last_name": "Sainsberry",
    "img": "http://dummyimage.com/112x100.png/dddddd/000000",
    "cust_id": 5716
}]

const NewCustomersItems: FC<NewCustomersItemsProps> = ({ }) => {
    return <ul className='flex flex-col gap-4'>
        {data.map((item, i) => {
            return <NewCustomersItem key={i} customer={item} />
        })}
    </ul>
}

export default NewCustomersItems