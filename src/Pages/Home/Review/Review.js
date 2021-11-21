import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Rating from 'react-rating';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { padding } from '@mui/system';

const Review = () => {
    const [reviews, setReviews] = useState([]);


    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    useEffect(() => {
        fetch('https://secure-fortress-47918.herokuapp.com/clientReview')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])

    return (
        <Container style={{ marginTop: '100px' }}>
            <h1>Client Review</h1>
            <Slider {...settings}>
                {
                    reviews.map(review => (
                        <>
                            <div>

                                <div style={{ backgroundColor: '#CCCCFF', marginRight: '10px', height: '100px' }}>
                                    <h3>{review.review}</h3>
                                    <p>
                                        Rating: {review.rating}
                                        <Rating
                                            initialRating={review.rating}
                                            style={{ color: 'yellow', fontSize: '15px' }}
                                            emptySymbol="far fa-star"
                                            fullSymbol="fas fa-star"
                                            readonly
                                        ></Rating>
                                    </p>
                                </div>
                            </div>


                        </>


                    ))
                }
            </Slider>
        </Container>
        // <Container sx={{ flexGrow: 1, mb: 8 }}>

        //     <Typography variant='h4' sx={{ mb: 5 }}>
        //         Client Review
        //     </Typography>
        //     <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, md: 12 }}>
        //         {reviews.map((review) => (
        //             <Grid item xs={12} md={4} key={review._id}>

        //                 <Paper sx={{ p: 3, minHeight: '150px', bgcolor: 'primary.main' }} elevation={3} >
        //                     <Typography style={{ color: 'white' }} variant='h5' gutterBottom component='div'>
        //                         {review.review}
        //                     </Typography>
        //                     <Typography style={{ color: 'white' }} variant='h6' gutterBottom component='div'>
        //                         Rating: {review.rating}
        //                         <Rating
        //                             initialRating={review.rating}
        //                             style={{ color: 'yellow', fontSize: '15px' }}
        //                             emptySymbol="far fa-star"
        //                             fullSymbol="fas fa-star"
        //                             readonly
        //                         ></Rating>
        //                     </Typography>
        //                 </Paper>
        //             </Grid>
        //         ))
        //         }
        //     </Grid >
        // </Container >


    );
};

export default Review;