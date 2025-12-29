import React from 'react';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import FeaturedPets from '../components/FeaturedPets';

const Home = () => {
    return (
        <>
            <Hero />
            <div id="featured">
                <FeaturedPets />
            </div>
            <Testimonials />
        </>
    );
};

export default Home;
