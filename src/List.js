import React from 'react';

export default function List(props) {
function checkForImage(src) {
    if(src === undefined) {
        return  <img src="https://cdn11.bigcommerce.com/s-nq6l4syi/images/stencil/1280x1280/products/16517/21038/71882-1024__10025.1516616292.jpg?c=2?imbypass=on" alt="bookimg" />
    } 

    return <img src={src.thumbnail} alt="bookimg" />
}

const bookies = props.bookItems.map(book => <li><h2>{book.volumeInfo.title}</h2>
        {checkForImage(book.volumeInfo.imageLinks)}
        <p>{book.volumeInfo.description}</p> <a href={book.saleInfo.buyLink}>Buy Now!</a> </li>)

    return (
        <ul>
            {bookies}
        </ul>
    )
}
