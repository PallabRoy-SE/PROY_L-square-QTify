import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Logo from '../Logo/Logo';
import Searchbar from '../Searchbar/Searchbar';
import Button from '../Button/Button';
export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static'>
                <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Logo />
                    <Box sx={{ width: '35%' }}>
                        <Searchbar />
                    </Box>
                    <Button variant='dark'>Give Feedback</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
