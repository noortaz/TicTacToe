import React from 'react';

//import the styles components
import styled from 'styled-components';

//fakedata
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const player1 = {
  position: 0,
  symbol: ['O', 'X']
}

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
`;

class Box extends React.Component {
  render() {
    return (
      <Big>
        {data.map(item => {
          return <Small/>
        })}
      </Big>
    )
  }
}


export default Box;