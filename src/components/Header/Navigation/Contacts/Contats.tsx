import classNames from "classnames";
import s from './Contacts.module.sass'
import Telephone from "../../../generic/ContactInfo/Telephone.tsx";
import Address from "../../../generic/ContactInfo/Address";
import Email from "../../../generic/ContactInfo/Email";

interface ContactsProps {
    isActive: boolean
}
export default function Contacts({isActive}: ContactsProps){

    return(
        <div className={classNames(s.contacts, {
            [s.active]: isActive
        })}>
            <div className={s.title}>Контакты:</div>
            <Telephone className={s.tel}/>
            <Email />
            <Address />
        </div>
    )
}