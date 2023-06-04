import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'



export interface TextState {
  text: string
}

const initialState: TextState = {
  text: '',
}

export const textSlice = createSlice({
  name: 'formtext',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {  
        state.text = action.payload     
    },
    resetText: (state, action: PayloadAction<string>)=> { 
        state.text = ''      
      
    },
  },
})

export const {resetText, setText} = textSlice.actions

export default textSlice.reducer