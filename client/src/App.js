import React from 'react';

//import components
import Box from './Box';

//import the styles components
import styled from 'styled-components';

//designs
const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Players = styled.div`
  width: 18rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;


function App() {
  return (
    <Center>
      <h1>Tic Tac Toe</h1>
      <Players>
        <h2>Player 1</h2>
        <h2>Player 2</h2>
      </Players>
      <Box/>
    </Center>
  );
}

export default App;
