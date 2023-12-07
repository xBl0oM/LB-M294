import React, { Component } from 'react';
import Navbar from "./components/navbar.jsx"
import Film from "./components/film.jsx"
class App extends Component {
    state = { 
     } 
    render() { 
        return <React.Fragment>
            <Navbar />
            <Film />
        </React.Fragment>;
    }
}
export default App;