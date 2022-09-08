import React from 'react'
import s from "./AlternativeMessage.module.css";


type AlternativeMessageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}

function AlternativeMessage(props: AlternativeMessageDataType) {

    return (
        <div className={s.wrapper}>

            <div className={s.bubbleAlt} >
                <div className={s.txt}>
                    <p className={s.nameAlt}>{props.name}</p>
                    <p className={s.message}>{props.message}</p>
                    <span className={s.timestamp}>{props.time}</span>
                </div>
                <div className={s.bubbleArrowAlt}></div>
            </div>
                <img alt={'avatar'} className={s.avatar} src={props.avatar}/>
        </div>
    )
}

export default AlternativeMessage
