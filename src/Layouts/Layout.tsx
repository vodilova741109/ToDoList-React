import { Outlet } from "react-router-dom"
import { Header } from "../components/Header/Header"
import { GlobalStyle } from "../styles/GlobalStyle"
import { ThemeProvider } from "styled-components"
import { themes } from "../styles/themes"    



export const Layouts = () => {
    return(
        <>
        <ThemeProvider theme={themes['light']}>
            <GlobalStyle />
            <Header/>
            <Outlet/>
        </ThemeProvider>       
        </>
    )
}