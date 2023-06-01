import { useQuery } from '@apollo/client';
import { Grid, Card, CardActionArea, Avatar, CardMedia, Typography, Divider } from '@mui/material';
import React from 'react';
import { GET_AUTHORS } from '../graphql/queries';

const Authors = () => {
    const { loading, data, error } = useQuery(GET_AUTHORS)
    console.log(data)

    if (loading) return <h1>loading</h1>
    if (error) return <h1>error</h1>

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Card sx={{ borderRadius: 5, boxShadow: "rgba(0,0,0,0.1) 0px 5px 5px", border: 1, borderColor: 'grey.200' }}>
                    {data.authors.map((author, index) =>
                        <React.Fragment key={author.slug}>
                            <CardActionArea sx={{ padding: "10px", display: "flex" }}>
                                <Avatar aria-label="recipe">
                                    <CardMedia component="img" image={author.image.url} alt={author.name} />
                                </Avatar>
                                <Typography flex={1} marginRight={1}>
                                    {author.name}
                                </Typography>
                            </CardActionArea>
                            {console.log(index.length)}
                            {console.log(index)}
                            {index < data.authors.length - 1 && <Divider />}
                        </React.Fragment>
                    )}
                </Card>
            </Grid>
        </Grid>

    );
};

export default Authors;