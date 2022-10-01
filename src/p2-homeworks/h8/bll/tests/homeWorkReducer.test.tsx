import React from 'react'
import {homeWorkReducer} from '../homeWorkReducer'

export type UserType = {
    _id: number,
    name: string,
    age: number
}


let initialState: UserType[] // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'up'})

    console.log(newState)
     expect(newState.length).toBe(6);
     expect(newState[5]._id).toBe(0);
     expect(newState[4].name).toBe('Коля');

})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'down'})

    console.log(newState)
    expect(newState.length).toBe(6);
    expect(newState[5]._id).toBe(1);
    expect(newState[4].name).toBe('Виктор');
})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, {type: 'check', payload: 18})

    console.log(newState)
    expect(newState.length).toBe(4);
})
test('reset state', () => {
    const newState = homeWorkReducer(initialState, {type: 'reset', payload: initialState})

    console.log(newState)
    expect(newState.length).toBe(6);
    expect(newState[5]._id).toBe(5);
    expect(newState[4].name).toBe('Дмитрий');
})
