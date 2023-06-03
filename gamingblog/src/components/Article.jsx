import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ARTICLE } from '../graphql/queries';
import Loading from './shared/Loading';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Grid, Typography, Avatar, Button } from '@mui/material';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

const Article = () => {

    const { slug } = useParams()
    const { loading, data, error } = useQuery(GET_ARTICLE, { variables: { slug } })
    const navigate = useNavigate()

    if (loading) return <Loading />
    if (error) return <h1>error</h1>

    const { post: { author, content, image, title } } = data
    console.log(author)

    return (
        <Container>
            <Grid container padding={3}>
                <Grid item xs={12} display="flex" justifyContent="space-between" alignItems="center">
                    <Typography component="h2" variant='h3' fontWeight={500} xs="12" mt={4}>
                        {title}
                    </Typography>
                    <Button variant='text' endIcon={<ArrowBackIosRoundedIcon />} size='large' sx={{ paddingLeft: "0" }} onClick={() => navigate(-1)}>
                        <Typography variant='h6' fontWeight={600} ml={1}>
                            بازگشت
                        </Typography>
                    </Button>
                </Grid>
                <Grid item xs={12} mt={3} display="flex" alignItems="center">
                    <Avatar alt={author.slug} src={author.image.url} sx={{ width: "80px", height: "80px" }} />
                    <Typography variant='h6' marginRight={2}>{author.name}</Typography>
                </Grid>
                <Grid item mt={4} xs={12}>
                    <img src={image.url} width="100%" style={{ borderRadius: "20px" }} />
                    <Typography mt={4} dangerouslySetInnerHTML={{ __html: content.html }} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Article;