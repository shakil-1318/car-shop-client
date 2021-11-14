import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Rating from 'react-rating';

const Review = () => {
    const [reviews, setReviews] = useState([]);



    useEffect(() => {
        fetch('http://localhost:5000/clientReview')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])

    return (
        <Container sx={{ flexGrow: 1, mb: 8 }}>
            <Typography variant='h4' sx={{ mb: 5 }}>
                Client Review
            </Typography>
            <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, md: 12 }}>
                {reviews.map((review) => (
                    <Grid item xs={12} md={4} key={review._id}>
                        <Paper sx={{ p: 3, minHeight: '150px', bgcolor: 'primary.main' }} elevation={3} >
                            <Typography style={{ color: 'white' }} variant='h5' gutterBottom component='div'>
                                {review.review}
                            </Typography>
                            <Typography style={{ color: 'white' }} variant='h6' gutterBottom component='div'>
                                Rating: {review.rating}
                                <Rating
                                    initialRating={review.rating}
                                    style={{ color: 'yellow', fontSize: '15px' }}
                                    emptySymbol="far fa-star"
                                    fullSymbol="fas fa-star"
                                    readonly
                                ></Rating>
                            </Typography>
                        </Paper>
                    </Grid>
                ))
                }
            </Grid >
        </Container >
    );
};

export default Review;