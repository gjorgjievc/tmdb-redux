import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { searchMovies, clearMovies } from '../actions/moviesActions';
import MoviesGrid from '../components/MoviesGrid';

const SearchMoviesContainer = ({ ...props }) => {
    
    const dispatch = useDispatch();
    useEffect(() => {
        const params = new URLSearchParams(props.history.location.search)
        const query = params.get('query');
        dispatch(searchMovies(query))
        
        return () => dispatch(clearMovies())
        //eslint-disable-next-line
    },[dispatch, props.history.location.search])
    
    
    const loadMore = () => {
        const { page, total_pages } = props.movies;
        const params = new URLSearchParams(props.history.location.search)
        const query = params.get('query');
        
        if (page < total_pages) {
            const nextPage = props.movies.page + 1;
            dispatch(searchMovies(query, nextPage))
            
        }
    }

    return(
        <MoviesGrid 
            movies={props.movies}
            loadMore={loadMore}
            title="Found movies"
        />
    )
}

const mapStateToProps = (state, ownProps) => ({
    movies: state.movies,
    ownProps
})

export default connect(mapStateToProps, null)(SearchMoviesContainer)

