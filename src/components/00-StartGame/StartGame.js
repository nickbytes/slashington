import { Link } from "react-router-dom";
import { Text } from "rebass";
import React, { Component } from "react";

import CustomContainer from "../CustomContainer";

class StartGame extends Component {
  render() {
    return (
      <div>
        <CustomContainer>
          <Text>
            Aurora Metropolis [working title] is a semi-fictional interactive
            story. It is played best on a modern desktop browser (Chrome,
            Safari, Firefox). The game has an audio component, with transcripts
            provided.
          </Text>
        </CustomContainer>
        <CustomContainer>
          <Link to={`/01.5-Office`}>Begin</Link>
        </CustomContainer>
      </div>
    );
  }
}

export default StartGame;
