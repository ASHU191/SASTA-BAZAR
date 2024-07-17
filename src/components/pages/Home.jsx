import React from "react";
import Navbar from '../../components/navbar/Navbar';
import Hero from '../../components/hero/Hero'
import Product from '../../components/products/Product';
import Service from '../../components/services/Service';
import Footer from '../../components/footer/Footer';

const Home = () => {
    return (
        <div>
            <Hero />
            <Product />
            <Service />
        </div>
    );
};

export default Home;
