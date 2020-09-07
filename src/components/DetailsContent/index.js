import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import {
  Container,
  ContentContainer,
  BackButton,
  FlagDetailsContainer,
  Image,
  Details,
  DescriptionContainer,
  Description,
  BordersContainer,
  Border,
} from './styles';
import api from '../../api/api';

function DetailsContent() {
  const { countryName } = useParams();
  const history = useHistory();

  const [country, setCountry] = useState(null);
  const [topLevelDomain, setTopLevelDomain] = useState('');
  const [currencies, setCurrencies] = useState('');
  const [languages, setLanguages] = useState('');
  const [borders, setBorders] = useState('');

  useEffect(() => {
    fetchCountryByName();
  }, []);

  async function fetchCountryByName() {
    try {
      const response = await api.getCountryByName(countryName);

      setCountry(response);

      setTopLevelDomain(response.topLevelDomain.join(', '));

      setCurrencies(
        response.currencies
          .map((currency) => {
            return currency.name;
          })
          .join(', '),
      );

      setLanguages(
        response.languages
          .map((language) => {
            return language.name;
          })
          .join(', '),
      );

      setBorders(
        response.borders.map((border) => {
          return <Border key={border}>{border}</Border>;
        }),
      );
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <Container>
      <ContentContainer>
        <BackButton onClick={() => history.goBack()}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            size="1x"
            style={{ marginRight: 10 }}
          />
          Back
        </BackButton>
        {country && (
          <FlagDetailsContainer>
            <Image src={country.flag} alt={country.name} />
            <Details>
              <h1>{country.name}</h1>
              <DescriptionContainer>
                <Description>
                  <p>Native Name: {country.nativeName}</p>
                  <p>Population: {country.population}</p>
                  <p>Region: {country.region}</p>
                  <p>Sub Region: {country.subregion}</p>
                  <p>Capital: {country.capital}</p>
                </Description>
                <Description>
                  <p>Top Level Domain: {topLevelDomain}</p>
                  <p>Currencies: {currencies}</p>
                  <p>Languages: {languages}</p>
                </Description>
              </DescriptionContainer>
              <BordersContainer>
                <p>Border Countries: </p>
                {borders}
              </BordersContainer>
            </Details>
          </FlagDetailsContainer>
        )}
      </ContentContainer>
    </Container>
  );
}

export default DetailsContent;
