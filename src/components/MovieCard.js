import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';

const MovieCard = ({ movie, ...props }) => (
    <div className="movieCard">  
        { movie.poster_path 
          ? <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt=""/> 
          : <div className="noMoviePoster"><h1>{movie.title}</h1></div> 
        }
      <Link to={`movie/${movie.id}`}>  
        <div className="movieCardOverlay">
          <div className="overlayTitle"><h2>{movie.title}</h2></div>
          <div className="overlayRating"><h2>{movie.vote_average}<span> &#9733;</span> </h2></div>
          <div className="overlayPlot"><p>{movie.tagline}</p></div>
        </div>
      </Link>
      
    </div>
)
export default MovieCard;