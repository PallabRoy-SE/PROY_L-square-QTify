import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#34C94B',
        },
        secondary: {
            main: '#FFFFFF', // Assuming you want to use white for secondary elements
        },
        background: {
            default: '#121212', // Setting app background to black
        },
        text: {
            primary: '#FFFFFF', // Setting primary text color to white
            secondary: '#E0E0E0', // Optional: if you need a slightly dim color for secondary text
        },
    },
    typography: {
        fontFamily: ['Poppins', 'sans-serif'].join(','),
        allVariants: {
            color: '#FFFFFF', // Ensuring all text variants use white color
        },
    },
    components: {
        // Customizing all MUI buttons
        MuiButton: {
            styleOverrides: {
                // Applying styles to the root of the Button component
                root: {
                    color: '#FFFFFF', // Setting button text color to white
                    textTransform: 'none', // Preventing any capitalization changes
                    borderRadius: '12px',
                },
            },
        }, // Customizing all MUI IconButtons
        MuiIconButton: {
            styleOverrides: {
                root: {
                    color: '#FFFFFF', // Setting icon button color to white
                },
            },
        },
    },
});

export default theme;
