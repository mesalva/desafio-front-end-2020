/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dash from '../pages/Dash';
import Details from '../pages/Details';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dash} />
    <Route path="/details/:date" exact component={Details} />
  </Switch>
)

export default Routes;
