import FlexContainer from "react-styled-flexbox";
import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

import { T_FF } from "../../utilities/constants";
import MainText from "../../components/MainText";

const AbsoluteWrapper = styled(FlexContainer)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Bold = styled.h1`
  font-family: ${T_FF};
  font-weight: 700;
`;

const input =
  "[Learning Gardens](https://learning-gardens.co/), Fantom, Commander Keen, Seers' Catalogue, Night in the Woods, Kentucky Route Zero, Choose Your Own Adventure, Morgane, James, Ed, Dempsey, Kunal, Ryan, Postlight Humans, Slade House, Eric, Jumpcity Records, Tom Riddle";

const credits = () => (
  <AbsoluteWrapper justifyCenter itemsCenter directionColumn>
    <FlexContainer justifyCenter itemsCenter directionColumn>
      <Bold>The End</Bold>

      <Bold>Thank you for playing, and thank you to the following people.</Bold>

      <MainText>
        <ReactMarkdown source={input} />
      </MainText>
    </FlexContainer>
  </AbsoluteWrapper>
);

export default credits;
