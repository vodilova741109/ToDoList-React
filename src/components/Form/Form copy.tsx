

import { useDispatch, useSelector } from 'react-redux'
import classes from './Form.module.scss'
import { RootState } from '../../store'
import { createAction } from '../../feature/todolist'
import { setText } from '../../feature/formtext'

export const Form = (props: { createNewToDo: Function }) => {
    const todoForm = useSelector((state: RootState) => state.formText.text)
    const dispatch = useDispatch()
    const formSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault()     
            dispatch(setText(todoForm))
    }

    return (
        <div className={classes.wrapper}>
            <form action="#" onSubmit={formSubmit}>
                <label>
                    <input
                        className={classes.input}
                        value={todoForm}
                        type="text"
                        onChange={(e) => dispatch(createAction(e.target.value))} />
                    <button className={classes.button}></button>
                </label>
            </form>
        </div>
    )
}