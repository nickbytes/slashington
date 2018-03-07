import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

import { T_FF } from "../../utilities/constants";
import CustomContainer from "../../components/CustomContainer";
import MainText from "../../components/MainText";
import SimpleScene from "../../components/SimpleScene";
import trainmoving_glitch from "../../images/gifs/trainmoving_glitch.gif";

const Bold = styled.h1`
  font-family: ${T_FF};
  font-weight: 700;
  margin-bottom: 5px;
  margin-top: 0;
`;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
  margin-bottom: 35px;
`;

const BeginLink = styled(Link)`
  margin: 20px 0 0 0;
  display: block;
`;

const s0 = () => (
  <div>
    <SimpleScene isVisible>
      <CustomContainer>
        <Bold>Slashington</Bold>
        <MainText>
          A semi-fictional, interactive whirlwind by{" "}
          <a href="http://nickbytes.com">Nick Beattie</a>.
        </MainText>
        <Image src={trainmoving_glitch} alt="Slashington" />
        <MainText>
          Slashington is best played with a modern browser, like Chrome,
          Firefox, or Safari. It is best played wearing headphones, with a
          webcam available.
        </MainText>
        <MainText />
        <BeginLink to={`/the-office`}>
          <MainText>Start</MainText>
        </BeginLink>
      </CustomContainer>
    </SimpleScene>
  </div>
);

export default s0;
