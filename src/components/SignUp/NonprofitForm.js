import React from 'react';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import { withAuthorization } from '../Session';
import axios from 'axios';

import * as ROLES from '../../constants/Roles';
import * as ROUTES from '../../constants/Routes';

const NonprofitSignUpPage = () => (
    <div>
        <h2>Nonprofit Sign Up Continued</h2>
        <NonprofitForm />
    </div>
)

const INITIAL_STATE = {
    user: '',
    organization: '',
    location: '',
    tagline: '',
    category: '',
    cause: '',
    error: null
};

class NonprofitFormBase extends React.Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    componentDidMount() {
        this.getUserDetails();
    }

    getUserDetails() {
        let userId = this.props.match.params.id
        console.log(userId);
        axios.get(`https://project-ascendance.firebaseio.com/users/${userId}.json`)
            .then(response => {
                this.setState({
                    key: this.props.match.params.id,
                    user: response.data.user,
                    organization: this.state.organization,
                    location: this.state.organization,
                    tagline: this.state.tagline,
                    category: this.state.category,
                    cause: this.state.cause,
                    error: this.state.error
                }, () => {
                    console.log("update", this.state);
                });
            })
            .catch(err => console.log(err));
    }

    updateUser(updatedUser) {
        axios.request({
            method: 'put',
            url: `https://project-ascendance.firebaseio.com/projects/${this.state.key}.json`,
            data: updatedUser
        })
            .then(response => {
                this.props.history.push(ROUTES.HOME);
            })
            .catch(err => console.log(err));
    }

    handleSubmit(event) {
        const updatedUser = {
            user: this.refs.user.value,
            organization: this.state.organization,
            location: this.state.location,
            tagline: this.state.tagline,
            category: this.state.category,
            cause: this.state.cause,
            error: this.state.error
        }
        this.updateUser(updatedUser);
        event.preventDefault();
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    // handleSubmit = event => {
    //     const {user, organization, location, tagline, category, cause} = this.state;

    //     this.props.firebase
    //         .doUpdateUserWithRoleSpecificDetails(user, organization, location, tagline, category, cause)
    //         .then(() => {
    //         this.setState({ ...INITIAL_STATE })
    //         })
    //         .catch(error => {
    //             this.setState({ error })
    //         });
    //     event.preventDefault();
    // }

    render() {
        const { organization, location, tagline, category, cause, error } = this.state;
        const isInvalid = organization === '';

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name of Organization:
                    <input
                        type="text"
                        name="organization"
                        value={organization}
                        onChange={this.handleChange}
                        placeholder="Name of Organization"
                    />
                </label>
                <label>
                    Location:
                    <input
                        type="text"
                        name="location"
                        value={location}
                        onChange={this.handleChange}
                        placeholder="Location of local branch"
                    />
                </label>
                <label>
                    Tagline/Motto:
                    <input
                        type="text"
                        name="tagline"
                        value={tagline}
                        onChange={this.handleChange}
                        placeholder="Tagline or Motto"
                    />
                </label>
                <label>
                    Category:
                    <select name="category" value={category} onChange={this.handleChange} placeholder="Category of Nonprofit">
                        <option>Arts, Culture, Humanities</option>
                        <option>Community Development</option>
                        <option>Education</option>
                        <option>Environment</option>
                        <option>Health</option>
                        <option>Human and Civil Rights</option>
                        <option>Human Services</option>
                        <option>International</option>
                        <option>Religion</option>
                        <option>Research and Public Policy</option>
                    </select>
                </label>
                <label>
                    Cause:
                    <input
                        name="cause"
                        value={cause}
                        onChange={this.handleChange}
                        type="text"
                        placeholder="Cause"
                    />
                </label>
                <button disabled={isInvalid} type="submit">Submit</button>

                {error && <p>{error.message}</p>}
            </form>
        );
    };
}

const condition = authUser =>
    authUser && !!authUser.roles[ROLES.NONPROFIT];

const NonprofitForm = compose(
    withAuthorization(condition),
    withFirebase
)(NonprofitFormBase)

export default NonprofitSignUpPage;

export { NonprofitForm };