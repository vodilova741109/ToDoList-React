

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { createAction } from '../../feature/todolist'
import { setText } from '../../feature/formtext'
import { FormBlock, FormButton, FormInput, FormLabel, FormWrapper } from './Form.styled'
import plusIcon from '../../assets/images/plus.png'

export const Form = (props: { createNewToDo: Function }) => {
    const todoForm = useSelector((state: RootState) => state.formText.text)
    const dispatch = useDispatch()
    const formSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault()     
            dispatch(setText(todoForm))
    }

    return (
        <FormWrapper>
            <FormBlock action="#" onSubmit={formSubmit}>
                <FormLabel>
                    <FormInput                     
                        value={todoForm}
                        type="text"
                        onChange={(e) => dispatch(createAction(e.target.value))} />
                    <FormButton icon={plusIcon} />
                </FormLabel>
            </FormBlock>
        </FormWrapper>
    )
}