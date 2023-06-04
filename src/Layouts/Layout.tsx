import { Outlet } from "react-router-dom"
import { Header } from "../components/Header/Header"
import { GlobalStyle } from "../styles/GlobalStyle"
import { ThemeProvider } from "styled-components"
import { useSelector } from "react-redux"
import { RootState } from "../store"

// import { renderToString } from 'react-dom/server';
import { Helmet, HelmetProvider } from 'react-helmet-async';



export const Layouts = () => {
    const theme = useSelector((state: RootState) => state.themeList.theme)
    return(
        <>    
        <HelmetProvider >
            <Helmet>        
                <link rel="icon" href="/ToDoList-React/favicon.ico" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="description" content="Web site created using create-react-app" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com"  />
                <link
                href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
                rel="stylesheet"
                />    
            </Helmet>
        <title>ToDo List</title>
 
        </HelmetProvider>  
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Header/>
            <Outlet/>
        </ThemeProvider>       
        </>
    )
}