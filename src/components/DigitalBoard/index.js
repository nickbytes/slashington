import React, { Component } from "react";
import styled from "styled-components";
import FlexContainer from "react-styled-flexbox";

const OuterContainer = styled.div`
  border: 2px solid #000;
  background-color: #21252b;
  border-radius: 6px;
  width: 600px;
  height: 400px;
`;

const InnerContainer = styled.div`
  color: #e6c16e;
`;

const Header = styled.div`
  margin: 0;
`;

const Title = styled.h1`
  font-family: "Source Sans Pro", courier;
  font-size: 20px;
  font-weight: normal;
  line-height: 22px;
`;

const Table = styled(FlexContainer)`
  border-bottom: 1px solid yellow;
`;

const TimeColumn = styled(FlexContainer)`
  margin: 0;
  flex-grow: 1;
`;

const DestionationColumn = styled(FlexContainer)`
  margin: 0;
  flex-grow: 1;
`;

const TrackColumn = styled(FlexContainer)`
  margin: 0;
  flex-grow: 1;
`;

const SubHead = styled.h2`
  margin: 0;
  font-weight: normal;
  font-size: 18px;
  line-height: 19px;
`;

class DigitalBoard extends Component {
  state = {
    fakeTimes: []
  };
  render() {
    return (
      <OuterContainer>
        <InnerContainer>
          <Header>
            <Title>Now Arriving @ Slashington</Title>
          </Header>

          <Table justifyCenter contentSpaceAround>
            <TimeColumn>
              <SubHead>Time</SubHead>
              <h2>5:00am</h2>
            </TimeColumn>

            <DestionationColumn>
              <SubHead>Destionation</SubHead>
              <h2>Union Station (DC)</h2>
            </DestionationColumn>

            <TrackColumn>
              <SubHead>Track</SubHead>
              <h2>01</h2>
            </TrackColumn>
          </Table>
        </InnerContainer>
      </OuterContainer>
    );
  }
}

export default DigitalBoard;
