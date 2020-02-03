import React from 'react';
import Header from './Header'
import Search from './Search'
import List from './List'

class App extends React.Component {
  state ={
    books: []
  }

  // handleFormValue = () => {
  //   console.log()
  // }

  fetchBooks = (e) => {
    e.preventDefault();

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${e.target.bookInfo.value}${e.target.bookType.value}${e.target.printType.value}`)
      .then(response => response.json())
      .then(response => this.setState({books: response.items}));
  }


      // <p> books.volumeInfo.descriprion </p>

  render() {
    console.log(this.state)
  return (
    <main className='App'>
      <Header />
      <Search search={this.fetchBooks} />
      <List bookItems={this.state.books}/>
    </main>
  );
  }
}

export default App;