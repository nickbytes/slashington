import { Heading, Text } from "rebass";
import React from "react";

import CustomContainer from "../../components/CustomContainer";
import InProgress from "../../components/InProgress";

const Credits = props =>
  <div>
    <CustomContainer>
      <InProgress>
        An on-going list of people who deserve credit and thanks for helping me
        finish this game.
      </InProgress>
      <ul>
        <li>
          <Text>
            Alex, my real brother, for lending his voice and also allowing me to
            use his name.
          </Text>
        </li>
        <li>
          <Text>Pixel Lab</Text>
        </li>
      </ul>
      <Heading>Open Source</Heading>
      <ul>
        <li>
          <Text>React</Text>
        </li>
        <li>
          <Text>Jxnblk libs – Rebass, funcup, reline</Text>
        </li>
      </ul>
    </CustomContainer>
  </div>;

export default Credits;
