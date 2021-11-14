import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';


const HomeCar = () => {
    const [services, setServices] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <>
            {services.length === 0 ?
                <CircularProgress color="success" />
                :
                <Container sx={{ flexGrow: 1, mb: 5 }}>
                    <Typography variant='h4' sx={{ m: 5 }}>
                        EXPLORE OUR SERVICES
                    </Typography>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {services.slice(0, 6).map((service) => (
                            <Grid item xs={12} md={4} key={service._id}>
                                <Card sx={{ minWidth: 275, minHeight: 450 }}>
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
                    </Grid>

                    <Link style={{ textDecoration: 'none' }} to='/allservices'>
                        <Button sx={{ m: 3 }} variant='contained'>ALL SERVICES</Button>
                    </Link>
                </Container>
            }
        </>
    );
};

export default HomeCar;