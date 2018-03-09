import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

import { T_FF } from "../../utilities/constants";
import CustomContainer from "../../components/CustomContainer";
import MainText from "../../components/MainText";
import SimpleScene from "../../components/SimpleScene";

const Bold = styled.h1`
  font-family: ${T_FF};
  font-weight: 700;
  margin-top: 50px;
  margin-bottom: 220px;
`;

const input =
  "Learning Gardens crew, Commander Keen, Fantom, Seers' Catalogue, Night in the Woods, Kentucky Route Zero, Choose Your Own Adventure, Postlight people, Slade House, Jumpcity Records, Tom Riddle, Borne, friends who asked about the game, Konditori, Precita Park Cafe";

const credits = () => (
  <div>
    <SimpleScene isVisible>
      <CustomContainer>
        <Bold>The End</Bold>
        <MainText>Thanks to the following people and projects.</MainText>
        <MainText>
          <ReactMarkdown source={input} />
        </MainText>
        <MainText>
          <i>Questions? Comments? Bugs?</i>
        </MainText>
        <MainText>Email me at nick @ nickbytes dot com.</MainText>
      </CustomContainer>
    </SimpleScene>
  </div>
);

export default credits;
