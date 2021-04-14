import React from 'react';
import Navigation from '../Navigation';


const Login = () => {
    return (
        <div>
            <Navigation />
            <h1>La team</h1>
            <div className="movie-container">
                <div className="movie">
                    <img className="image" src="https://zupimages.net/up/21/12/f3cz.jpg" alt="" />

                    <div className="movie-over">
                        <h2>Bio: </h2>
                        <p>Elisa, 26 ans, développeuse web</p>
                    </div>
                </div>


                <div className="movie">
                    <img className="image" src="https://zupimages.net/up/21/12/u2bp.jpg" alt="" />
                    <div className="movie-over">
                        <h2>Bio: </h2>
                        <p>Mirabelle, 25 ans, Graphiste</p>
                    </div>
                </div>

                <div className="movie">
                    <img className="image" src="https://zupimages.net/up/21/12/581w.jpg" alt="" />
                    <div className="movie-over">
                        <h2>Bio: </h2>
                        <p>Alice, 26 ans, Web marketing</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;