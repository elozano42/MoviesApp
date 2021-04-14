import React from 'react';
import Navigation from '../Navigation';
import Carousel from './Carousel';


const Home = () => {
    return (
        <div>
            <Navigation />
            <h1 className="home">Bienvenue sur Search Movie</h1>
            <center>
                <img className="image" src="https://zupimages.net/up/21/12/8prk.png" alt="" />
            </center>
            <Carousel />
        </div>
    );
};

export default Home;