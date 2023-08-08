import { Icons } from "../ui/Icons"


const ContactCardHeader = ({ title }: { title: string }) => {
    return <div className="flex justify-between">
        <span className='regular-text-14-semibold text-dark-main'>{title}</span>
        <span className="flex items-center">

            <span className='regular-text-14-medium text-purple-main'>Edit Info  </span>
            <Icons.arrowDown className='-rotate-90 [&>*]:fill-purple-main w-4 h-4' />
        </span>
    </div>
}

export default ContactCardHeader