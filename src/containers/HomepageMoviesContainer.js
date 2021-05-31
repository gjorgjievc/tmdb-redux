/* eslint-disable react-hooks/exhaustive-deps */
import React, {  useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import  {getPopularMovies, clearMovies} from '../actions/moviesActions';
import MoviesGrid from '../components/MoviesGrid';


const HomepageMoviesContainer = ({ getPopularMovies, clearMovies, ...props }) => {
    useEffect(() => {
        getPopularMovies()
        return () => clearMovies() 
    },[])

    const loadMore = () => {
        const { page, total_pages } = props.movies;
        
        if (page < total_pages) {
            const nextPage = props.movies.page + 1;
            getPopularMovies(nextPage)
            console.log(nextPage)
        }
    }
    
    return(
        
        <MoviesGrid 
            movies={props.movies}
            loadMore={loadMore}
            title="Latest movies"
        />
    )

}

HomepageMoviesContainer.propTypes = {
    movies: PropTypes.object.isRequired,
    getPopularMovies: PropTypes.func.isRequired,
    clearMovies: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    movies: state.movies
})
const mapDispatchToProps = dispatch => ({
    getPopularMovies: nextPage => dispatch(getPopularMovies(nextPage)),
    clearMovies: () => dispatch(clearMovies())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomepageMoviesContainer);