import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 6rem;
  min-height: calc(100vh - 6rem);
  height: 100%;

  color: var(--white);
  background: var(--secondary-dark);
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 5rem;
`;

export const SearchBar = styled.div`
  width: 40rem;
  height: 4rem;

  background: var(--primary-dark);
  color: var(--white);

  display: flex;
  align-items: center;

  border: none;
  border-radius: 0.5rem;
`;

export const SearchInput = styled.input`
  height: 100%;
  width: 100%;

  background: var(--primary-dark);
  color: var(--white);

  border: none;
  border-radius: 0.5rem;

  :focus {
    outline: none;
  }
`;

export const FlagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  width: 90%;
  margin: 0 auto;
`;
