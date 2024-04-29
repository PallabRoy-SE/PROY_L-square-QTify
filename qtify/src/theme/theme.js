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
        MuiAccordion: {
            styleOverrides: {
                root: {
                    borderTopLeftRadius: '10px !important',
                    borderTopRightRadius: '10px !important',
                    borderBottomLeftRadius: '10px !important',
                    borderBottomRightRadius: '10px !important',
                    border: '1px solid #ffffff',
                    overflow: 'hidden',
                    marginBottom: '1rem',
                },
            },
        },
        MuiAccordionSummary: {
            styleOverrides: {
                root: {
                    backgroundColor: '#121212', // Setting AccordionSummary background to black
                    borderRadius: 10,
                    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                        color: '#34C94B', // Setting the expanded icon color to primary
                    },
                    '& .MuiAccordionSummary-expandIconWrapper': {
                        color: '#34C94B', // Setting the icon color to primary
                        '& svg': {
                            fontSize: '2.5rem',
                        },
                    },
                },
            },
        },
        MuiAccordionDetails: {
            styleOverrides: {
                root: {
                    backgroundColor: '#FFFFFF', // Setting AccordionDetails background to white
                    '& p': {
                        color: '#121212', // Setting AccordionDetails text color to black
                    },
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    background: '#34C94B',
                },
            },
        },
    },
});

export default theme;
