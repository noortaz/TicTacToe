import React from 'react';
import './styles.scss';

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

//fakedata
const position = ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"];
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


class App extends React.Component {

  state = {
    isPlayer1Active: false,
    isPlayer2Active: false
  }

  startGame = () => {
    this.setState({
      isPlayer1Active: true
    })
  }

  markBox = (event) => {
    //set state
    this.setState({
      isPlayer2Active: !this.state.isPlayer2Active,

    })

    // console.dir(event.target);
    // console.log('clicked');
    // console.log(event.target.id)
    console.log('player1: ', player1.position)
    console.log('player2: ', player2.position)

    //change the classname of the occupied box
    
    if (event.target.className !== 'occupied') {
      event.target.className = 'occupied';
    }

    //store their position
    if (event.target.textContent === '') {
      if (this.state.isPlayer2Active === true) {
        event.target.textContent = player2.symbol;
        player2.position.push(event.target.id);
      } else {
        event.target.textContent = player1.symbol;
        player1.position.push(event.target.id);
      }
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
        <button onClick={this.startGame}>Start Game</button>
        <Box position={position} player1={player1} player2={player2} markBox={this.markBox} startGame={this.startGame}/>
      </Center>
    );
  }
  
}

export default App;


//declare who is the winner

// let row1 = player1.position.map(item => {
//   return item.includes("a");
// })
// let row2 = player1.position.map(item => {
//   return item.includes("b");
// })
// let row3 = player1.position.map(item => {
//   return item.includes("c");
// })
// let column1 = player1.position.map(item => {
//   return item.includes("1");
// })
// let column2 = player1.position.map(item => {
//   return item.includes("2");
// })
// let column3 = player1.position.map(item => {
//   return item.includes("3");
// })
// let diagonal1 = player1.position.map(item => {
//   return item.includes("a1", "b2", "c3");
// })
// let diagonal2 = player1.position.map(item => {
//   return item.includes("a3", "b2", "c1");
// })

// if (player1.position === row1) {
//   console.log('winner')
// }