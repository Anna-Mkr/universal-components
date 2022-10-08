import {createSlice, PayloadAction} from '@reduxjs/toolkit'



export const loadingSlice = createSlice(
    {
        name: 'loading',
        initialState: {
            loading: false
        },
        reducers: {
            isLoading: (state, action: PayloadAction<boolean>) => {
                state.loading = action.payload
            }
        }
    })

export const { isLoading } = loadingSlice.actions

export default loadingSlice.reducer