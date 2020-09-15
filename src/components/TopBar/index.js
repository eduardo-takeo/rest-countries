import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { ThemeProvider } from 'styled-components';

import { Container, Title, ToggleButton } from './styles';

function TopBar({ theme, toggleTheme }) {
  const history = useHistory();

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Title onClick={() => history.push('/')}>
          Where in the world?
        </Title>
        <ToggleButton onClick={toggleTheme}>
          <FontAwesomeIcon icon={faMoon} size="2x" />
        </ToggleButton>
      </Container>
    </ThemeProvider>
  );
}

export default TopBar;
