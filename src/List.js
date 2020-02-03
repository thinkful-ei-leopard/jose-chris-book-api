import React from 'react';

export default function List(props) {
const bookies = props.bookItems.map(book => <li><h2>{book.volumeInfo.title}</h2>
        <img src={book.volumeInfo.imageLinks.thumbnail} alt="bookimg" />
        <p>{book.volumeInfo.description}</p> <a href={book.saleInfo.buyLink}>Buy Now!</a> </li>)
    return (
        <ul>
            {bookies}
        </ul>
    )
}
