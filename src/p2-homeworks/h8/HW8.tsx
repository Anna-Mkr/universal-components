import React, {useReducer} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW8.module.css'


export type UserType = {
    _id: number,
    name: string,
    age: number
}

const initialPeople: Array<UserType> = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    // const [people, setPeople] = useState<Array<UserType>>(initialPeople)
    const [people, dispatch] = useReducer(homeWorkReducer, initialPeople)

    const finalPeople = people.map((p: any) => (
        <div key={p._id}>
            <div className={s.userList}>
                <span>{p.name}</span>

                {p.age}
            </div>
        </div>
    ))

    const sortUp = () => dispatch({type: 'sort', payload: 'up'})
    const sortDown = () => dispatch({type: 'sort', payload: 'down'})
    const checkAge = () => dispatch({type: 'check', payload: 18})
    const resState = () => dispatch({type: 'reset', payload: initialPeople})

    return (
        <div className={s.container}>
            <hr/>
            homeworks 8
            <div>
                    {finalPeople}

                <div className={s.buttonsBlock}>
                    <SuperButton onClick={sortUp}>sort up</SuperButton>
                    <SuperButton onClick={sortDown}>sort down</SuperButton>
                    <SuperButton onClick={checkAge}>check 18</SuperButton>
                    <SuperButton onClick={resState}>reset</SuperButton>
                </div>

            </div>
        </div>
    )
}

export default HW8
