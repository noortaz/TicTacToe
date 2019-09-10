import React from 'react';
import './styles.scss';

//import components
import Box from './Box';

//import the styles components
import styled from 'styled-components';

//fakedata
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const player1 = {
  number: 1,
  position: [],
  symbol: 'O'
}
const player2 = {
  number: 2,
  position: [],
  symbol: 'X'
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
    isPlayer1Active: true,
    isPlayer2Active: false
  }

  markBox = (event) => {
    console.dir(event.target);
    console.log('clicked');
    console.log(this.state.isPlayer2Active)

    //change the classname of the occupied box
    event.target.className = 'occupied';

    //set state
    this.setState({
      isPlayer1Active: !this.state.isPlayer1Active,
      isPlayer2Active: !this.state.isPlayer2Active
    })


    if (this.state.isPlayer1Active === true) {
      event.target.textContent = player1.symbol;
    } else {
      event.target.textContent = player2.symbol;
    }
    
  }

  render() {
    return (
      <Center>
        <h1>Tic Tac Toe</h1>
        <Players>
          <h2>Player 1</h2>
          <h2>Player 2</h2>
        </Players>
        <Box data={data} player1={player1} player2={player2} markBox={this.markBox} />
      </Center>
    );
  }
  
}

export default App;
