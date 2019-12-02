import React from 'react';

import { withAuthorization, AuthUserContext } from '../Session';

const HomePage = () => (
    <AuthUserContext.Consumer>
        {authUser => (
            <div className="homeContainer">
                <h1>Home Page</h1>
                <h5>Welcome to your home page {authUser.email}</h5>
                <p>The Home Page needs to be SPECIFIC to every signed in user.</p>

                <img src={require('../../assets/img/adult-cheerful-collaboration-1391373.jpg')} alt="team members expressing cheer" />
            </div>
        )}
    </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);