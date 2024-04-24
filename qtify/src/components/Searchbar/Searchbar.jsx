import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import styled from '@emotion/styled';
import { InputBase } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '8px',
    backgroundColor: theme.palette.common.white,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    border: '1px solid black',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 1.2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    borderLeft: '1px solid black',
    justifyContent: 'center',
    top: 0,
    right: 0,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 0, 1, 1.5),
        // vertical padding + font size from searchIcon
        paddingRight: `calc(1em + ${theme.spacing(3.8)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
    },
}));
function Searchbar() {
    return (
        <Search>
            <StyledInputBase placeholder='Search a song of your choice' inputProps={{ 'aria-label': 'search' }} />
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
        </Search>
    );
}

export default Searchbar;
