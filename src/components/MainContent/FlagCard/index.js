import React from 'react';
import { useHistory } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Container, DetailsContainer, Image } from './styles';
import NumberMask from '../../../utils/NumberMask';

function FlagCard({ theme, flag }) {
  const history = useHistory();

  return (
    <ThemeProvider theme={theme}>
      <Container onClick={() => history.push(`/${flag.name}`)}>
        <Image src={flag.flag} alt={flag.name} />
        <DetailsContainer>
          <h2>{flag.name}</h2>
          <p>Population: {NumberMask(flag.population)}</p>
          <p>Region: {flag.region}</p>
          <p>Capital: {flag.capital}</p>
        </DetailsContainer>
      </Container>
    </ThemeProvider>
  );
}

export default FlagCard;
