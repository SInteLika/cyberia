import MainLogo from "../generic/MainLogo/MainLogo.tsx";
import Navigation from "./Navigation/Navigation.tsx";
import s from './Header.module.sass'
import {useState} from "react";
import classNames from "classnames";


export default function Header() {
    const [isActive, setIsActive] = useState<boolean>(false)

    return (
        <header className={s.header}>
            <div className="container">
                <div className={s.wrapper}>
                    <div className={classNames(s.logo, {
                        [s.active]: !isActive
                    })
                    } >
                        <MainLogo/>
                    </div>
                    <Navigation isActive={isActive} setIsActive={setIsActive}/>
                </div>
            </div>
        </header>
    )
}