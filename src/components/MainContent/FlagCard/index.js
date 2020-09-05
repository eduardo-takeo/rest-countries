import React from 'react';

import { Container, DetailsContainer, Image } from './styles';
import NumberMask from '../../../utils/NumberMask';

function FlagCard(country) {
  return (
    <Container>
      <Image src={country.flag.flag} alt={country.flag.name} />
      <DetailsContainer>
        <h2>{country.flag.name}</h2>
        <p>Population: {NumberMask(country.flag.population)}</p>
        <p>Region: {country.flag.region}</p>
        <p>Capital: {country.flag.capital}</p>
      </DetailsContainer>
    </Container>
  );
}

export default FlagCard;
