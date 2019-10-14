import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/Routes';
import * as ROLES from '../../constants/Roles';
import './index.css';

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
    isVolunteer: false,
    error: null,
};

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { username, email, password, isAdmin, isNonprofit, isVolunteer } = this.state;
        const roles = {};
    
        if (isAdmin) {
            roles[ROLES.ADMIN] = ROLES.ADMIN;
        }
        if (isNonprofit) {
            roles[ROLES.NONPROFIT] = ROLES.NONPROFIT;
        }
        if (isVolunteer) {
            roles[ROLES.VOLUNTEER] = ROLES.VOLUNTEER;
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
            isNonprofit,
            isVolunteer,
            error,
        } = this.state;

        const isInvalid = 
            password !== passwordConfirm ||
            password === '' ||
            email === '' ||
            username === '' ||
            isAdmin === false && isNonprofit === false && isVolunteer === false ||
            isAdmin === true && isNonprofit === true ||
            isAdmin === true && isVolunteer === true ||
            isVolunteer === true && isNonprofit === true;


        return (
            <form id="signUpForm" onSubmit={this.onSubmit}>
                <input 
                    name="username"
                    value={username}
                    onChange={this.onChange}
                    type="text"
                    placeholder="User Name"
                />
                {/* <br/> */}
                <input 
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                />
                {/* <br/> */}
                <input 
                    name="password"
                    value={password}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                />
                {/* <br/> */}
                <input 
                    name="passwordConfirm"
                    value={passwordConfirm}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Confirm Password"
                />
                
                {/* <label>
                    Admin:
                    <input
                        name="isAdmin"
                        type="checkbox"
                        checked={isAdmin}
                        onChange={this.onChangeCheckbox}
                    />
                </label> */}
                {/* <br /> */}
                <label>
                    Volunteer:
                    <input
                        name="isVolunteer"
                        type="checkbox"
                        checked={isVolunteer}
                        onChange={this.onChangeCheckbox}
                    />
                </label>
                {/* <br/> */}
                <label>
                    Nonprofit:
                    <input
                        name="isNonprofit"
                        type="checkbox"
                        checked={isNonprofit}
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
                <br/>
                <button id="signUpBtn" disabled={isInvalid} type="submit">
                    Sign Up
                </button>
                
                {error && <p id="errorMsg">{error.message}</p>}
            </form>
        );
    }
}

const SignUpLink = () => (
    <p id='signUpLink'>
        Don't have an account yet?<br/> <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
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