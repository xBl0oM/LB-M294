import React, { Component } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import 'firebase/auth';



class SignUp extends Component {
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

    signUp = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        createUserWithEmailAndPassword(getAuth, email, password)
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
                <form onSubmit={(e) => this.signUp(e)}>
                    <h1>Create Account</h1>
                    <input type="email" placeholder="Enter your email" value={email} onChange={this.handleEmailChange} />
                    <input type="password" placeholder="Enter your password" value={password} onChange={this.handlePasswordChange} />
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        );
    }
}

export default SignUp;
