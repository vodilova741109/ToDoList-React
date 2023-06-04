import { Theme, Themes } from "../models/themes"


const light: Theme ={
    name: 'light',
    colors: {
        backgroundPrimary: '#4682b4',
        backgroundSecondary: 'rgb(237, 240, 241)'
    }
}
const dark: Theme ={
    name: 'dark',
    colors: {
        backgroundPrimary: '#000000b0;',
        backgroundSecondary: 'gray'
    }
}
export const themes: Themes = {light, dark}