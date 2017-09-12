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
            [Untitled Game] is a semi-fictional interactive whirlwind. It is
            played best on a modern desktop browser (Chrome, Safari, Firefox).
            The game has an audio component, with transcripts provided.
          </MainText>
        </CustomContainer>
        <CustomContainer>
          <InProgress>Devtool to help navigate</InProgress>
          <nav>
            <li>
              <Link to={`/The-Office`}>The Office</Link>
            </li>
            <li>
              <Link to={`/A-Train-to-Not-Washington`}>
                A Train to Not Washington
              </Link>
            </li>
            <li>
              <Link to={`/The-Council`}>The Council</Link>
            </li>
            <li>
              <Link to={`/Slashington`}>Slashington</Link>
            </li>
            <li>
              <Link disabled to={`/Birthday`}>
                Birthday
              </Link>
            </li>
            <li>
              <Link to={`/Good-Messenger`}>Good-Messenger</Link>
            </li>
            <li>
              <Link to={`/credits`}>credits</Link>
            </li>
          </nav>
        </CustomContainer>
        <CustomContainer>
          <Link to={`/The-Office`}>Begin</Link>
        </CustomContainer>
      </div>
    );
  }
}

export default StartGame;
