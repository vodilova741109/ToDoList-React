import { Link } from 'react-router-dom'
import styled from 'styled-components'

 
export const NotFoundBlock = styled.div<{img: string}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
   
    padding: 20px;
    background-image: url(${(props) => props.img} )  ;
    height: 100vh;
    padding: 
`
export const Title = styled.h1`
    color: #fff;
    font-size: 45px;
    font-family: Roboto;
    text-shadow: 1px 1px 2px gray, 0 0 1em gray, 0 0 0.2em gray;
  
`

export const LinkButton = styled(Link)`
   color: rgb(70, 130, 180);
   font-size: 40px;
   text-decoration: none;
`