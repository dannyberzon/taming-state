import React, { Component } from 'react';
import Counter from './Counter'
import Search from './Search'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
        <Search />
      </div>
    );
  }
}

export default App;
