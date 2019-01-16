import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import EnterNumber from './components/EnterNumber.js';
import CurrentTotal from './components/CurrentTotal';


class App extends Component {

  constructor(){
    super();
    this.state = {
      total: 0,
    }
  }

  increaseNum = (event) =>{
    console.log(event);
    
    this.setState({
      total: this.state.total
    })


  }

  decreaseNum = (event) =>{

    this.setState({
      total: this.state.total
    })
  }




  render() {
    return (
      <div className="App">
      
        <header className="App-header">
        <Header />
        </header>
        <EnterNumber increaseNum={this.increaseNum}/>
        <CurrentTotal total={this.state.total}/>
      </div>
    );
  }
}

export default App;
