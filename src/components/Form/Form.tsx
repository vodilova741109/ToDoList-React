

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { resetText, setText } from '../../feature/formtext'
import { FormBlock, FormButton, FormInput, FormLabel, FormWrapper } from './Form.styled'
import plusIcon from '../../assets/images/plus.png'

export const Form = (props: { createNewToDo: Function }) => {
    const text = useSelector((state: RootState) => state.formText.text)
    const dispatch = useDispatch()

    const formSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault()     
        if(text){
          props.createNewToDo(text)
          dispatch(resetText(text))
        }
          
    }

    return (
        <FormWrapper>
            <FormBlock action="#" onSubmit={formSubmit}>
                <FormLabel>
                    <FormInput                     
                        value={text}
                        type="text"
                        onChange={(e) => dispatch(setText(e.target.value))} />
                    <FormButton icon={plusIcon} />
                </FormLabel>
            </FormBlock>
        </FormWrapper>
    )
}