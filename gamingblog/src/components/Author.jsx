import React from 'react';
import { useQuery } from '@apollo/client';
import Loading from './shared/Loading';
import { GET_AUTHOR } from '../graphql/queries';
import { useNavigate, useParams } from 'react-router-dom';
import { Avatar, Container, Grid, Typography, Button, Divider, Chip } from '@mui/material';
import ArticleCard from './Home/ArticleCard';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';


const Author = () => {

    const { slug } = useParams()
    const { loading, data, error } = useQuery(GET_AUTHOR, { variables: { slug } })
    const navigate = useNavigate()

    if (loading) return <Loading />
    if (error) return <h1>error</h1>

    const { author: { bio, image, name, posts } } = data

    return (
        <Container>
            <Grid container padding={1}>
                <Grid item xs={12} display="flex" justifyContent="end" alignItems="center">
                    <Button variant='text' endIcon={<ArrowBackIosRoundedIcon />} size='large' sx={{ paddingLeft: "0" }} onClick={() => navigate(-1)}>
                        <Typography variant='h6' fontWeight={600} ml={1}>
                            بازگشت
                        </Typography>
                    </Button>
                </Grid>
                <Grid item display="flex" flexDirection="column" alignItems="center" xs={12}>
                    <Avatar alt={name} src={image.url} sx={{ width: "200px", height: "200px" }} />
                    <Typography variant='h3'>
                        {name}
                    </Typography>
                </Grid>
                <Grid item mt={3} xs={12}>
                    <Typography variant='p' textAlign="justify" dangerouslySetInnerHTML={{ __html: bio.html }} />
                </Grid>
                {posts.length > 0 &&
                    <Grid item xs={12} mt={6}>
                        <Divider variant='middle'>
                            <Chip label={`مقالات ${name}`} sx={{'& .MuiChip-label': {fontSize: 18 , fontWeight:"bold"}}} />
                        </Divider>
                        <Grid container spacing={2} mt={0}>
                            {posts.map(post => <ArticleCard {...post} key={post.slug} />)}
                        </Grid>
                    </Grid>
                }
            </Grid>
        </Container>
    );
};

export default Author;