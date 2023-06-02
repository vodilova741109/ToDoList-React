import { createAction, createSlice } from '@reduxjs/toolkit'
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
      
      const newText: TextState = {       
        text: action.payload,        
      }
      if (newText) {        
       createAction(newText.text)      
       createAction('')
            }
       state = newText
 
    },
  },
})

export const { setText} = textSlice.actions

export default textSlice.reducer