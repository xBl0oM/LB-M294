import React, { Component } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';


class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleEmailChange = (e) => {
        this.setState({ email: e.target.value });
    }

    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value });
    }

    signIn = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        signInWithEmailAndPassword(getAuth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        const { email, password } = this.state;

        return (
            <div className="sign-in-container">
                <form onSubmit={(e) => this.signIn(e)}>
                    <h1>Log In</h1>
                    <input type="email" placeholder="Enter your email" value={email} onChange={this.handleEmailChange} />
                    <input type="password" placeholder="Enter your password" value={password} onChange={this.handlePasswordChange} />
                    <button type="submit">Log In</button>
                </form>
            </div>
        );
    }
}

export default SignIn;
