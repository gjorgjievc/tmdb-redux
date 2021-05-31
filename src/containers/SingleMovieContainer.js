import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMovie, getRecommended, clearMovie, getCredits } from '../actions/movieActions';

import SingleMovie from '../components/SingleMovie';

const SingleMovieContainer = ({ movie, genres, ...props }) => {

    useEffect(() => {
        props.getMovie(props.match.params.id);   
        props.getRecommended(props.match.params.id)
        props.getCredits(props.match.params.id)

        return () => props.clearMovie()
        
        //eslint-disable-next-line
    },[props.match.params.id]);
    return (

        <SingleMovie movie={movie} 
            genres={movie.genres} 
            crew={movie.crew} 
            cast={movie.cast}
        />
    )
}

SingleMovieContainer.propTypes = {
    movie: PropTypes.object.isRequired,
    getMovie: PropTypes.func.isRequired,
    getRecommended: PropTypes.func.isRequired,
    getCredits: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    movie: state.movie

})

const mapDispatchToProps = (dispatch) => ({
    getMovie: movieId => dispatch(getMovie(movieId)),
    getRecommended: movieId => dispatch(getRecommended(movieId)),
    getCredits: movieId => dispatch(getCredits(movieId)),
    clearMovie: () => dispatch(clearMovie())
})
export default connect(mapStateToProps, mapDispatchToProps)(SingleMovieContainer)