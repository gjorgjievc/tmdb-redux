import apiKey from '../config/tmovieDb';
import * as types from './actionTypes';
import axios from 'axios';

export function getMovie(movieId) {
    return function(dispatch) {
        axios
            .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`)
            .then(data => dispatch({
                type: types.GET_MOVIE_SUCCESS, payload: data
            }))
            .catch(error => {
                throw error;
            })
    }
}
export function getRecommended(movieId) {
    return function(dispatch) {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${apiKey}&language=en-US&page=1`)
            .then(data => dispatch({
                type: types.GET_RECOMMENDED_MOVIES_SUCCESS, payload: data
            }))
            .catch(error => {
                console.log(error)
                throw error;
            })
    }
}
export function getCredits(movieId) {
    return function(dispatch) {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`)
            .then(data => dispatch({
                type: types.GET_CREDITS_SUCCESS, payload: data
            }))
            .catch(error => {
                console.log(error)
                throw error;

            })
    }
}

export function clearMovie() {
    return function(dispatch){
        dispatch({ type: 'CLEAR_MOVIE' });
    }
  };