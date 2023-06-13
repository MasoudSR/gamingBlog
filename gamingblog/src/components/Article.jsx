import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ARTICLE } from '../graphql/queries';
import Loading from './shared/Loading';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Container, Grid, Typography, Avatar, Button, Box } from '@mui/material';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import CommentsForm from './CommentsForm';
import Comments from './Comments';

const Article = () => {

    const { slug } = useParams()
    const { loading, data, error } = useQuery(GET_ARTICLE, { variables: { slug } })
    const navigate = useNavigate()

    if (loading) return <Loading />
    if (error) return <h1>error</h1>

    const { post: { author, content, image, title, comments } } = data

    return (
        <Container>
            <Grid container padding={1}>
                <Grid item xs={12} display="flex" justifyContent="space-between" alignItems="end">
                    <Typography component="h2" variant='h3' fontWeight={500} xs="12" mt={4}>
                        {title}
                    </Typography>
                    <Button variant='text' endIcon={<ArrowBackIosRoundedIcon />} size='large' sx={{ padding: "0" }} onClick={() => navigate(-1)}>
                        <Typography variant='h6' fontWeight={600} ml={1}>
                            بازگشت
                        </Typography>
                    </Button>
                </Grid>
                <Grid item mt={4} xs={12}>
                    <img src={image.url} width="100%" style={{ borderRadius: "20px" }} />
                    <Typography variant='p' textAlign="justify" mt={4} dangerouslySetInnerHTML={{ __html: content.html }} />
                </Grid>
                <Grid item xs={12} mt={3} display="flex" alignItems="center" justifyContent="end">
                    <Typography ml={1} color="grey.500">
                        نویسنده:
                    </Typography>
                    <Link to={`/authors/${author.slug}`} style={{ textDecoration: "none", color: "grey.500" }}>
                        <Box display="flex" alignItems="center">
                            <Typography ml={1} color="grey.700">{author.name}</Typography>
                            <Avatar alt={author.slug} src={author.image.url} />
                        </Box>
                    </Link>
                </Grid>
                <CommentsForm slug={slug} />
                {comments.length > 0 &&
                    <Grid container sx={{ borderRadius: 5, boxShadow: "rgba(0,0,0,0.1) 0px 0px 7px" }} padding={3} my={2}>
                        <Typography variant='h5' color="primary" fontWeight="600">
                            نظرات:
                        </Typography>
                        {comments.map(comment => <Comments {...comment} key={comment.id} />)}
                    </Grid>
                }
            </Grid>
        </Container>
    );
};

export default Article;