import React from 'react';
import { Typography } from '@mui/material';

const Footer = () => {
    return (
        <footer>
            <Typography component="p" variant="p" bgcolor="#e6e6e6" color="primary" padding="10px" textAlign="center">
                پروژه آزمایشی وبلاگ گیمینگ با استفاده از GraphQL و MUI
            </Typography>
        </footer>

    );
};

export default Footer;