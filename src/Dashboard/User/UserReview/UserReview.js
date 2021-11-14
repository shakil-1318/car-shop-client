import { Button, Grid } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';


const UserReview = () => {
    const { user } = useAuth();


    const useStyle = makeStyles({
        inputItem: {
            width: '100%',
            padding: '10px',
            marginBottom: '10px'
        },
        formContainer: {
            display: 'flex',
            justifyContent: 'center'
        }
    })

    const { inputItem, formContainer } = useStyle()

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        alert('Thanks For Your rating');
        const email = user.email;
        data.email = email;
        const name = user.displayName;
        data.name = name;
        axios.post('http://localhost:5000/review', data)
        reset();
    }
    return (
        <div>
            <h1>Review Page</h1>
            <Grid container >
                <Grid item xs={12} md={12}>
                    <Box className={formContainer}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <textarea placeholder='Your Review' className={inputItem} {...register("review", { required: true })} />
                            <input placeholder='Your Rating' className={inputItem}  {...register("rating")} />
                            <Button className={inputItem} type="submit" variant="contained">Submit</Button>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default UserReview;