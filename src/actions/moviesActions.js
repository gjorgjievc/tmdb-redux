import apiKey from '../config/tmovieDb';
import * as types from './actionTypes';
import axios from 'axios';

export function getMoviesSuccess(data){
    return { type: types.GET_MOVIES_SUCCESS, payload: data}
}

export function getPopularMovies(page = 1) {
    return function(dispatch) {
        return axios
            .get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`)
            .then(data => dispatch({ type: types.GET_MOVIES_SUCCESS, payload: data}))
            .catch(error => {
                throw error;
            })
    }
    
}

export function searchMovies(query, page = 1) {
    return function(dispatch) {
        return axios
            .get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=${page}`)
            .then(data => dispatch({ type: types.GET_MOVIES_SUCCESS, payload: data}))
            .catch(error => {
               throw error;
            })
            
    }
}

export function clearMovies(){
    return function(dispatch) { 
        dispatch({ type: types.CLEAR_MOVIES })
    }
}