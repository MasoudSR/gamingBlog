import React from 'react';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Container } from '@mui/material';

const Header = () => {
    return (
        <AppBar position="sticky" color="primary">
            <Container>
                <Toolbar>
                    <Typography variant="h6">
                        وبلاگ گیمینگ
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;