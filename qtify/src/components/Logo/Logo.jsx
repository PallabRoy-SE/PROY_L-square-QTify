import { Icon } from '@mui/material';
import React from 'react';
import qTifyLogo from '../../assets/logo.png';

function Logo() {
    return (
        <Icon sx={{ width: ' 2.5em', height: '1.25em' }}>
            <img src={qTifyLogo} alt='Custom Icon' style={{ width: '100%', height: '100%' }} />
        </Icon>
    );
}

export default Logo;
