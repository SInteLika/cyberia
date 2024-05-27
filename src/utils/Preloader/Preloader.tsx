import s from "./Preloader.module.sass";

export default function Preloader(){
    return(
        <div className={s.ldsRing}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}