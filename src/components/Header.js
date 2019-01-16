// the world Component will have to be capatailized...
import React, { Component } from 'react';


// component is a class that we will extends (take advantage of the react code and add our code into it)
class Header extends Component {
    render() {
        // return something to render
        return (
            // the header is a closing tag so it will work.
            <header className="App-header">
                <h1>React Props!</h1>
            </header>

        );
    }

}


export default Header;