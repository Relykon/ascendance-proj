import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget/PasswordForget';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/Routes';
import './index.css';

const SignInPage = () => (
    <div>
        {/* <h1>SignIn</h1> */}
        <SignInForm />
        <PasswordForgetLink />
        <br/><br/>
        <SignUpLink />
    </div>
);

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null
};

class SignInFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE};
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = event => {
        const { email, password } = this.state;

        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    }

    render() {
        const { email, password, error } = this.state;

        const isInvalid = password === '' || email === '';

        return (

            <div id="signin-box">
                <div className="right">
                    <h1>Sign In</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                            type="text"
                            placeholder="Email Address"
                        />
                        <input
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                            type="password"
                            placeholder="Password"
                        />
                        <button className="submit" disabled={isInvalid} type="submit">
                            Sign In
                        </button>

                        {error && <p>{error.message}</p>}
                    </form>
                </div>
                <div class="left"></div>
            </div>
        );
    }
}

const SignInForm = compose(
    withRouter,
    withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };
