import * as types from '../actions/actionTypes';

const initialState = {
    page: '',
    moviesList: [],
    total_pages: '',
    total_results: '',
    poster: ''
}

const movies = (movies = initialState, action) => {
  
  switch(action.type) {
    case types.GET_MOVIES_SUCCESS:
      return {
          page: action.payload.data.page,
          moviesList: [
              ...movies.moviesList,
              ...action.payload.data.results
          ],
          total_pages: action.payload.data.total_pages,
          total_results: action.payload.data.total_results,
          poster: action.payload.data
      };
    case types.CLEAR_MOVIES:
      return { ...initialState };
    default:
      return movies
    }	  						  
}                				            
export default movies;