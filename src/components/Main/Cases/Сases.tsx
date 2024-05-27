import Breadcrumb from "../../generic/Breadcrumbs/Breadcrumb";
import s from './Cases.module.sass'
import Filter from "./Filter/Filter";
import Card from "./Card/Card";

export default function Cases() {


    return (
        <section className={s.section}>
            <div className="container">
                    <Breadcrumb className={s.breadcrumb}/>
                    <h1 className={s.title}>Кейсы</h1>
                    <Filter/>
                    <Card/>
            </div>
        </section>
    )
}