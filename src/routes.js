import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import MainPage from './pages/MainPage';
import DetailsPage from './pages/DetailsPage';
import { darkTheme, lightTheme } from './themes/Themes';

function Routes() {
  //Theme
  const [darkMode, setDarkMode] = useState(true);
  const [theme, setTheme] = useState(darkTheme);

  useEffect(() => {
    setTheme(darkMode ? darkTheme : lightTheme);
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <Switch>
        <Route
          path="/:countryName"
          children={
            <DetailsPage theme={theme} toggleTheme={toggleTheme} />
          }
        />
        <Route path="/">
          <MainPage theme={theme} toggleTheme={toggleTheme} />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
