import s from './Card.module.sass'
import {useAppDispatch, useAppSelector} from "../../../../utils/hooks/hooks";
import {useEffect} from "react";
import {fetchCards} from "../../../../redux/slices/casesSlice";
import Skeleton from "./Skeleton";

export default function Card() {
    const dispatch = useAppDispatch()
    const cards = useAppSelector(state => state.cases.items)
    const cardsStatus = useAppSelector(state => state.cases.itemsStatus)
    const selectFilter = useAppSelector(state => state.cases.selectFilter)

    useEffect(() => {
        dispatch(fetchCards())
    }, [])

    return (
        <div className={s.cards}>
            { cardsStatus === 'loading' && <>
                <div className={s.skeleton}><Skeleton/></div>
                <div className={s.skeleton}><Skeleton/></div>
                <div className={s.skeleton}><Skeleton/></div>
                <div className={s.skeleton}><Skeleton/></div>
                <div className={s.skeleton}><Skeleton/></div>
                <div className={s.skeleton}><Skeleton/></div>

            </>}

            {
                cards && cards.filter(e => selectFilter === 0 || selectFilter === e.id)
                    .map(e => {
                        return <div className={s.cardWrapper} key={e.id}>
                            <div className={s.card} style={{
                                background: `url(${e.image})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                            }}>
                                <div className={s.about}>
                                    <img className={s.arrow} src="/images/card-arrow.svg" alt=""/>
                                    <div className={s.title}>{e.title}</div>
                                    <div className={s.description}>Онлайн гипермаркет. Для компании были разработаны сайт и
                                        мобильное приложение и т.д.
                                    </div>
                                </div>

                                <div className={s.blackout}></div>


                            </div>


                        </div>
                    })
            }


        </div>
    )
}

