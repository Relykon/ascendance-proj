import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
// import { v4 } from 'uuid';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import LandingPage from '../Landing/Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget/PasswordForget';
import HomePage from '../Home/Home';
import AccountPage from '../Account/Account';
import AdminPage from '../Admin/';
// import Projects from '../ProjectCreation/Projects';
import ProjectForm from '../ProjectCreation/ProjectForm';
import ProjectPreview from '../ProjectPreview/ProjectPreview';
import ProjectDetails from '../ProjectPreview/ProjectDetails';

import * as ROUTES from '../../constants/Routes';
import { withAuthentication } from '../Session';

const App = () => (
  <BrowserRouter>
      <div>
        <Header />
        {/* <Navigation /> */}
        <hr />
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.PROJECT_CREATE} component={ProjectForm} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />
        {/* <Route path={ROUTES.PROJECTS} component={Projects} /> */}
        <Route path={ROUTES.PROJECT_PREVIEW} component={ProjectPreview} />
        {/* <Route exact path='/projectPreview/edit/:id' component={ProjectDetails} /> */}
        <Route exact path='/projectDetails/:id' component={ProjectDetails} />
      </div>
  </BrowserRouter>
);

export default withAuthentication(App);
