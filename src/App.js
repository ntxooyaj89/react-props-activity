import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import EnterNumber from './components/EnterNumber.js'


class App extends Component {




  render() {
    return (
      <div className="App">
      
        <header className="App-header">
        <Header />
        </header>
        <EnterNumber />
      </div>
    );
  }
}

export default App;
