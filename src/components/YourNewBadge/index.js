import Barcode from "react-barcode";
import React from "react";
import styled from "styled-components";

import BadgeButton from "./BadgeButton";
import YourFace from "./YourFace";
import company from "../../images/company.png";
import { ns } from "../../updaters/ns";

const OuterContainer = styled.div`
  width: 280px;
  margin: 0;
  border: 2px solid black;
  padding: 25px 25px 0;
  text-align: center;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px;
  position: relative;
`;

const InnerContainer = styled.div`
  width: 90px;
  height: 10px;
  border-radius: 8px;
  border: 2px solid black;
  margin: 0 auto;
  top: 18px;
  position: absolute;
  left: calc(50% - 45px);
`;

const Logo = styled.img`
  width: 99px;
  margin: 0 auto;
`;

const NameSlot = styled.h1`
  font-size: 16px;
  margin: 0;
  text-align: center;
  font-weight: bold;
`;

const OccupationSlot = styled.h2`
  font-size: 16px;
  margin: 0;
  text-align: center;
`;

const YourNewBadge = props => (
  <div>
    <OuterContainer>
      <InnerContainer />
      <Logo src={company} alt={"Corp A"} />
      <BadgeButton onClick={() => props.update(ns("s1", "c15"))}>
        <YourFace src={props.imgSrc} alt={"Definitely you."} />
      </BadgeButton>
      <div>
        <NameSlot>{props.playerName}</NameSlot>
        <OccupationSlot>{props.playerOccupation}</OccupationSlot>
      </div>

      <div>
        <Barcode width={1.5} value={`${props.playerName}.n325938`} />
      </div>
    </OuterContainer>
  </div>
);

export default YourNewBadge;
