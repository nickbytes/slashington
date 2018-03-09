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
  margin-bottom: -10px;
  margin-top: 0;
  font-size: 80px;
  line-height: 92px;
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
          Slashington is best played with a modern <i>desktop</i> browser, like
          Chrome, Firefox, or{" "}
          <span
            style={{
              textDecoration: "line-through"
            }}
          >
            Safari
          </span>. It is designed to be played in one sitting and should take
          less than 30 mins.
        </MainText>

        <MainText>
          There is one audio and webcam interaction – please wear headphones and
          have your webcam ready now.
        </MainText>
        <BeginLink to={`/the-office`}>
          <MainText>
            You're nearly late for your job at Shapes Corp. You better get
            going.
          </MainText>
        </BeginLink>
      </CustomContainer>
    </SimpleScene>
  </div>
);

export default s0;
