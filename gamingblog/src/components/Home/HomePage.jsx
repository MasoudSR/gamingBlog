import React from 'react';
import Grid from '@mui/material/Grid'
import Articles from './Articles';
import { Chip, Container, Divider, Typography } from '@mui/material';
import Authors from './Authors';

const HomePage = () => {
    return (
        <Container>
            <Grid container padding={1} paddingTop={4} spacing={{ xs: 0, sm: 3 }}>
                <Grid item xs={12} sm={3}>
                    <Typography variant='h5' fontWeight={500} textAlign="center" marginBottom={2}>
                        <Divider variant='middle'>
                            <Chip label="نویسندگان" sx={{'& .MuiChip-label': {fontSize: 18 , fontWeight:"bold"}}} />
                        </Divider>
                    </Typography>
                    <Authors />
                </Grid>
                <Grid item xs={12} sm={9} marginTop={{ xs: 5, sm: 0 }}>
                    <Typography variant='h5'sx={{'& .MuiChip-label': {fontSize: 18 , fontWeight:"bold"}}}>
                        <Divider variant='middle'>
                            <Chip label="مقالات" fontWeight={500} />
                        </Divider>
                    </Typography>
                    <Articles />
                </Grid>
            </Grid>
        </Container>
    );
};

export default HomePage;