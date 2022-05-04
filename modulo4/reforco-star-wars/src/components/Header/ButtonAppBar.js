import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { StyledToolBar } from "./styled";

export default function ButtonAppBar(props) {
    return (
        <AppBar position="static">
            <StyledToolBar>

                <Button variant="contained">Personagens</Button>;

                <Typography variant="h6" component="div" sx={{ flex }}

            </StyledToolBar>
        </AppBar>

    );
}