import s from "./Filter.module.sass";
import {useAppDispatch, useAppSelector} from "../../../../utils/hooks/hooks";
import {useEffect} from "react";
import {changeCategories, fetchCategories} from "../../../../redux/slices/casesSlice";
import classNames from "classnames";
import Skeleton from "./Skeleton";


export default function Filter(){
    const dispatch = useAppDispatch()
    const categories = useAppSelector(state => state.cases.categories)
    const categoriesStatus =  useAppSelector(state => state.cases.categoriesStatus)
    const selectFilter = useAppSelector(state => state.cases.selectFilter)
    useEffect(() => {
        dispatch(fetchCategories())
    }, [])

    function handleClick(id: number) {
        selectFilter === id ? dispatch(changeCategories(0)) : dispatch(changeCategories(id))

    }


    return (
        <div className={s.filter}>
            {categoriesStatus === 'loading' && <>
                <div className={s.skeleton}><Skeleton /></div>
                <div className={s.skeleton}><Skeleton /></div>
                <div className={s.skeleton}><Skeleton /></div>
                <div className={s.skeleton}><Skeleton /></div>

            </>

            }
            {
                categories && categories.map(e => {
                   return <div className={classNames(s.filterItem, {
                        [s.active]: selectFilter === e.id
                   })}
                               key={e.id}
                               onClick={() => handleClick(e.id)}
                   >{e.name}</div>
                })
            }

        </div>
    )
}