import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import EnterNumber from './components/EnterNumber.js';
// if you import a file into the file your using... You are at the parent file.
import CurrentTotal from './components/CurrentTotal';
import History from './components/History'


class App extends Component {

  constructor(){
    super();
    this.state = {
      total: 0,
      history: [{value: 1} , {value: 2}],
    }
  }

  increaseNum = (inputNum) =>{
    console.log(inputNum);
    
    
   this.setState({

    total: this.state.total + inputNum,

      
    
  })
    console.log('this is result', this.state);
    


  }

  decreaseNum = (event) =>{

    this.setState({

      total: this.state.total - event,
      
    })

   
  }

  addToHistory = (itemToAdd) => {
    this.setState({
      history: [...this.state.history, itemToAdd]
    })

  }




  render() {
    return (
      <div className="App">
      
        <header className="App-header">
        <Header />
        </header>
        
        {/* below will pass the increaseNum to the files that need it. */}
        <EnterNumber increaseNum={this.increaseNum} decreaseNum={this.decreaseNum}/>
        <br/>
        {/* below we are pass CurrentTotal via props. */}
        {/* state will have to match... but the name dosen't have to. 
         But the name we create here will need to be called in CurrentTotal file*/}
        <CurrentTotal addToHistory={this.addToHistory} CurrentTotal={this.state.total}/>
        <History history={this.state.history}/>
        
      </div>
    );
  }
}

export default App;
