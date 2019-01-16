import React, { Component } from 'react';


class EnterNumber extends Component{
    constructor(){
        super();
        this.state ={
            inputNum: '',
        }
    }


    addNum = (event) =>{

        this.setState({
            // event.target is the input field
            inputNum: event.target.value
        });
    }



  



    render(){
        return (

            <div>
                <input onChange = {this.addNum} type="number" placeholder="Enter Number"/>
                <button onChange={this.addNum}>Up</button>
                <button onChange={this.addNum}>Down</button>
                
            </div>
            

        )
    }
}


export default EnterNumber;