import React from 'react';
import { default as MuiButton } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

// Define custom styles for the button types
const StyledButton = styled(MuiButton)(({ type }) => ({
    ...(type === 'green' && {
        backgroundColor: '#34C94B',
        color: '#FFFFFF',
        '&:hover': {
            backgroundColor: '#2a8c3b', // Slightly darker green on hover
        },
    }),
    ...(type === 'dark' && {
        backgroundColor: '#121212',
        color: '#34C94B',
        '&:hover': {
            backgroundColor: '#0f0f0f', // Slightly darker background on hover
        },
    }),
}));

const Button = ({ variant, children, ...props }) => {
    return (
        <StyledButton variant='contained' {...props} type={variant}>
            {children}
        </StyledButton>
    );
};

export default Button;
