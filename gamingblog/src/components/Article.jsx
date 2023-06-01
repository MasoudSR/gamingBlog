import React from 'react';
import { Grid, CardMedia, Card, CardContent, Typography, CardActionArea } from '@mui/material';

const Article = ({ title, slug, image, author }) => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card>
                <CardActionArea>
                    <CardMedia component="img" image={image.url} alt={title} />
                    <CardContent>
                        <Typography>
                            {title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default Article;