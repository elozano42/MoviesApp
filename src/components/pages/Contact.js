import React from 'react';
import Navigation from '../Navigation';

const Contact = () => {
    return (
        <div>
            <Navigation />
            <h1 className="home">Contactez-nous</h1>
            <h2 className="home">Search Movie</h2>
            <p className="home">
                <ul>
                    <li>65 Avenue Jean-Jaurès</li>
                    <li>69007, Lyon</li>
                    <li>+33 6 09 10 37 84</li>
                </ul>
            </p>
        </div>
    );
};

export default Contact;