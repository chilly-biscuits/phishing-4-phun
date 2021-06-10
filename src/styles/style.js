import styled from 'styled-components'

// variables

const mainColor = "#932944"
const mainFontColor = "#fff"

export const StyledFishBox = styled.div`
` 

export const LeftBar = styled.div`
  height: 100vh;
  background-color: ${mainColor};
  grid-column-start: 1;
  display: grid;
  justify-content: center;
`

export const MainSection = styled.div`
  color: ${mainFontColor};
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

export const StoreDiv = styled.div`
  background-color: white;
  margin-top: 10%;
  width: 100%;
  border: solid black 2px;
  display: flex;
  justify-content: center;
`