import {UserType} from "../HW8";

type ActionType = { type: 'sort', payload: 'up' | 'down' } | { type: 'check', payload: 18 } |
    { type: 'reset', payload: Array<UserType> }

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => {
    switch (action.type) {
        case 'sort': {
            let stateCopy = [...state];
            if (action.payload === 'up') stateCopy.sort((a, b) => {
                if (a.name > b.name) return 1
                else if (a.name < b.name) return -1
                else return 0
            });

            return action.payload === 'up' ? stateCopy : stateCopy.reverse()
        }
        case 'check': {
            return state.filter(u => u.age > action.payload)
        }
        case 'reset': {
            return action.payload
        }
        default:
            return state
    }
}