import React from 'react';
import { Component } from 'react';
import './App.css';
import SearchBox from './components/SearchBox.js';

class App extends Component{


  render(){
    return (
      <div className="App">
        <h1 className="app-header">title</h1>
        <SearchBox />
      </div>
    );
  }

}
export default App;
