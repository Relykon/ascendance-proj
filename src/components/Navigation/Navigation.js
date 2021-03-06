import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut/SignOutButton';
import * as ROUTES from '../../constants/Routes';
import * as ROLES from '../../constants/Roles';
import './Navigation.css';

import { AuthUserContext } from '../Session';

const Navigation = () => (
    <AuthUserContext.Consumer>
        {authUser =>
            authUser ? (
                <NavigationAuth authUser={authUser} />
            ) : (
                    <NavigationNonAuth />
                )
        }
    </AuthUserContext.Consumer>
);

const NavigationAuth = ({ authUser }) => (
    <ul>
        <li>
            <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li>
            <Link to={ROUTES.ACCOUNT}>Account</Link>
        </li>
        {!!authUser.roles[ROLES.ADMIN] && (
            <li>
                <Link to={ROUTES.ADMIN}>Admin</Link>
            </li>
        )}
        {!!authUser.roles[ROLES.NONPROFIT] && (
            <li>
                <Link to={ROUTES.PROJECT_CREATE}>New Project</Link>
            </li>
        )}
        {/* {!!authUser.roles[ROLES.NONPROFIT] && (
            <li>
                <Link to={ROUTES.PROJECTS}>View Projects</Link>
            </li>
        )} */}
        <li>
            <Link to={ROUTES.PROJECT_PREVIEW}>Project Preview</Link>
        </li>
        <li>
            <SignOutButton />
        </li>
    </ul>
);

const NavigationNonAuth = () => (
    <ul>
        <li>
            <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        </li>
        <li>
            <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
        </li>
    </ul>
);

export default Navigation;