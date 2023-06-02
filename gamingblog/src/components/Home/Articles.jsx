import React from 'react';
import { useQuery } from '@apollo/client';
import { Grid } from '@mui/material';
import { GET_ARTICLES } from '../../graphql/queries';
import ArticleCard from './ArticleCard';

const Articles = () => {
    const { loading, data, error } = useQuery(GET_ARTICLES)

    if (loading) return <h1>loading</h1>
    if (error) return <h1>error</h1>

    return (
        <Grid container spacing={2}>
            {data.posts.map(post => <ArticleCard {...post} key={post.slug} />)}
        </Grid>
    );
};

export default Articles;