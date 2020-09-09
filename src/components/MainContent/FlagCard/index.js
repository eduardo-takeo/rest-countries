import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container, DetailsContainer, Image } from './styles';
import NumberMask from '../../../utils/NumberMask';

function FlagCard(country) {
  const { flag } = country;
  const history = useHistory();

  return (
    <Container onClick={() => history.push(`/${flag.name}`)}>
      <Image src={flag.flag} alt={flag.name} />
      <DetailsContainer>
        <h2>{flag.name}</h2>
        <p>Population: {NumberMask(flag.population)}</p>
        <p>Region: {flag.region}</p>
        <p>Capital: {flag.capital}</p>
      </DetailsContainer>
    </Container>
  );
}

export default FlagCard;
