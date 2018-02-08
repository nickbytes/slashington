import React, { Component } from "react";
import styled from "styled-components";
import FlexContainer from "react-styled-flexbox";

const OuterContainer = styled.div`
  background-color: #000;
  border-radius: 6px;
  width: 600px;
  height: 400px;
`;

const InnerContainer = styled.div`
  color: #fff;
`;

const Header = styled.div`
  margin: 0 0 20px;
`;

const Title = styled.h1`
  font-family: Arial;
  text-transform: uppercase;
  font-size: 48px;
  font-weight: 800;
  line-height: 48px;
  color: #fff;
  padding: 20px 0;
  margin: 0;
  text-align: center;
`;

const Table = styled(FlexContainer)`
  margin: 0;
`;

const TimeColumn = styled(FlexContainer)`
  margin: 0;
  font-family: Arial;
  flex-grow: 1;
`;

const DestionationColumn = styled(FlexContainer)`
  margin: 0;
  font-family: Arial;
  flex-grow: 1;
`;

const TrackColumn = styled(FlexContainer)`
  margin: 0;
  font-family: Arial;
  flex-grow: 1;
`;

const SubHead = styled.h2`
  margin: 0 0 10px;
  font-weight: normal;
  font-size: 18px;
  line-height: 19px;
  border-bottom: 2px solid #fff;
`;

const NormalRow = styled.h4`
  font-size: 16px;
  line-height: 18px;
  font-weight: normal;
  margin: 0 0 5px;
`;

class DigitalBoard extends Component {
  state = {
    fakeBoard: [
      {
        id: 1,
        fakeTime: "4:32",
        fakeSunset: "am",
        fakeDestination: "Something Capitalized",
        fakeTrack: "02"
      },
      {
        id: 2,
        fakeTime: "5:32",
        fakeSunset: "am",
        fakeDestination: "City Oz",
        fakeTrack: "02"
      },
      {
        id: 3,
        fakeTime: "6:32",
        fakeSunset: "am",
        fakeDestination: "Some Land",
        fakeTrack: "02"
      },
      {
        id: 4,
        fakeTime: "7:32",
        fakeSunset: "am",
        fakeDestination: "What Ever ",
        fakeTrack: "02"
      }
    ]
  };
  componentDidMount() {
    console.log("this mounted");
    // this.interval = setInterval(this.scramble, 10);
  }

  componentWillUnmount() {
    console.log("imma need to unmount the timer here");
    clearInterval(this.interval);
  }

  randomTime = () => {
    const hr = Math.floor(Math.random() * 24);
    const min = Math.floor(Math.random() * 59);
    return `${hr < 10 ? `0${hr}` : `${hr}`}:${min < 10 ? `0${min}` : `${min}`}`;
  };

  randomCity = () => {
    const p = Math.random();
    if (p > 0.5) {
      // one word
      return Math.random()
        .toString(36)
        .substring(3, 9);
    } else {
      // two words
      return `${Math.random()
        .toString(36)
        .substring(3, 8)} ${Math.random()
        .toString(36)
        .substring(3, 13)}`;
    }
  };

  randomTrack = () => {
    return `${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`;
  };

  scramble = () => {
    const s = Math.floor(Math.random() * 7) + 1;

    const newBoard = [...new Array(s)].map((_, i) => ({
      id: i,
      fakeTime: this.randomTime(),
      fakeDestination: this.randomCity(),
      fakeTrack: this.randomTrack()
    }));
    this.setState({
      fakeBoard: newBoard
    });
  };
  render() {
    return (
      <OuterContainer>
        <InnerContainer>
          <Header>
            <Title>Train Information</Title>
          </Header>

          <Table justifyCenter contentSpaceAround>
            <TimeColumn directionColumn>
              <SubHead>Time</SubHead>
              <NormalRow>5:32</NormalRow>
              {this.state.fakeBoard.map(fakeItem => (
                <NormalRow key={fakeItem.id}>{fakeItem.fakeTime}</NormalRow>
              ))}
            </TimeColumn>

            <DestionationColumn directionColumn>
              <SubHead>Destination</SubHead>
              <NormalRow>Union Station (DC)</NormalRow>
              {this.state.fakeBoard.map(fakeItem => (
                <NormalRow key={fakeItem.id}>
                  {fakeItem.fakeDestination}
                </NormalRow>
              ))}
            </DestionationColumn>

            <TrackColumn directionColumn>
              <SubHead>Track</SubHead>
              <NormalRow>01</NormalRow>
              {this.state.fakeBoard.map(fakeItem => (
                <NormalRow key={fakeItem.id}>{fakeItem.fakeTrack}</NormalRow>
              ))}
            </TrackColumn>
          </Table>
        </InnerContainer>
      </OuterContainer>
    );
  }
}

export default DigitalBoard;
