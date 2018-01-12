import React, { Component } from 'react';
import styled from 'styled-components';

const OuterContainer = styled.div`
  border: 2px solid #000;
  background-color: #21252b;
  border-radius: 6px;
  width: 600px;
  height: 400px;
`

const InnerContainer = styled.div`
  color: #e6c16e;
`

const Header = styled.div`
  margin: 0;
`

const Title = styled.h1`
  font-family: 'Source Sans Pro', courier;
  font-size: 20px;
  font-weight: normal;
  line-height: 22px;
`

class DigitalBoard extends Component {

  render() {
    return (
      <OuterContainer>
        <InnerContainer>
          <Header>
            <Title>Now Arriving @ Slashington</Title>
          </Header>
          <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Destionation</th>
              <th>Track</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Body content 1</td>
              <td>Body content 2</td>
              <td>Body content 2</td>
            </tr>
          </tbody>
        </table>
        </InnerContainer>
      </OuterContainer>
    );
  }

}

export default DigitalBoard;
