import React from 'react';

export default function Search(props) {
    return (
        <form onSubmit={props.search}>
            <label htmlFor="searchInput">Search Books</label>
            <input type="text" id="searchInput" name="bookInfo"></input>
            <button type="submit">Search</button>
        </form>
    )
}
