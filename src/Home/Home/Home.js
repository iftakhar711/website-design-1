import React from 'react';
import Aboutus from '../Components/About/Aboutus';
import Footer from '../Components/Footer/Footer';
import Hero from '../Components/Hero/Hero';
import Nav from '../Components/Navbar/Nav';
import Product from '../Components/Product/Product';
import { Sliderrev } from '../Components/Slider/Sliderrev';
import Subscribe from '../Components/Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <Hero></Hero>
            <Product></Product>
            <Aboutus></Aboutus>
            <Sliderrev></Sliderrev>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;