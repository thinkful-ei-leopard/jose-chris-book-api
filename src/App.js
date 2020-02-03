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
    console.log(e.target.bookInfo.value)
    console.log(this.state)

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${e.target.bookInfo.value}`)
      .then(response => response.json())
      .then(response => this.setState({books: response.items}));
  }


      // <p> books.volumeInfo.descriprion </p>

  render() {
  return (
    <main className='App'>
      <Header />
      <Search search={this.fetchBooks} />
      <List />
    </main>
  );
  }
}

export default App;