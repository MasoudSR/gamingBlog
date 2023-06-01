import React from 'react';
import Grid from '@mui/material/Grid'
import Articles from './Articles';
import { Container, Typography } from '@mui/material';
import Authors from './Authors';

const Content = () => {
    return (
        <Container>
            <Grid container spacing={2} marginTop={1} padding={3}>
                <Grid item xs={12} sm={4}>
                    <Typography variant='h5'>
                        نویسندگان
                    </Typography>
                    <Authors />
                </Grid>
                <Grid item xs={12} sm={8} marginTop={{ xs: 5, sm: 0 }}>
                    <Typography>
                        مقالات
                    </Typography>
                    <Articles />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Content;