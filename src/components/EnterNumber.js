import React, { Component } from 'react';


class EnterNumber extends Component{
    constructor(){
        super();
        this.state ={
            inputNum: '',
            
           
    
        }
    }


    addNum = (event) => {

        this.setState({
            // event.target is the input field
            inputNum: event.target.value,
        });
    
    }

    increaseNum = (event) =>{
        console.log('this is IncreaseNum')
        this.props.increaseNum(this.state.inputNum);

    }

    // decreaseNum = (event) =>{
    //     console.log('this is decreaseNum');
    //     this.props.decreaseNum(this.state.inputNum);
    // }

   
    
    
   

   
  



    render(){
        return (

            <div>
                <input onChange = {this.addNum} type="number" placeholder="Enter Number"/>
                <button onClick={this.increaseNum}>Up</button>
                <button onClick={this.decreaseNum}>Down</button>
                <pre>{JSON.stringify(this.state)}</pre>
                
            </div>
            

        )
    }
}


export default EnterNumber;