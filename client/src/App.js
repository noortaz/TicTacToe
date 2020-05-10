import React from "react";
import "./styles.scss";
import Box from "./Box";
import styled from "styled-components";

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
  font-size: 16px;
  font-weight: bold;
`;

const ActivePlayer = styled.div`
  padding: 8px 12px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: black;
  border-radius: 4px;
  text-align: center;
  line-height: 30px;
`;

const position = ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"];
const player1 = {
  number: 1,
  position: [],
  symbol: "O"
};
const player2 = {
  number: 2,
  position: [],
  symbol: "X"
};

const declareWinner = occupiedPosition => {
  const rowColumns = ["a", "b", "c", "1", "2", "3"];
  const winningNumber = 3;
  if (occupiedPosition.includes("b2")) {
    if (
      (occupiedPosition.includes("a1") && occupiedPosition.includes("c3")) ||
      (occupiedPosition.includes("a3") && occupiedPosition.includes("c1"))
    )
      return true;
  }
  let currentNumber;
  currentNumber = currentNumber + 1;
  for (let i = 0; i < rowColumns.length; i++) {
    currentNumber = occupiedPosition.filter(el => el.includes(rowColumns[i]))
      .length;
    if (currentNumber === winningNumber) return true;
  }
  return false;
};

class Test extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isPlayer1Active: false,
      isPlayer2Active: false,
      isGameStarted: false,
      positionOccupiedByPlayer1: [],
      positionOccupiedByPlayer2: [],
      foundWinner: false,
      winner: null
    };
  }

  componentDidUpdate(prevProp, prevState) {
    const { positionOccupiedByPlayer1, positionOccupiedByPlayer2 } = this.state;

    if (
      prevState.positionOccupiedByPlayer1 !== positionOccupiedByPlayer1 &&
      prevState.positionOccupiedByPlayer2 === positionOccupiedByPlayer2
    ) {
      if (declareWinner(positionOccupiedByPlayer1)) {
        this.setState({
          foundWinner: true,
          isGameStarted: false,
          isPlayer1Active: false,
          isPlayer2Active: false,
          winner: "Player 1"
        });
      }
    }

    if (
      prevState.positionOccupiedByPlayer2 !== positionOccupiedByPlayer2 &&
      prevState.positionOccupiedByPlayer1 === positionOccupiedByPlayer1
    ) {
      if (declareWinner(positionOccupiedByPlayer2)) {
        this.setState({
          foundWinner: true,
          isGameStarted: false,
          isPlayer1Active: false,
          isPlayer2Active: false,
          winner: "Player 2"
        });
      }
    }
  }

  startGame = () => {
    const { isGameStarted } = this.state;

    if (isGameStarted) {
      this.setState(
        {
          isPlayer1Active: false,
          isPlayer2Active: false,
          isGameStarted: false,
          positionOccupiedByPlayer1: [],
          positionOccupiedByPlayer2: [],
          foundWinner: false,
          winner: null
        },
        () => {
          this.setState({
            isGameStarted: true,
            isPlayer1Active: true
          });
        }
      );
    } else {
      this.setState({
        isPlayer1Active: true,
        isGameStarted: true,
        foundWinner: false,
        positionOccupiedByPlayer1: [],
        positionOccupiedByPlayer2: [],
        winner: null
      });
    }
  };

  markBox = event => {
    const selectedBox = event.target;
    if (selectedBox.className === "occupied") return;
    this.setState(
      {
        isPlayer2Active: !this.state.isPlayer2Active,
        isPlayer1Active: !this.state.isPlayer1Active
      },
      () => {
        //change the classname of the occupied box

        if (selectedBox.className !== "occupied") {
          selectedBox.className = "occupied";
        }

        //store their position

        if (this.state.isPlayer2Active) {
          selectedBox.textContent = player1.symbol;
          this.setState({
            positionOccupiedByPlayer1: [
              ...this.state.positionOccupiedByPlayer1,
              selectedBox.id
            ]
          });
        } else {
          selectedBox.textContent = player2.symbol;
          this.setState({
            positionOccupiedByPlayer2: [
              ...this.state.positionOccupiedByPlayer2,
              selectedBox.id
            ]
          });
        }
      }
    );
  };

  render() {
    const {
      isGameStarted,
      isPlayer1Active,
      isPlayer2Active,
      foundWinner,
      positionOccupiedByPlayer2,
      positionOccupiedByPlayer1
    } = this.state;
    return (
      <Center>
        <h1>Tic Tac Toe</h1>
        <Players>
          {isPlayer1Active ? (
            <ActivePlayer>Player 1</ActivePlayer>
          ) : (
              <div>Player 1</div>
            )}
          {isPlayer2Active ? (
            <ActivePlayer>Player 2</ActivePlayer>
          ) : (
              <div>Player 2</div>
            )}
        </Players>
        <button onClick={this.startGame}>Start New Game</button>
        {isGameStarted ? (
          positionOccupiedByPlayer1.length === 5 ||
            positionOccupiedByPlayer2.length === 5 ? (
              <h1>Draw!</h1>
            ) : (
              <Box
                position={position}
                player1={player1}
                player2={player2}
                markBox={this.markBox}
                startGame={this.startGame}
              />
            )
        ) : null}
        {foundWinner ? <h1> {`${this.state.winner}`} Winner!!</h1> : null}
      </Center>
    );
  }
}

export default Test;
