import styled from 'styled-components'
export const HeaderBlock = styled.header`{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 50px;
    background-color: #4682b4;
    display: flex;
    align-items: center;
}
}
`
export const HeaderContainer = styled.div`
{
    max-width: 97%;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}
`
export const Headerlink = styled.a`
{
    text-decoration: none;
    padding: 10px;
    color: #fff;
}
`
export const Headeractive  = styled.a`
{
    color: #ffffff33;
}
`
export const WrapperButton = styled.div `
{
    position: absolute;
    right: 0;
    top: 10%;
    transform: translate(-10%);    
}

`
export const ButtonTheme = styled.button `
    padding: 10px;
    background-color: #81abcd;
    border: #81abcd;
    color: #fff;
    border-radius: 6px;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);

`