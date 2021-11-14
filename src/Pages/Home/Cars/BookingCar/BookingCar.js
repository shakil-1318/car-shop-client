import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Navigation from '../../../Shared/Navigation/Navigation';
import { Container } from '@mui/material';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';

const BookingCar = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({})
    const { user } = useAuth();



    useEffect(() => {
        fetch(`https://secure-fortress-47918.herokuapp.com/singleService/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [serviceId])

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        alert('Order Addeded');
        const email = user.email;
        data.email = email;
        data.status = 'pending';

        axios.post('https://secure-fortress-47918.herokuapp.com/confirmOrder', data);
        reset();

    }

    return (
        <>
            <Navigation></Navigation>
            <Container sx={{ flexGrow: 1 }}>
                <Typography variant="h3" sx={{ mt: 15 }}>
                    Place Order
                </Typography>
                <Grid container spacing={2} sx={{ marginTop: 3 }}>
                    <Grid item xs={12} md={6}>
                        <Card sx={{ maxWidth: 345, minHeight: 450 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={service.img}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {service.name}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="div">
                                    Price: ${service.price}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="div">
                                    Color: {service.color}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {service.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input
                                {...register("name")}
                                defaultValue={service?.name}
                                className="p-2 m-2 w-100"
                                style={{ width: '75%', padding: '10px', marginTop: '10px' }}
                            />

                            <br />

                            <input
                                {...register("date")}

                                type="date"
                                className="p-2 m-2 w-100"
                                style={{ width: '75%', padding: '10px', marginTop: '10px' }}
                            />
                            <br />
                            <textarea
                                {...register("description")}
                                defaultValue={service.description}
                                className="p-2 m-2"
                                style={{ width: '75%', padding: '10px', marginTop: '10px' }}
                            />
                            <br />

                            <input
                                {...register("price", { required: true })}
                                defaultValue={service?.price}

                                style={{ width: '75%', padding: '10px', marginTop: '10px' }}
                            />
                            <br />
                            <input
                                {...register("image", { required: true })}
                                defaultValue={service?.img}
                                className="p-2 m-2"
                                style={{ width: '75%', padding: '10px', marginTop: '10px', marginBottom: '10px' }}
                            />
                            <br />

                            {errors.exampleRequired && <span>This field is required</span>}


                            <Button variant='contained'
                                sx={{ mb: 5 }}
                                type="submit">Submit</Button>
                        </form>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default BookingCar;