import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 6rem;
  padding: 0 2rem;

  background-color: var(--primary-dark);
  color: var(--white);

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ToggleButton = styled.button`
  font-size: 1rem;
`
