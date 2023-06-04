import { Theme } from "../models/themes"


const light: Theme ={
    name: 'light',
    colors: {
        backgroundPrimary: '#4682b4',
        backgroundSecondary: 'rgb(237, 240, 241)'
    }
}
const dark: Theme ={
    name: 'light',
    colors: {
        backgroundPrimary: 'black',
        backgroundSecondary: 'gray'
    }
}
export const themes = {light, dark}