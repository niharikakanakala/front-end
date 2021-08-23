import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import SignInAndSignUpPage from './pages/login/sign-in-and-sign-up.component';


function App() {
  return (
    <div>
      <Switch>
         <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
