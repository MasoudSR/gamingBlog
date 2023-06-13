import React from 'react';
import { useQuery } from '@apollo/client';
import { Grid } from '@mui/material';
import { GET_ARTICLES } from '../../graphql/queries';
import ArticleCard from './ArticleCard';
import Loading from '../shared/Loading';

const Articles = () => {
    const { loading, data, error } = useQuery(GET_ARTICLES)

    if (loading) return <Loading />
    if (error) return <h1>لطفا مجدد تلاش کنید</h1>

    return (
        <Grid container spacing={2} mt={1}>
            {data.posts.map(post => <ArticleCard {...post} key={post.slug} />)}
        </Grid>
    );
};

export default Articles;