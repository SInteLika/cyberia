import s from "./Burger.module.sass";
import classNames from "classnames";
import Dispatcher from "../../../utils/types/types";

interface BurgerProps {
    isActive: boolean
    setIsActive: Dispatcher<boolean>

}

export default function Burger({isActive, setIsActive}: BurgerProps){


    return (
        <div className={classNames(s.burger, {
            [s.active]: isActive
        })}
             onClick={() => {
                 setIsActive(!isActive)
                 document.body.style.overflowY = isActive ? 'auto' : 'hidden'

             }}
        >
            <span></span>
        </div>
    )
}
