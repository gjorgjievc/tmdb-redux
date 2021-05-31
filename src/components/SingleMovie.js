import React from 'react';
import './SingleMovie.css';
import Person from './Person';
import {listGenres, movieDuration } from './helpers';

import ReactLoading from "react-loading";

function SingleMovie ({ movie, genres, cast, crew, isLoaded }) {
    console.log('me viknaja single')
return (
    <div className="singleMoviePage">
        <div className="singleMovieDetails">
            
            <div className="singleMovieImage">
                {  movie.poster_path  
                    ? <img className="poster" src={`https://image.tmdb.org/t/p/original${ movie.poster_path}`} alt={ movie.title}/>
                    : <div className="noimage"> No poster for this  movie </div>
                }
            </div>
            <div className="singleMovieInfo">
                <div className="singleMovieTitle"><h1> { movie.title} <span>({new Date( movie.release_date).getFullYear()})</span> </h1></div>
                <div className="singleMovieGenres"><span>{listGenres(genres)}</span>|<span>Rating: {movie.vote_average}</span>|<span>{movieDuration(movie.runtime)}</span></div>
                {   
                    crew.filter(member => member.job === 'Director')
                        .map(member => <span><p>Director: {member.name}</p></span>)
                }
                <div className="singleMovieOverview"><p>{ movie.overview}</p></div>
                <div className="castContainer">
                    <h3>Stars</h3>
                    <div className="cast">
                    {
                        cast.filter(member => member.known_for_department === 'Acting')
                            .slice(0,4)
                            .map(member => <Person key={member.id} somebody={member} />)
                    }
                    </div>
                </div>
            </div>
        </div>
        
    </div>
)}
export default SingleMovie;