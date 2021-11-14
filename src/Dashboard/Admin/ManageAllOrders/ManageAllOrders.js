import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CircularProgress, Container, TextField } from '@mui/material';



const ManageAllOrders = () => {

    const [services, setServices] = useState([]);
    const [status, setStatus] = useState('');

    const handleStatus = (e) => {
        setStatus(e.target.value);
    }

    useEffect(() => {
        fetch('https://secure-fortress-47918.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    // handleApproved
    const handleUpdate = (id) => {
        fetch(`https://secure-fortress-47918.herokuapp.com/updateStatus/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status }),
        });

        alert('approved successfully');
    };

    // handle delete
    const handleDelete = (id) => {
        const procceed = window.confirm('are you sure want to delete?');

        if (procceed) {
            fetch(`https://secure-fortress-47918.herokuapp.com/delete/${id}`, {
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
                <CircularProgress color="success" />
                :
                <Container sx={{ flexGrow: 1 }}>
                    <Typography variant='h4' sx={{ m: 5 }}>
                        Manage All Orders
                    </Typography>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {services.map((service) => (
                            <Grid item xs={12} md={4} key={service._id}>
                                <Card sx={{ minHeight: 450 }}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={service?.image}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {service?.name}
                                        </Typography>
                                        <Typography variant="h6" color="text.secondary">
                                            Price: ${service?.price}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {service?.description}
                                        </Typography>
                                    </CardContent>
                                    <TextField
                                        onChange={handleStatus}
                                        defaultValue={service?.status}
                                        variant="outlined" />
                                    <CardActions>
                                        <Button style={{ margin: '0 auto' }} onClick={() => handleUpdate(service._id)} variant='contained'>Update</Button>
                                        <Button sx={{ bgcolor: 'error.main' }} style={{ margin: '0 auto' }} onClick={() => handleDelete(service._id)} variant='contained'>Delete</Button>
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

export default ManageAllOrders;