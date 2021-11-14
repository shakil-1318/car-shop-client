import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import HomeCar from '../Cars/HomeCar/HomeCar';
import Review from '../Review/Review';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <HomeCar></HomeCar>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;