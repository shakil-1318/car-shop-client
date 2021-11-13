import React from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useForm } from "react-hook-form";
import { makeStyles } from '@mui/styles';
import { Container, Typography } from '@mui/material';



const AddProduct = () => {

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
        console.log(data);
        axios.post('http://localhost:5000/addProduct', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Successfully Product addedded')
                    reset();
                }
            })
    }

    return (
        <Container sx={{ flexGrow: 1, p: 3 }}>
            <Typography variant='h4' sx={{ mb: 3 }}>
                Add Products
            </Typography>
            <Grid container >
                <Grid item xs={12} md={12}>
                    <Box className={formContainer}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                className={inputItem}
                                placeholder='Car Name'
                                {...register("name", { required: true })}
                            />
                            <textarea
                                className={inputItem}
                                placeholder='Description'
                                {...register("description")}
                            />
                            <input
                                className={inputItem}
                                placeholder='Price'
                                type="number" {...register("price")}
                            />
                            <input
                                className={inputItem}
                                placeholder='Image-Link'
                                {...register("img", { required: true })}
                            />
                            <input className={inputItem} type="submit" />
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AddProduct;