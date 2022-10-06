import {createSlice} from '@reduxjs/toolkit'

export const loadingSlice = createSlice(
    {
        name: 'loading',
        initialState: {
            loading: false
        },
        reducers: {
            isLoading: (state, action) => {
                state.loading = action.payload
            }
        }
    })

export const { isLoading } = loadingSlice.actions

export default loadingSlice.reducer