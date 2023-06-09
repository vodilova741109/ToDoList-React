// import { NavLink } from 'react-router-dom'
import { ButtonTheme, HeaderBlock, HeaderContainer, WrapperButton } from './Header.styled'
import { NavLink } from 'react-router-dom'
import classes from './Header.module.scss'
import { useDispatch } from 'react-redux'
import { toggleThemeAction } from '../../feature/themeList'

export const Header = () => {
    const dispatch = useDispatch()
   

    const getActiveClass = ({isActive}: {isActive: boolean}) : string =>{
        return isActive ? `${classes.active} ${classes.link}` : classes.link
    }
    return (
        <HeaderBlock>
        <HeaderContainer>
            <NavLink to="/" className={getActiveClass}>ToDo</NavLink>
            <NavLink to="/list" className={getActiveClass}>List</NavLink>           
            <WrapperButton>
                <ButtonTheme onClick={()=>dispatch(toggleThemeAction())}>
                    Theme                   
                </ButtonTheme>
            </WrapperButton>
        </HeaderContainer>
    </HeaderBlock>
    )
}