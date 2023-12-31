import React from 'react';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <AppBar position="static" color="primary">
            <Container>
                <Toolbar>
                    <Typography variant="h6" fontWeight={600} textAlign="center" width="100%">
                        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                            وبـلاگ گـیـمیـنـگ
                        </Link>
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;