import React from 'react';
import Header from './Header'
import Search from './Search'
import List from './List'

class App extends React.Component {
  state ={
    books: {}
  }

  fetchBooks = () => {
    fetch('https://www.googleapis.com/books/v1/volumes?q=henry')
      .then(response => response.json())
      .then(response => this.setState({response}));
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