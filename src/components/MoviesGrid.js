import './MoviesGrid.css';
import React from 'react';
import MovieCard from './MovieCard';
import NextPageButton from './NextPageButton';

const MoviesGrid = ({ title, loadMore, movies, ...props }) => (
        <div className="movies">
            <h1 className="movieTitle">{title}</h1>
            <div className="moviesGrid">
                {
                    movies.moviesList.map(movie => 
                        <MovieCard 
                            key={movie.id.toString()}
                            movie={movie}
                        />    
                    )
                }
            </div>
            {
                loadMore &&
                <NextPageButton
                    page={movies.page}
                    total_pages={movies.total_pages}
                    loadMore={loadMore}
                />
            }
        </div>
)

export default MoviesGrid;