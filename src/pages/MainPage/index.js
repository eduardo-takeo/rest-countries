import React from 'react';

import { Container } from './styles';

import TopBar from '../../components/TopBar';
import MainContent from '../../components/MainContent';

function MainPage() {
  return (
    <Container>
      <TopBar />
      <MainContent />
    </Container>
  );
}

export default MainPage;
