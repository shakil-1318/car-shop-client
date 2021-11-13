import React from 'react';
import Grid from '@mui/material/Grid';
import Service from '../Service/Service';
import high_car from '../../../images/high_car.png'
import middle_car from '../../../images/middle_car.png'
import low_car from '../../../images/low_car.png'
import { Container, Typography } from '@mui/material';

const services = [
    {
        name: "High Class Car",
        description: "MULTIPOINT SAFETY CHECKS OFFERS",
        img: high_car
    },
    {
        name: "Middle Class Car",
        description: "LARGEST CARS DEALER SHIP",
        img: middle_car
    },
    {
        name: "Low Class Car",
        description: "WE OFFERS LOWER CARS PRICES",
        img: low_car
    }
]


const Services = () => {
    return (
        <Container sx={{ flexGrow: 1, mt: 8, mb: 8 }}>
            <Typography variant='h5'>
                SERVICES CATEGORIES
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {services.map((service) => (

                    <Service
                        key={service.name}
                        service={service}
                    ></Service>

                ))}
            </Grid>
        </Container >
    );
};

export default Services;