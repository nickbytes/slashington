import { Link } from "react-router-dom";
import React, { Component } from "react";

import CustomContainer from "../CustomContainer";
import InProgress from "../InProgress";
import MainText from "../MainText";

class StartGame extends Component {
  render() {
    return (
      <div>
        <CustomContainer>
          <MainText>
            [Untitled Game] is a semi-fictional interactive story. It is played
            best on a modern desktop browser (Chrome, Safari, Firefox). The game
            has an audio component, with transcripts provided.
          </MainText>
        </CustomContainer>
        <CustomContainer>
          <InProgress>
            I will do this last since it seems a bit promotional.
          </InProgress>
        </CustomContainer>
        <CustomContainer>
          <Link to={`/01.5-Office`}>Begin</Link>
        </CustomContainer>
      </div>
    );
  }
}

export default StartGame;
