import React, { Component } from 'react';
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

class App extends Component {
    state = {  } 
    render() { 
        return (
            <div className='container'>
                <NavBar></NavBar>
            </div>
        );
    }
}
 
export default App;