import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const theme = createTheme({
    typography: {
        allVariants: {
            color: "#37EBF3"
        },
        h1: {
            color:"#FDF500"
        }
    },
    palette: {
        primary: {
            main: "#FDF500",
            contrastText: "#000000"
        },
        secondary: {
            main: "#37EBF3",
        },
        success: {
            main: "#11C6A9"
        },
        background: {
            default: "#ffffff",
        },
        text: {
            primary: "#37EBF3",
            secondary: "#111111"
        },
        mode: 'dark'

    },
})

const responsiveTheme = responsiveFontSizes(theme)

export default responsiveTheme;