
import { createTheme } from "@mui/material";
import { green, grey, pink } from "@mui/material/colors";


const lightColor = {

}

// Create light theme
export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: pink[600],
        },
        secondary: {
            main: green[500],
        },
        layoutColor: {
            main: '#F5F5F5',
            contrastText: "#000",

        },
    },
    typography: {
        fontFamily: 'Arial, sans-serif',
    },
});

// Create dark theme
export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: grey[900],
        },
        secondary: {
            main: grey[700],
        },
        layoutColor: {
            main: '#212121', // Example extra color
        },
    },
    typography: {
        fontFamily: 'Arial, sans-serif',
    },
});

declare module '@mui/material/styles' {
    interface Palette {
        layoutColor: Palette['primary'];
    }

    // allow configuration using `createTheme`
    interface PaletteOptions {
        layoutColor?: PaletteOptions['primary'];
    }
}

// @babel-ignore-comment-in-output Update the Button's color prop options
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        layoutColor: true;
    }
}
