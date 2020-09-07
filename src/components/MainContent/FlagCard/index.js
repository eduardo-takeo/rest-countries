import React from 'react';
import { Link } from 'react-router-dom';

import { Container, DetailsContainer, Image } from './styles';
import NumberMask from '../../../utils/NumberMask';

function FlagCard(country) {
  const { flag } = country;

  return (
    <Link to={`/${flag.name}`}>
      <Container>
        <Image src={flag.flag} alt={flag.name} />
        <DetailsContainer>
          <h2>{flag.name}</h2>
          <p>Population: {NumberMask(flag.population)}</p>
          <p>Region: {flag.region}</p>
          <p>Capital: {flag.capital}</p>
        </DetailsContainer>
      </Container>
    </Link>
  );
}

export default FlagCard;
