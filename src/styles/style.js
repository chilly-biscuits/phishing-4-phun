import styled from 'styled-components'

export const StyledFishBox = styled.div`
` 

export const LeftBar = styled.div`
  height: 100vh;
  background-color: green;
  grid-column-start: 1;
  display: grid;
  justify-content: center;
`

export const MainSection = styled.div`
  height: 100vh;
  background-color: red;
  grid-column-start: 2;
  grid-column-end: 10;
`

export const GameContainer = styled.div`
  max-height: 100vh;
  display: grid;
  grid-auto-flow: column;
`