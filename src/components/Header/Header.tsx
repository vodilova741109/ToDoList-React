// import { NavLink } from 'react-router-dom'
import { HeaderBlock, HeaderContainer, Headeractive, Headerlink } from './Header.styled'
import { NavLink } from 'react-router-dom'
import classes from './Header.module.scss'

export const Header = () => {

    const getActiveClass = ({isActive}: {isActive: boolean}) : string =>{
        return isActive ? `${classes.active} ${classes.link}` : classes.link
    }
    return (
        <HeaderBlock>
        <HeaderContainer>
            <NavLink to="/" className={getActiveClass}>ToDo</NavLink>
            <NavLink to="/list" className={getActiveClass}>List</NavLink>           
        </HeaderContainer>
    </HeaderBlock>
    )
}