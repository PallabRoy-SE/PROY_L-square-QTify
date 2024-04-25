import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import HeroImage from '../../assets/hero-image.png';
function HeroSection() {
    return (
        <Container
            maxWidth='lg'
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBlock: '2rem' }}
        >
            <Box sx={{ textAlign: 'center', marginRight: '1.5em' }}>
                <Typography variant='h4' sx={{ marginBottom: '0.5em', fontWeight: 'bold' }}>
                    100 Thousand Songs, ad-free
                </Typography>
                <Typography variant='h4' sx={{ fontWeight: 'bold' }}>
                    Over thousands podcast episodes
                </Typography>
            </Box>
            <Box sx={{ width: '12em', height: '12em' }}>
                <img src={HeroImage} alt='hero' />
            </Box>
        </Container>
    );
}

export default HeroSection;
