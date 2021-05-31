import * as types from '../actions/actionTypes';

const initialState = {
    recomendedMovies: [],
    genres: [],
    cast: [],
    crew: []
}

const movie = (movie = initialState, action) => {
    switch (action.type) {
        case types.GET_MOVIE_SUCCESS:
            return {
                genres: [...movie.genres, ...action.payload.data.genres], 
                ...movie, 
                ...action.payload.data 
            };
        case types.GET_RECOMMENDED_MOVIES_SUCCESS:
            return {
                ...movie,
                recomendedMovies: [...action.payload.data.results]
            }
        case types.GET_CREDITS_SUCCESS:
            return {
                ...movie,
                cast: [...action.payload.data.cast],
                crew: [...action.payload.data.crew]
            }
        case types.CLEAR_MOVIE:
            return { ...initialState }
        default:
            return movie
    } 
}
export default movie;