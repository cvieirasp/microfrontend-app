import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Switch, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
});

export default ({ history }) => {
  return <div>
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route path='/auth/signin' component={SignIn} />
          <Route path='/auth/signup' component={SignUp} />
        </Switch>
      </Router>
    </StylesProvider>
  </div>
};