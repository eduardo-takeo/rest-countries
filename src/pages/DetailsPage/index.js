import React from 'react';

import { Container } from './styles';

import TopBar from '../../components/TopBar';
import DetailsContent from '../../components/DetailsContent';

function DetailsPage({ theme, toggleTheme }) {
  return (
    <Container>
      <TopBar theme={theme} toggleTheme={toggleTheme} />
      <DetailsContent theme={theme} />
    </Container>
  );
}

export default DetailsPage;
