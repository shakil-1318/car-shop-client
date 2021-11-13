import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import './Footer.css'

const bgFooter = {
    backgroundColor: '#2d3e52',
    color: 'white'
}
const emailInput = {
    border: 'none',
    outline: 'none',
    borderRadius: '20px',
    padding: '10px 10px',
    marginBottom: '10px'
}
const buttonStyle = {
    padding: '10px 15px',
    border: 'none',
    fontWright: '600',
    borderRadius: '10px'
}

const Footer = () => {
    return (
        <Box style={bgFooter} sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Typography>
                            <h1>About Us</h1>
                            <p>Must explain to how all this mistaken idea of denouncing pleasure & praising pain was born and system.</p>
                            <p>There anyone who loves or pursues or desires to obtain pain itself, because it is pain, but because occasionally occur in whichgreat pleasure.</p>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <h1>Quick Link</h1>
                        <p>About Us</p>
                        <p>Latest Vehicles</p>
                        <p>Compare Car</p>
                        <p>Blog</p>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <h1>Newsletter</h1>
                        <input placeholder='email' style={emailInput} type="email" name="" id="" /> <br />
                        <button style={buttonStyle}>Subscribe</button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;