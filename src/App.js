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
    
    let total = +1;
    
   this.setState({

    event: this.state.total, total

      
    
  })
    console.log('this is result', this.state);


  }

  decreaseNum = (event) =>{

    this.setState({
      
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
