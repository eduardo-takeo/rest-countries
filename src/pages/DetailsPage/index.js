import React from 'react';

import { Container } from './styles';

import TopBar from '../../components/TopBar';
import DetailsContent from '../../components/DetailsContent';

function DetailsPage() {
  return (
    <Container>
      <TopBar />
      <DetailsContent />
    </Container>
  );
}

export default DetailsPage;
