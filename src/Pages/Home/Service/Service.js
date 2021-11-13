import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Service = (props) => {
    const { name, img, description } = props.service
    return (
        <Grid item xs={12} md={4}>
            <Card sx={{ minWidth: 275 }}>
                <CardMedia
                    component="img"
                    style={{ width: 'auto', height: '100px', margin: '0 auto' }}
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {name}
                    </Typography>
                    <Typography variant="h5" component="div">

                    </Typography>
                    <Typography variant="body2">
                        {description}
                    </Typography>
                </CardContent>

            </Card>
        </Grid>
    );
};

export default Service;