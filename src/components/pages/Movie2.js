import React from 'react';

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
    if (vote >= 8) {
        return 'green'
    } else if (vote >= 6) {
        return 'orange'
    } else {
        return 'red';
    }
}

const Movie2 = ({ title, poster_path, overview, vote_average }) => {
    return (
        <div className="movie">
            <img src={poster_path ? (IMG_API + poster_path) : 'https://zupimages.net/up/21/09/zeof.jpg'} alt={title} />
            <div className="movie-info">
                <h3>{title}</h3>
                <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
            </div>

            <div className="movie-over">
                <h2>Description: </h2>
                <p>{overview}</p>
            </div>
        </div>
    );
};

export default Movie2;