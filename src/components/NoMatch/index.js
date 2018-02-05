import { Link } from "react-router-dom";
import FlexContainer from "react-styled-flexbox";
import React from "react";
import styled from "styled-components";

import MainText from "../MainText";

const AbsoluteWrapper = styled(FlexContainer)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const NoMatch = () => (
  <AbsoluteWrapper justifyCenter itemsCenter directionColumn>
    <FlexContainer justifyCenter itemsCenter directionColumn>
      <MainText>Oh, no! Looks like something went wrong!</MainText>
      <Link to={`/`}>
        <MainText>Back to the beginning.</MainText>
      </Link>
    </FlexContainer>
  </AbsoluteWrapper>
);

export default NoMatch;
