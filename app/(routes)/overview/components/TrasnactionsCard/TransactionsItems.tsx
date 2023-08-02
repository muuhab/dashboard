import { FC } from 'react'
import TransactionsItem from './TransactionsItem'

interface TransactionsItemsProps {

}
const data = [{
    "id": 1,
    "first_name": "Tammy",
    "last_name": "Pittet",
    "cust_id": 36410,
    "status": "DECLINED"
}, {
    "id": 2,
    "first_name": "Silvester",
    "last_name": "Wellbelove",
    "cust_id": 23980,
    "status": "DECLINED"
}, {
    "id": 3,
    "first_name": "Grace",
    "last_name": "Southwick",
    "cust_id": 26324,
    "status": "DECLINED"
}, {
    "id": 4,
    "first_name": "Elliott",
    "last_name": "Muneely",
    "cust_id": 29776,
    "status": "DECLINED"
}, {
    "id": 5,
    "first_name": "Florance",
    "last_name": "Testo",
    "cust_id": 35744,
    "status": "FOR PICKUP"
}]

const TransactionsItems: FC<TransactionsItemsProps> = ({ }) => {
    return <ul className='flex flex-col gap-4'>
        {data.map((item, i) => {
            return <TransactionsItem key={i} customer={item} />
        })}
    </ul>
}

export default TransactionsItems