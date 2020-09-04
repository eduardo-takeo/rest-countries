import React from 'react'

import { Container, DetailsContainer, Image } from './styles'

function FlagCard(country) {
  return (
    <Container>
      <Image src={country.flag.flag} alt={country.flag.name} />
      <DetailsContainer>
        <h2>{country.flag.name}</h2>
        <p>Population: {country.flag.population}</p>
        <p>Region: {country.flag.region}</p>
        <p>Capital: {country.flag.capital}</p>
      </DetailsContainer>
    </Container>
  )
}

export default FlagCard
