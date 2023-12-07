import React, { Component } from 'react';
import Navbar from "./components/navbar.jsx";
import SignIn from './components/auth/sign-in.jsx';
import Footer from './components/footer.jsx';
import SignUp from './components/auth/sign-up.jsx';
import Film from './components/film.jsx'

class App extends Component {
    state = {
        showNavbar: false,
        showSignIn: true,
        showSignUp: true,
        showFilm: false,
        isSignedIn: false,
    };

    handleSignIn = () => {
        this.setState({
            showNavbar: true,
            showSignIn: false,
            showSignUp: false,
            showFilm: true,
            isSignedIn: true,
        });
    };

    render() {
        const { showNavbar, showSignIn, showSignUp, showFilm, isSignedIn } = this.state;

        return (
            <React.Fragment>
                {showNavbar && <Navbar />}
                {showSignIn && !isSignedIn && <SignIn onSignIn={this.handleSignIn} />}
                {showSignUp && !isSignedIn && <SignUp />}
                {showFilm && <Film />}
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;
