import React from 'react';
import Slider from './Shared/Slider';
import PopularProduct from './Shared/PopularProduct';
import TopCategory from './Shared/TopCategory';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopularProduct></PopularProduct>
            <TopCategory></TopCategory>
        </div>
    );
};

export default Home;