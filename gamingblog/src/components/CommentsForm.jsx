import React, { useState } from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { useMutation } from '@apollo/client';
import { SEND_COMMENT } from '../graphql/mutations';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CommentsForm = ({ slug }) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [description, setDescription] = useState("")

    const [sendComment, { loading, error }] = useMutation(SEND_COMMENT, {
        variables: { name, email, description, slug }, onCompleted: () => {
            toast.success("نظر شما با موفقیت ثبت شد")
            setName("")
            setEmail("")
            setDescription("")
        }, onError: (error) => {
            toast.error("مشکلی به وجود آمده مجدد تلاش کنید")
        }
    })

    const sendHandler = () => {
        if (name && email && description) {
            sendComment()
        } else { toast.error("فرم را کاملا پر کنید") }
    }

    return (
        <Grid item xs={12} sx={{ borderRadius: 5, boxShadow: "rgba(0,0,0,0.1) 0px 0px 7px" }} padding={3} my={3}>
            <Typography color="primary" variant="h6" mb={2}>
                نظر خود در مورد این مطلب را بنویسید:
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="نام" variant="outlined" value={name} onChange={e => setName(e.target.value)} disabled={loading} required />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="ایمیل" variant="outlined" value={email} onChange={e => setEmail(e.target.value)} disabled={loading} required />
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth label="متن نظر" variant="outlined" multiline minRows={3} value={description} onChange={e => setDescription(e.target.value)} disabled={loading} required />
                </Grid>
                <Grid item>
                    <Button variant="contained" disabled={loading} onClick={sendHandler}>
                        {loading ? "در حال ارسال..." : "ارسال"} </Button>
                </Grid>
            </Grid>
            <ToastContainer position='top-center' autoClose={2000} rtl />
        </Grid>
    );
};

export default CommentsForm;