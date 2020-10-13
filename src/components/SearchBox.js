import React from 'react';
import { useState } from 'react';


function SearchBox({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleSubmitButtonClick = (e) => {
        e.preventDefault();
        console.log("will call onSearch fn which we received from props");
        onSearch(query)
        setQuery('');
    }

    return (
        <form className="form" onSubmit={handleSubmitButtonClick}>
            <input className="input"
                type="text"
                placeholder="📽️ Search a Movie.."
                name="query"
                value={query}
                onChange={(e) =>setQuery(e.target.value)}
            />
        </form>
    )
}


export default SearchBox;
