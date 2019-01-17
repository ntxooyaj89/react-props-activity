import React, { Component } from 'react';


class EnterNumber extends Component{
    constructor(props){
        super(props);
        this.state ={
            inputNum: '',
            
           
    
        }
    }


    addNum = (event) => {

        this.setState({
            // event.target is anything that is enter into input field.
            // this will become a string
            inputNum: parseInt(event.target.value),
        });
    
    }

    increaseNum = (event) =>{
        console.log('this is IncreaseNum')

        this.props.increaseNum(this.state.inputNum);

    }

    decreaseNum = (event) =>{
        console.log('this is decreaseNum');
        this.props.decreaseNum(this.state.inputNum);
    }

   
    
    
   

   
  



    render(){
        return (

            <div>
                
                {/* onChange will trigger the this.addNum function  */}
                <input onChange = {this.addNum} type="number" placeholder="Enter Number"/>
                {/* onClick of a button is for indiviual item to react. */}
                {/* onSubmit is used for a form and is used to trigger many things to react. */}
                <button onClick={this.increaseNum}>Up</button>
                <button onClick={this.decreaseNum}>Down</button>
                <pre>{JSON.stringify(this.state)}</pre>
                
            </div>
            

        )
    }
}


export default EnterNumber;