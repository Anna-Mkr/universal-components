import React from 'react'
import s from './Message.module.css'

type MessageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageDataType) {
    return (
        <div className={s.wrapper} >
                <img alt={'avatar'} className={s.avatar} src={props.avatar}/>
            <div className={s.bubble} >
                <div className={s.txt}>
                    <p className={s.name}>{props.name}</p>
                    <p className={s.message}>{props.message}</p>
                    <span className={s.timestamp}>{props.time}</span>
                </div>
                <div className={s.bubbleArrow}/>
            </div>

        </div>
    )
}

export default Message
