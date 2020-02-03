import React from 'react';

export default function Search(props) {
    return (
        <form>
            <label htmlFor="searchInput">Search Books</label>
            <input type="text" id="searchInput"></input>
            <button onClick={props.search}>Search</button>
        </form>
    )
}
