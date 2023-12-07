import React, { Component } from 'react';
import Navbar from "./components/navbar.jsx"
import Film from "./components/film.jsx"
import SignIn from './components/auth/sign-in.jsx';
import SignUp from './components/auth/sign-up.jsx';

class App extends Component {
    state = { 
     } 
    render() { 
        return <React.Fragment>
            <Navbar />
            <SignIn/>
            <SignUp/>
            <Film />
        </React.Fragment>;
    }
}
export default App;