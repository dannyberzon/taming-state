import React, { Component } from 'react';
import Counter from './Counter'
import Search from './Search'
import SearchableList from './searchable_list'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
        <Search />
        <SearchableList list={[{id: 1, name: 'bob'}, {id: 2, name: 'bill'}, {id: 3, name: 'frank'}, {id: 4, name: 'hello'}]} />
      </div>
    );
  }
}

export default App;
