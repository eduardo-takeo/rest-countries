import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import {
  Container,
  FilterContainer,
  SearchBar,
  SearchInput,
  RegionFilter,
  FlagsContainer,
} from './styles';

import api from '../../api/api';
import FlagCard from './FlagCard';

function MainContent() {
  const [flags, setFlags] = useState([]);
  const [allFlags, setAllFlags] = useState([]);

  useEffect(() => {
    fetchFlags();
  }, []);

  async function fetchFlags() {
    try {
      const response = await api.getAllFlags();

      setFlags(response);
      setAllFlags(response);
    } catch (e) {
      console.error(e);
    }
  }

  const searchForTerm = (term) => {
    const filtered = allFlags.filter((flag) => {
      return flag.name.toLowerCase().includes(term.toLowerCase());
    });

    setFlags(filtered);
  };

  const searchForRegion = (region) => {
    let filtered;

    region === 'allRegions'
      ? (filtered = allFlags)
      : (filtered = allFlags.filter((flag) => {
          return flag.region
            .toLowerCase()
            .includes(region.toLowerCase());
        }));

    setFlags(filtered);
  };

  return (
    <Container>
      <FilterContainer>
        <SearchBar>
          <FontAwesomeIcon
            icon={faSearch}
            size="lg"
            style={{ margin: '2rem' }}
          />
          <SearchInput
            placeholder="Search for a country..."
            onChange={(e) => searchForTerm(e.target.value)}
          />
        </SearchBar>

        <RegionFilter
          name="regionFilter"
          id="regions"
          defaultValue="allRegions"
          onChange={(region) => searchForRegion(region.target.value)}
        >
          <option value="allRegions">All regions</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </RegionFilter>
      </FilterContainer>

      <FlagsContainer>
        {flags.map((flag) => {
          return <FlagCard flag={flag} key={flag.name} />;
        })}
      </FlagsContainer>
    </Container>
  );
}

export default MainContent;
