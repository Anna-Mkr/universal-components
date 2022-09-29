import React from 'react'
import Message from './Message';
import AlternativeMessage from './AlternativeMessage';


const messageData = {
    avatar: 'https://citaty.info/files/styles/poster/public/characters/16322.jpg?itok=zT31roVf',
    name: 'Черный плащ',
    message: 'Дулидули приветуууууулиииии',
    time: '22:00',
}

function HW1() {

    return (
        <div>

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}

            />

            <AlternativeMessage
                name={'Аноним'}
                message={'Я есть Грут...'}
                avatar={'https://vgtimes.ru/uploads/posts/2022-07/89906_1_1.jpg'}
                time={'22:30'}
            />

        </div>
    )
}

export default HW1
