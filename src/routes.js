import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import MainPage from './pages/MainPage';
import DetailsPage from './pages/DetailsPage';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/details">
          <DetailsPage />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
