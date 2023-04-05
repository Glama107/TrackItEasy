import {createTheme, responsiveFontSizes} from "@mui/material";

let theme = createTheme({
    typography: {
        fontFamily: 'TT Firs Neue Trl', // Remplacez par votre police de caractères
        fontSize: 14,
    },
    palette: {
        primary: {
            main: '#1045F6', // Remplacez par votre couleur primaire
        },
        secondary: {
            main: 'rgba(211, 211, 211, 0.5)', // Remplacez par votre couleur secondaire
        },
    },
});

theme = responsiveFontSizes(theme);
export default theme;
