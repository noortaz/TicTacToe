import React from 'react';

//import the styles components
import styled from 'styled-components';


//designs
const Big = styled.div`
  width: 18rem;
  height: 18rem;

  display: flex;
  flex-flow: row wrap;
  align-content: center;
  justify-content: center;
`;

const Small = styled.div`
  height: 5rem;
  width: 5rem;
  background-color: black;
  border: 2px solid grey;
  display: ${props => (props.startGame ? 'flex' : 'none')};
`;

class Box extends React.Component {
  render() {
    return (
      <Big>
        {this.props.position.map((item) => {
          return <Small id={item} className='box--small' key={item} onClick={this.props.markBox} startGame={this.props.startGame}/>
        })}
      </Big>
    )
  }
}


export default Box;