import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/Routes';
import * as ROLES from '../../constants/Roles';

const SignUpPage = () => (
    <div>
        <h1>Sign Up</h1>
        <SignUpForm />
    </div>
);

const INITIAL_STATE = {
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
    isAdmin: false,
    isNonProfit: false,
    error: null,
};

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { username, email, password, isAdmin, isNonProfit } = this.state;
        const roles = {};
    
        if (isAdmin) {
            roles[ROLES.ADMIN] = ROLES.ADMIN;
        }

        if (isNonProfit) {
            roles[ROLES.NONPROFIT] = ROLES.NONPROFIT;
        }

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, password)
            .then(authUser => {
               return this.props.firebase
                .user(authUser.user.uid)
                .set({
                    username,
                    email,
                    roles
                });
            })
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error });
            });
            
        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    onChangeCheckbox = event => {
        this.setState({ [event.target.name]: event.target.checked });
    };

    render() {
        const {
            username,
            email,
            password,
            passwordConfirm,
            isAdmin,
            isNonProfit,
            error,
        } = this.state;

        const isInvalid = 
            password !== passwordConfirm ||
            password === '' ||
            email === '' ||
            username === '';

        return (
            <form onSubmit={this.onSubmit}>
                <input 
                    name="username"
                    value={username}
                    onChange={this.onChange}
                    type="text"
                    placeholder="User Name"
                />
                <input 
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                />
                <input 
                    name="password"
                    value={password}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                />
                <input 
                    name="passwordConfirm"
                    value={passwordConfirm}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Confirm Password"
                />
                <label>
                    Admin:
                    <input
                        name="isAdmin"
                        type="checkbox"
                        checked={isAdmin}
                        onChange={this.onChangeCheckbox}
                    />
                </label>
                <label>
                    Nonprofit:
                    <input
                        name="isNonprofit"
                        type="checkbox"
                        checked={isNonProfit}
                        onChange={this.onChangeCheckbox}
                    />
                    {/* <input
                        name="organization"
                        value={organization}
                        onChange={this.organization}
                        type="text"
                        placeholder="Name of Organization"
                    /> */}
                </label>
                <button disabled={isInvalid} type="submit">
                    Sign Up
                </button>

                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

const SignUpLink = () => (
    <p>
        Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
);

// const SignUpForm = withRouter(withFirebase(SignUpFormBase));
// ^ same as below (supposed to be less verbose....?)
const SignUpForm = compose(
    withRouter,
    withFirebase,
)(SignUpFormBase);

export default SignUpPage;
export { SignUpForm, SignUpLink };