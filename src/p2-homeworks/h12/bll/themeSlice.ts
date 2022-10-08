import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../h10/bll/store";

interface ThemeState {
    theme: string
}

const initialState: ThemeState = {
    theme: 'dark'
}


export const themeSlice = createSlice(
    {
        name: 'theme',
        initialState,
        reducers: {
            changeTheme: (state, action: PayloadAction<string>)=> {
                state.theme = action.payload
            }
        }
    }
)

export const { changeTheme } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.theme

export default themeSlice.reducer;
