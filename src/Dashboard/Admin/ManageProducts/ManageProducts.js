import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Card, CardActions, CardContent, CardMedia, CircularProgress, Container, Grid } from '@mui/material';
import { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/manageServices')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])


    // handle delete
    const handleDelete = (id) => {
        const procceed = window.confirm('are you sure want to delete?');

        if (procceed) {
            fetch(`http://localhost:5000/deleteService/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount) {
                        alert('Delete')
                        const remaining = services.filter(service => service._id !== id)
                        setServices(remaining)
                    }
                })
        }

    }



    return (
        <>
            {services.length === 0 ?
                <CircularProgress />
                :
                <Container sx={{ flexGrow: 1 }}>
                    <Typography variant='h4' sx={{ mt: 8, mb: 5 }}>
                        Manage All Products
                    </Typography>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {services.map((service) => (
                            <Grid item xs={12} md={4} key={service._id}>
                                <Card sx={{ maxWidth: 345, minHeight: 450 }}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={service?.img}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {service?.name}
                                        </Typography>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Price: ${service?.price}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {service?.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>

                                        <Button sx={{ bgcolor: 'error.main' }} style={{ margin: '0 auto' }} onClick={() => handleDelete(service?._id)} variant='contained'>Delete</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            }
        </>
    );
};

export default ManageProducts;