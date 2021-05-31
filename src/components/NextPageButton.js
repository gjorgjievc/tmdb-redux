import './NextPageButton.css';
import React from 'react';

const NextPageButton = ({ page, total_pages, loadMore }) => {

    if (page < total_pages) {
        return (
            <div className="loadMoreButton">
                <button
                    label="Load more movies" 
                    onClick={loadMore}> 
                    Load more movies
                </button>
                </div>
        )
    }

    return <h2 className="noMoreMovies">No more movies for this query.</h2>
}
export default NextPageButton;