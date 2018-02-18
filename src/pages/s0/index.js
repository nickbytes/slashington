import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

import { T_FF } from "../../utilities/constants";
import CustomContainer from "../../components/CustomContainer";
import MainText from "../../components/MainText";

import train from "../../images/train-sample.jpeg";

const Bold = styled.h1`
  font-family: ${T_FF};
  font-weight: 700;
`;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;
`;

const BeginLink = styled(Link)`
  margin: 20px 0 0 0;
  display: block;
`;

const s0 = () => (
  <div>
    <CustomContainer>
      <Bold>Slashington</Bold>
      <Image src={train} alt="Slashington" />
      <MainText>
        Slashington is best played with a modern browser, like Chrome, Firefox,
        or Safari.
      </MainText>
      <MainText>
        At one point in the game you will be asked to use your computer's
        camera, this image will only be saved to your computer. If you would
        still not like to use your camera, you will be able to continue.
      </MainText>
      <MainText>
        The game features music and audio effects, it is best played wearing
        headphones.
      </MainText>
      <BeginLink to={`/the-office`}>
        <MainText>Start</MainText>
      </BeginLink>
    </CustomContainer>
    <CustomContainer>
      <Link to={`/credits`}>
        <MainText>Credits</MainText>
      </Link>
    </CustomContainer>
  </div>
);

export default s0;
