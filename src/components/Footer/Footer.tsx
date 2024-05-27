import s from './Footer.module.sass'
import MainLogo from "../generic/MainLogo/MainLogo";
import Telephone from "../generic/ContactInfo/Telephone";
import Email from "../generic/ContactInfo/Email";
import Address from "../generic/ContactInfo/Address";
import {NavLink} from "react-router-dom";

export default function Footer() {

    return (
        <footer className={s.footer}>
            <div className="container">
                <div className={s.wrapper}>
                    <div className={s.logo}>
                        <MainLogo className={s.img}/>
                        <div className={s.logoDescription}>Веб-разработка и усиление IT-команд</div>
                    </div>
                    <div className={s.from}>
                        <div className={s.contacts}>
                            <Telephone/>
                            <Email/>
                            <Address/>
                        </div>
                        <nav className={s.nav}>
                            <div className={s.items}>
                                <NavLink className={s.link} to={'/'}>Агентство</NavLink>
                                <NavLink className={s.link} to={'/'}>Услуги</NavLink>
                                <NavLink className={s.link} to={'/'}>Кейсы</NavLink>
                            </div>
                            <div className={s.items}>
                                <NavLink className={s.link} to={'/'}>Блог</NavLink>
                                <NavLink className={s.link} to={'/'}>Контакты</NavLink>
                            </div>
                        </nav>

                    </div>
                </div>
            </div>
        </footer>
    )
}