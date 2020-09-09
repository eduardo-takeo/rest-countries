import React from 'react';

import { Container, Title, ToggleButton } from './styles';
import { useHistory } from 'react-router-dom';

function TopBar() {
  const history = useHistory();

  return (
    <Container>
      <Title onClick={() => history.push('/')}>
        Where in the world?
      </Title>
      <ToggleButton>Dark Mode</ToggleButton>
    </Container>
  );
}

export default TopBar;
