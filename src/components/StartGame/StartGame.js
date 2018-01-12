import { Link } from "react-router-dom";
import React, { Component } from "react";

import CustomContainer from "../CustomContainer";
import MainText from "../MainText";

class StartGame extends Component {
  render() {
    return (
      <div>
        <CustomContainer>
          <MainText>
            <b>Now Arriving: Slashington</b> is a semi-fictional interactive
            whirlwind where players act as a messenger between worlds, help plot
            the demise of a pop star turned political icon, and attend their
            niece's 16th birthday party. It is played best on a modern desktop
            browser (Chrome, Safari, Firefox). The game has an audio component,
            with transcripts provided.
          </MainText>
        </CustomContainer>
        <CustomContainer>
          <Link to={`/s01ework`}>Begin</Link>
        </CustomContainer>
        <CustomContainer>
          <Link to={`/credits`}>Credits</Link>
        </CustomContainer>
      </div>
    );
  }
}

export default StartGame;
