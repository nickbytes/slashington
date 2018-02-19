import { Keyframes, Frame } from "react-keyframes";
import React from "react";

import MainText from "../MainText";

const Waiting = ({ delay }) => (
  <Keyframes delay={delay} loop>
    <Frame duration={500}>
      <MainText>.</MainText>
    </Frame>
    <Frame duration={500}>
      <MainText>..</MainText>
    </Frame>
    <Frame duration={500}>
      <MainText>...</MainText>
    </Frame>
  </Keyframes>
);

export default Waiting;
