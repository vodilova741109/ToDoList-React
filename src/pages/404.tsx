import { Link } from "react-router-dom"

import { LinkButton, NotFoundBlock, Title } from "./404.styled"
import notFound  from '../assets/images/notFound.jpg'

export const NotFound = ()=>{
    return (
        <>
            <NotFoundBlock img={ notFound}  >
                <Title>Not Faund</Title>              
                <LinkButton to="/">To Home</LinkButton>
            </NotFoundBlock>       
        </>
      
    )
}