import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 6rem;
  min-height: calc(100vh - 6rem);
  height: 100%;

  display: flex;
  justify-content: center;

  color: var(--white);
  background: var(--secondary-dark);

  p {
    font-size: 1.3rem;
    padding: 0.5rem;
  }
`;

export const ContentContainer = styled.div`
  width: 80%;
  max-width: 1280px;
  margin-top: 5rem;
`;

export const BackButton = styled.button`
  background: var(--primary-dark);
  color: var(--white);
  border: none;
  border-radius: 5px;

  padding: 1rem 2rem;

  cursor: pointer;
`;

export const FlagDetailsContainer = styled.div`
  margin-top: 4rem;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Image = styled.img`
  width: 45rem;
  min-width: 250px;
  min-height: 200px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 40rem;

  h1 {
    padding: 2rem 0;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Description = styled.div`
  margin-bottom: 2rem;
`;

export const BordersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Border = styled.div`
  background: var(--primary-dark);
  border-radius: 5px;
  cursor: pointer;

  display: flex;
  align-items: center;

  padding: 1rem;
  margin: 0 1rem 1rem 0;
`;
