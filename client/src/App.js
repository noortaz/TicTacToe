import React from 'react';
import './styles.scss';

//import components
import Box from './Box';

//import the styles components
import styled from 'styled-components';

//fakedata
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const player = {
  number: [1, 2],
  position: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  symbol: ['O', 'X']
}

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


class App extends React.Component {

  state = {
    isActive: false
  }

  markBox = (event) => {
    console.dir(event.target);
    console.log('clicked');
    event.target.className = 'occupied';
    event.target.textContent = 'X';
  }

  render() {
    return (
      <Center>
        <h1>Tic Tac Toe</h1>
        <Players>
          <h2>Player 1</h2>
          <h2>Player 2</h2>
        </Players>
        <Box data={data} player={player} markBox={this.markBox} />
      </Center>
    );
  }
  
}

export default App;
