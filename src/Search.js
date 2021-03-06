import React from 'react';

export default function Search(props) {
    return (
        <form onSubmit={props.search} id="bookForm">
            <label htmlFor="searchInput">Search Books</label>
            <input type="text" id="searchInput" name="bookInfo"></input>
            <select name="bookType" form="bookForm" className="bookFilter">
                <option value="">no filter</option>
                <option value="ebooks">ebooks</option>
                <option value="free-ebooks">free ebooks</option>
                <option value="full">volume text</option>
                <option value="paid-ebooks">paid ebooks</option>
                <option value="partial">partial book</option>
            </select>
            <select name="printType" form="bookForm" className="printFilter">
                <option value="all">All</option>
                <option value="books">Books</option>
                <option value="magazines">Magazines</option>
            </select>
            <button type="submit">Search</button>
        </form>
    )
}
