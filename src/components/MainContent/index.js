import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import {
  Container,
  FilterContainer,
  SearchBar,
  SearchInput,
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

      setFlags(response.data);
      setAllFlags(response.data);
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
        <h2>Filter</h2>
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
