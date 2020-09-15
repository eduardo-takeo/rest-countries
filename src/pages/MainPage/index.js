import React from 'react';

import { Container } from './styles';

import TopBar from '../../components/TopBar';
import MainContent from '../../components/MainContent';

function MainPage({ theme, toggleTheme }) {
  return (
    <Container>
      <TopBar theme={theme} toggleTheme={toggleTheme} />
      <MainContent theme={theme} />
    </Container>
  );
}

export default MainPage;
