import React from 'react';
import { Grid, Avatar, Typography, Box, Divider } from '@mui/material';

const Comments = ({ name, createdAt, description }) => {
    return (
        <Grid item xs={12}>
            <Divider sx={{ marginTop: 2 }} />
            <Box display="flex" alignItems="center" mt={3}>
                <Avatar sizes='large' sx={{ width: 56, height: 56 }}>{name[0]}</Avatar>
                <Box mr={1}>
                    <Typography variant='h6' color="primary" >{name}</Typography>
                    <Typography variant='p' color="grey.500" fontSize={10} fontWeight={600}>{createdAt.split("T")[0]}</Typography>
                </Box>
            </Box>
            <Typography mt={2}>{description}</Typography>
        </Grid>
    );
};

export default Comments;