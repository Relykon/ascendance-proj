import React from 'react';

import { PasswordForgetForm } from '../PasswordForget/PasswordForget';
import PasswordChangeForm from '../PasswordChange/PasswordChange';
import { AuthUserContext, withAuthorization } from '../Session';

import { NonprofitFormLink } from '../SignUp/NonprofitForm';

const AccountPage = () => (
    <AuthUserContext.Consumer>
        {authUser => (
            <div>
                <h1>Account: {authUser.email}</h1>
                <PasswordForgetForm />
                <br /> <br />
                <PasswordChangeForm />
                <br /> <br />
                <NonprofitFormLink />
            </div>
        )}
    </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);