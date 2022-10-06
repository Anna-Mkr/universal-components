import { configureStore } from '@reduxjs/toolkit'
import loadingReducer from "./loadingSlice";


const store =  configureStore({
    reducer: {
        loading: loadingReducer
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store

// const reducers = combineReducers({
//     loading: loadingReducer,
//
// })

// const store = createStore(reducers)
//

//
// export type AppStoreType = ReturnType<typeof reducers>
//
// // @ts-ignore
// window.store = store // for dev
