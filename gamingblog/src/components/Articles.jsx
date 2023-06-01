import React from 'react';
import { useQuery } from '@apollo/client';
import { Grid } from '@mui/material';
import { GET_ARTICLES } from '../graphql/queries';
import Article from './Article';

const Articles = () => {
    const { loading, data, error } = useQuery(GET_ARTICLES)

    if (loading) return <h1>loading</h1>
    if (error) return <h1>error</h1>

    { console.log(data) }
    return (
        <Grid container spacing={2}>
            {data.posts.map(post => <Article {...post} key={post.slug} />)}
        </Grid>
    );
};

export default Articles;