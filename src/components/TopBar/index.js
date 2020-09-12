import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';

import { Container, Title, ToggleButton } from './styles';
import { useHistory } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

function TopBar() {
  const history = useHistory();
  const [darkMode, setDarkMode] = useState(true);
  const [theme, setTheme] = useState({});

  useEffect(() => {
    setTheme({
      primary: darkMode ? '#2b3743' : '#ffffff',
      secondary: darkMode ? '#202d36' : '#ffffff',
      text: darkMode ? '#ffffff' : '#000000',
    });
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Title onClick={() => history.push('/')}>
          Where in the world?
        </Title>
        <ToggleButton onClick={() => toggleTheme()}>
          <FontAwesomeIcon icon={faMoon} size="2x" />
        </ToggleButton>
      </Container>
    </ThemeProvider>
  );
}

export default TopBar;
