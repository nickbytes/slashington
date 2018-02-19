import React, { Component } from "react";
import styled from "styled-components";
import FlexContainer from "react-styled-flexbox";

const OuterContainer = styled.div`
  background-color: #292829;
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
  padding: 25px 0 20px;
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
  padding: 0 0 0 30px;
`;

const NormalRow = styled.h4`
  font-size: 16px;
  line-height: 18px;
  font-weight: normal;
  margin: 0 0 5px;
  padding: 0 0 0 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const B = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 30px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  background-color: #252526;
  position: relative;
  margin: 0 1px;
  font-weight: 700;

  &::before {
    content: "";
    display: block;
    position: absolute;
    height: 1px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.25);
    z-index: 1;
    top: 45%;
  }
`;

class DigitalBoard extends Component {
  state = {
    a1: "x",
    a2: "y",
    a3: "z",
    a4: " ",
    a5: " ",
    a6: " ",
    a7: " ",
    a8: " ",
    a9: " ",
    a10: " ",
    a11: " ",
    a12: " ",
    a13: " ",
    a14: " ",
    a15: " "
  };

  componentDidMount() {
    this.interval = setInterval(this.scramble, 50);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  wow = () => {
    const p = Math.random();
    if (p > 0.5) {
      // one edit the thing
      return Math.random()
        .toString(36)
        .substring(2, 3);
    } else {
      // dont edit
      return ` `;
    }
  };

  scramble = () => {
    const n = Math.floor(Math.random() * 15) + 1;

    this.setState({
      [`a${n}`]: this.wow()
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
              <NormalRow>
                <B>5</B>:<B>3</B>
                <B>2</B>
              </NormalRow>
              <NormalRow>
                <B>{this.state.a2}</B>:
                <B>{this.state.a3}</B>
                <B> {this.state.a6}</B>
              </NormalRow>
              <NormalRow>
                <B>{this.state.a12}</B>:
                <B>{this.state.a13}</B>
                <B>{this.state.a4}</B>
              </NormalRow>
              <NormalRow>
                <B>{this.state.a3}</B>:
                <B>{this.state.a8}</B>
                <B>{this.state.a14}</B>
              </NormalRow>
            </TimeColumn>
            <DestionationColumn directionColumn>
              <SubHead>Destination</SubHead>
              <NormalRow>
                <B>U</B>
                <B>N</B>
                <B>I</B>
                <B>O</B>
                <B>N</B>
                <B> </B>
                <B>S</B>
                <B>T</B>
                <B>A</B>
                <B>T</B>
                <B>I</B>
                <B>O</B>
                <B>N</B>
              </NormalRow>

              <NormalRow>
                <B>{this.state.a1}</B>
                <B>{this.state.a2}</B>
                <B>{this.state.a3}</B>
                <B>{this.state.a4}</B>
                <B>{this.state.a5}</B>
                <B>{this.state.a6}</B>
                <B>{this.state.a7}</B>
                <B>{this.state.a2}</B>
                <B>{this.state.a6}</B>
                <B>{this.state.a1}</B>
                <B>{this.state.a3}</B>
                <B>{this.state.a7}</B>
                <B>{this.state.a4}</B>
              </NormalRow>
              <NormalRow>
                <B>{this.state.a7}</B>
                <B>{this.state.a5}</B>
                <B>{this.state.a4}</B>
                <B>{this.state.a3}</B>
                <B>{this.state.a5}</B>
                <B>{this.state.a1}</B>
                <B>{this.state.a2}</B>
                <B>{this.state.a4}</B>
                <B>{this.state.a5}</B>
                <B>{this.state.a7}</B>
                <B>{this.state.a2}</B>
                <B>{this.state.a3}</B>
                <B>{this.state.a1}</B>
              </NormalRow>
              <NormalRow>
                <B>{this.state.a9}</B>
                <B>{this.state.a3}</B>
                <B>{this.state.a1}</B>
                <B>{this.state.a13}</B>
                <B>{this.state.a6}</B>
                <B>{this.state.a5}</B>
                <B>{this.state.a10}</B>
                <B>{this.state.a3}</B>
                <B>{this.state.a8}</B>
                <B>{this.state.a5}</B>
                <B>{this.state.a12}</B>
                <B>{this.state.a13}</B>
                <B>{this.state.a1}</B>
              </NormalRow>
            </DestionationColumn>

            <TrackColumn directionColumn>
              <SubHead>Track</SubHead>
              <NormalRow>
                <B>0</B>
                <B>3</B>
              </NormalRow>
              <NormalRow>
                <B>{this.state.a1}</B>
                <B>{this.state.a7}</B>
              </NormalRow>
              <NormalRow>
                <B>{this.state.a2}</B>
                <B>{this.state.a12}</B>
              </NormalRow>
              <NormalRow>
                <B>{this.state.a3}</B>
                <B>{this.state.a4}</B>
              </NormalRow>
            </TrackColumn>
          </Table>
        </InnerContainer>
      </OuterContainer>
    );
  }
}

export default DigitalBoard;
