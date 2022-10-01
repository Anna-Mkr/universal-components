import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
             setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const formatDate = (date: number) => {
        if(date<10){
            return `0${date}`;
        }
        return date
    }

    const stringTime = date.toLocaleTimeString() || <br/>
    const stringDate = `Date: ${date.toLocaleDateString()}` || <br/>

    return (
        <div className={s.container}>

            <div
                className={s.tooltip}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {show && (
                    <div className={s.tooltiptext}>
                        {stringDate}
                    </div>
                )}
                {stringTime}
            </div>

            <div>
                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>
            </div>
        </div>
    )
}

export default Clock
