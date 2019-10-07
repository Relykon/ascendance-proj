import React from 'react';

import { withAuthorization } from '../Session';

const HomePage = () => (
    
<div>
       

      
        <h1>Home Page</h1>
        <p>The Home Page is accessible by every signed in user.</p>
        
        
        <img src={require('../img/adult-cheerful-collaboration-1391373.jpg')} alt=""/>
    </div>

    

   
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);