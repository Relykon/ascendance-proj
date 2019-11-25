import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
const INITIAL_STATE = {
    password: '',
    passwordConfirm: '',
    error: null,
};
class PasswordChangeForm extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { password } = this.state;

        this.props.firebase
            .doPasswordUpdate(password)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
            })
            .catch(error => {
                this.setState({ error });
            });
            
        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { password, passwordConfirm, error } = this.state;

        const isInvalid =
            password !== passwordConfirm || password === '';

        return (
            <form onSubmit={this.onSubmit}>
                <label>
                    Change My Password:
                    <input
                        name="password"
                        value={password}
                        onChange={this.onChange}
                        type="password"
                        placeholder="New Password"
                        />
                    <input
                        name="passwordConfirm"
                        value={passwordConfirm}
                        onChange={this.onChange}
                        type="password"
                        placeholder="Confirm New Password"
                        />
                </label>
                <button disabled={isInvalid} type="submit">
                    Update My Password
                </button>

                {error && <p>{error.message}</p>}
            </form>
        );
    }
}
export default withFirebase(PasswordChangeForm);