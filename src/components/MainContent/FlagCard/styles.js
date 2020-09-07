import styled from 'styled-components';

export const Container = styled.div`
  width: 250px;
  height: 300px;

  margin-bottom: 3rem;

  background: var(--primary-dark);
  border-radius: 1rem;

  cursor: pointer;

  :hover {
    transition: all 0.3s ease;
    transform: scale(1.1);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 50%;
`;

export const DetailsContainer = styled.div`
  padding: 2rem;

  h2 {
    padding: 1rem 0;
  }

  p {
    font-weight: bold;
    font-size: 1.3rem;

    margin-bottom: 0.5rem;
  }
`;
