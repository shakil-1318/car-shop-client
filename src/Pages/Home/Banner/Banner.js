import React from 'react';
import banner from '../../../images/silver-sedan-car.jpg'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: '400',
    marginTop: '20px',
    marginBottom: '40px'
}

const Banner = () => {
    return (
        <Container sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography variant='h3'>
                            Mercedes-AMG
                        </Typography>
                        <Typography variant='h6'>
                            We all have a dream car some wish for a classy one where as others dream of having a simple old school one.If is often that you may see someone in a car
                        </Typography>
                        <Typography>
                            <Button variant='contained'>Buy Now</Button>
                        </Typography>
                    </Box>
                </Grid>

                <Grid style={verticalCenter} item xs={12} md={6}>
                    <img width='100%' src={banner} alt=''></img>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;