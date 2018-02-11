import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

import { T_FF } from "../../utilities/constants";
import CustomContainer from "../../components/CustomContainer";
import MainText from "../../components/MainText";

const Bold = styled.h1`
  font-family: ${T_FF};
  font-weight: 700;
`;

const s0 = () => (
  <div>
    <CustomContainer>
      <Bold>Slashington</Bold>
      <Link to={`/the-office`}>
        <MainText>Begin</MainText>
      </Link>
    </CustomContainer>
    <CustomContainer>
      <Link to={`/credits`}>
        <MainText>Credits</MainText>
      </Link>
    </CustomContainer>
  </div>
);

export default s0;
