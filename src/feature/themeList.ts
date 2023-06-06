import { createSlice } from '@reduxjs/toolkit'
import { Theme } from '../models/themes'
import { themes } from '../styles/themes'

export interface TnemeState {
  theme: Theme
}

const initialState: TnemeState = {
    theme: themes['light']
}

export const tnemeSlice = createSlice({
  name: 'themeList',
  initialState,
  reducers: {
    
    toggleThemeAction: (state) => {     
       state.theme = state.theme.name === 'light' ? themes['dark'] : themes['light']
    },
  
  },
})




export const {toggleThemeAction} = tnemeSlice.actions

export default tnemeSlice.reducer