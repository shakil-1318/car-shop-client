import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Navigation from '../../../Shared/Navigation/Navigation';
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import useAuth from '../../../../hooks/useAuth';
import Aos from 'aos';
import 'aos/dist/aos.css';



const AllCar = () => {
    const [services, setServices] = useState([]);
    const { isLoading } = useAuth();


    useEffect(() => {
        fetch('https://secure-fortress-47918.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])


    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (
        <>
            <Navigation></Navigation>
            {services.length === 0 ?
                <CircularProgress />

                :
                <Container sx={{ flexGrow: 1, mb: 8 }}>
                    <Typography variant='h4' sx={{ mt: 15, mb: 5 }}>
                        EXPLORE OUR ALL SERVICES
                    </Typography>
                    {!isLoading && <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {services.map((service) => (
                            <Grid item xs={12} md={4} key={service._id}>
                                <Card data-aos='zoom-in' sx={{ minWidth: 275, minHeight: 450 }}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={service.img}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography variant="h5" gutterBottom>
                                            {service.name}
                                        </Typography>
                                        <Typography variant="h5" gutterBottom>
                                            Price: $ {service.price}
                                        </Typography>
                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" component="div">
                                            {service.description}
                                        </Typography>
                                    </CardContent>
                                    <Link style={{ textDecoration: 'none' }} to={`/booking/${service._id}`}>
                                        <Button variant='contained'>Buy Now</Button>
                                    </Link>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>}
                    {
                        isLoading && <CircularProgress></CircularProgress>
                    }

                </Container>
            }
        </>
    );
};

export default AllCar;