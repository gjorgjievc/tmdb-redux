import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './SearchBar.css';

const SearchBar = ({ history}) => {
    const [searchText, setSearchText ] = useState('');
    
    const handleChange = (e) => {
        e.preventDefault()
        setSearchText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/search?query=${encodeURIComponent(searchText)}`);
        setSearchText('');
    }
    return(

        <form onSubmit={handleSubmit}>
            <input 
                placeholder=' Search for a movie...'
                value={searchText}
                onChange={handleChange}
                onFocus={(e) => e.target.placeholder= ""}
                onBlur={(e) => e.target.placeholder= " Search for a movie..."}
            />
            
        </form>
        
    )
}

export default withRouter(SearchBar);