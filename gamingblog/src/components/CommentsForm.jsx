import React from 'react';
import { Grid, TextField, Typography } from '@mui/material';

const CommentsForm = () => {
    return (
        <Grid item xs={12} sx={{ borderRadius: 5, boxShadow: "rgba(0,0,0,0.1) 0px 0px 7px" }} padding={3} margin={3}>
            <Typography color="primary" variant="h6" mb={2}>
                نظر خود در مورد این مطلب را بنویسید:
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="نام" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="ایمیل" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth label="متن نظر" variant="outlined" multiline minRows={3} />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default CommentsForm;