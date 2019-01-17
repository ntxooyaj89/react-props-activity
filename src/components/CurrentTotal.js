import React, { Component } from 'react';


class CurrentTotal extends Component{
    render() {
        return(
            <div>
                <h2>Current Total</h2>
                {/* this is the props of total that we brought in from app.js calling it current total.  */}
                
                {/* because we call the props "currentTotal" in App.js we will
                 call it as this.props.CurrentTotal  */}
                <h3>{this.props.CurrentTotal}</h3>
                
               
            </div>
          
           
         
        )
    
    }
}


export default CurrentTotal;