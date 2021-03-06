import React from 'react';
import ReactDOM from 'react-dom';
// import { HashRouter } from 'react-router-dom';

import './index.css';
import * as serviceWorker from './serviceWorker';

import App from '../src/components/App/App';
import Firebase, { FirebaseContext } from './components/Firebase/index';

// console.log(Firebase)

ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <App />
    </FirebaseContext.Provider>,
    document.getElementById('root')
); 


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
