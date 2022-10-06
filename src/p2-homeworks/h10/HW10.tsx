import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useAppDispatch, useAppSelector} from "../../p1-main/m1-ui/u1-app/hooks";
import s from "./HW10.module.css"
import { isLoading } from './bll/loadingSlice';



function HW10() {

    const dispatch = useAppDispatch()//Typed Hooks useDispatch

    const loading = useAppSelector(state => state.loading.loading)//Typed Hooks useSelector

    const setLoading = () => {
        dispatch(isLoading(true))
        setTimeout(() => {
            dispatch(isLoading(false))
        }, 2000)
        console.log('loading...')
    };

    return (
        <div className={s.wrapper}>
            <hr/>
            homeworks 10
            <div>
                {loading
                    ? (

                        <div className={s.preloaderContainer}>
                           <img alt={"Preloader"} className={s.preloaderGif} src={"https://i.gifer.com/ZZ5H.gif"}/>
                    </div>

                    ) : (
                    <div className={s.container}>
                    <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                    )
                }

            </div>
        </div>
    )
}

export default HW10
