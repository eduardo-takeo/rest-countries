import React from 'react'

import { Container, ToggleButton } from './styles'

function TopBar() {
  return (
    <Container>
      <h1>Where in the world?</h1>
      <ToggleButton>Dark Mode</ToggleButton>
    </Container>
  )
}

export default TopBar
