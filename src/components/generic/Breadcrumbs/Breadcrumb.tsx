import s from './Breadcrumb.module.sass'
import classNames from "classnames";

interface BreadcrumbProps{
    className?: CSSModuleClasses | string
}
export default function Breadcrumb(props: BreadcrumbProps){

    return (
        <div className={classNames(s.text, props.className)}>
            <span className={s.main}>Главная / </span>
            <span className={s.cases}>Кейсы</span>

        </div>
    )
}