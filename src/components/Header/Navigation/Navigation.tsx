import {NavLink} from "react-router-dom";
import s from './Navigation.module.sass'
import Burger from "../../generic/Burger/Burger.tsx";
import classNames from "classnames";
import Contacts from "./Contacts/Contats";
import Dispatcher from "../../../utils/types/types";

interface NavigationProps {
    isActive: boolean
    setIsActive: Dispatcher<boolean>

}

export default function Navigation({isActive, setIsActive}: NavigationProps) {


    return (
        <>
            <div className={classNames(s.navigationWrapper, {
                [s.active]: isActive
            })
            }>
                <nav className={classNames(s.nav, {
                    [s.active]: isActive
                })
                }>
                    <NavLink to={'/'} className={s.link}>Агентство</NavLink>
                    <NavLink to={'/'} className={s.link}>Услуги</NavLink>
                    <NavLink to={'/'} className={s.link}>Кейсы</NavLink>
                    <NavLink to={'/'} className={s.link}>Блог</NavLink>
                    <NavLink to={'/'} className={s.link}>Контакты</NavLink>
                </nav>
                <Contacts isActive={isActive}/>
            </div>



            <Burger isActive={isActive} setIsActive={setIsActive}/>
        </>
    )
}






