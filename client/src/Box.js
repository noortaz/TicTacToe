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
`;

class Box extends React.Component {
  render() {
    return (
      <Big>
        {this.props.data.map((item, index) => {
          return <Small className='box--small' key={index} onClick={this.props.markBox}/>
        })}
      </Big>
    )
  }
}


export default Box;