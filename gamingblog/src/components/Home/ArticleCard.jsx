import React from 'react';
import { Grid, CardMedia, Card, CardContent, Typography, CardActionArea, Divider } from '@mui/material';
import { Link } from 'react-router-dom';

const ArticleCard = ({ title, slug, image, author }) => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: 5, boxShadow: "rgba(0,0,0,0.1) 0px 5px 7px" }} >
                <CardActionArea>
                    <Link to={`/articles/${slug}`} style={{ textDecoration: "none" }}>
                        <CardMedia component="img" image={image.url} alt={title} />
                        <CardContent>
                            <Typography gutterBottom variant='h5' component="div" color="text.primary">
                                {title}
                            </Typography>
                            {author && <><Divider />
                                <Typography variant='body2' color="text.secondary" marginTop={1}>
                                    نویسنده: {author.name}
                                </Typography> </>}
                        </CardContent>
                    </Link>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default ArticleCard;