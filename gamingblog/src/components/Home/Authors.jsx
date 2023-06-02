import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_AUTHORS } from '../../graphql/queries';
import { Grid, Card, CardActionArea, Avatar, CardMedia, Typography, Divider } from '@mui/material';
import { Link } from 'react-router-dom';

const Authors = () => {
    const { loading, data, error } = useQuery(GET_AUTHORS)

    if (loading) return <h1>loading</h1>
    if (error) return <h1>error</h1>

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Card sx={{ borderRadius: 5, boxShadow: "rgba(0,0,0,0.1) 0px 5px 5px", border: 1, borderColor: 'grey.200' }}>
                    {data.authors.map((author, index) =>
                        <React.Fragment key={author.slug}>
                            <Link to={`authors/${author.slug}`} style={{ textDecoration: "none" }}>
                                <CardActionArea sx={{ padding: "10px", display: "flex", borderRadius: 0 }}>
                                    <Avatar aria-label="recipe">
                                        <CardMedia component="img" image={author.image.url} alt={author.name} />
                                    </Avatar>
                                    <Typography flex={1} marginRight={1} color="text.primary">
                                        {author.name}
                                    </Typography>
                                </CardActionArea>
                            </Link>
                            {index < data.authors.length - 1 && <Divider />}
                        </React.Fragment>
                    )}
                </Card>
            </Grid>
        </Grid>

    );
};

export default Authors;