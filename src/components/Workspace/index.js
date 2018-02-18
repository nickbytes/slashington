import Draggable from "react-draggable";
import React from "react";
import styled from "styled-components";

import AreaChart from "../AreaChart";
import DesktopBackground from "./DesktopBackground";
import EmailAssistant from "./EmailAssistant";
import LeftBar from "./LeftBar";
import Programs from "./Programs";
import RightBar from "./RightBar";
import TopBar from "./TopBar";
import WorkspaceContainer from "./WorkspaceContainer";
import place1 from "../../images/snow.jpg";

const WindowContainer = styled.div`
  position: absolute;
  top: 200px;
  left: 200px;
  background-color: ${props =>
    props.bgColor ? props.bgColor : "rgb(218, 216, 218)"};
  width: 400px;
  border: ${props =>
    props.bColor ? `1px solid ${props.bColor}` : `1px solid #323d47`};
`;

const WindowHeader = styled.div`
  background-color: ${props =>
    props.bgColor ? props.bgColor : "rgb(218, 216, 218)"};
  border-bottom: ${props =>
    props.bColor ? `1px solid ${props.bColor}` : `1px solid #323d47`};
`;

const WindowTitle = styled.h4`
  margin: 0;
  padding: 5px 0;
  text-align: center;
`;

const WindowBody = styled.div`
  margin: 0;
  padding: 5px;
  line-height: 0;

  > * {
    line-height: 1.3em;
  }
`;

const Raw = styled.img`
  width: 100%;
  max-width: 100%;
`;

const Workspace = props => (
  <WorkspaceContainer>
    <TopBar className="desktop-topBar">
      <LeftBar />
      <RightBar coffee {...props} />
    </TopBar>
    <DesktopBackground className="desktop-bg">
      {props.children}
      <Draggable>
        <WindowContainer bgColor={"rgba(104, 159, 182, 1.000)"}>
          <WindowHeader
            className="handle"
            bgColor={"rgba(83, 135, 245, 0.700)"}
          >
            <WindowTitle>{`Good Morning, ${props.playerNameSaved ||
              "Nick"}`}</WindowTitle>
          </WindowHeader>
          <WindowBody>
            <ul>
              <li>You have 39 meetings today.</li>
              <li>You have 7 deadlines today.</li>
            </ul>
          </WindowBody>
        </WindowContainer>
      </Draggable>
      <Draggable handle=".handle">
        <WindowContainer>
          <WindowHeader className="handle">
            <WindowTitle>Raw Photos</WindowTitle>
          </WindowHeader>
          <WindowBody>
            <Raw src={place1} alt={"something"} />
          </WindowBody>
        </WindowContainer>
      </Draggable>
      <Draggable handle=".handle">
        <WindowContainer bgColor={"#e5c273"} bColor={"#d29b62"}>
          <WindowHeader
            className="handle"
            bgColor={"rgba(230, 195, 109, 0.7)"}
            bColor={"#d29b62"}
          >
            <WindowTitle>Notes</WindowTitle>
          </WindowHeader>
          <WindowBody>
            <ul>
              <li> Research system dynamics </li>
              <li> Review Ethical Investments from Frontier Imaginaries </li>
              <li> Process emulation fever dream, due EOD. </li>
              <li> Military cybernetics ? ! ? ! </li>
              <li> 4, 8, 15, 16, 23, 42 </li>
            </ul>
          </WindowBody>
        </WindowContainer>
      </Draggable>
      <AreaChart />

      <Draggable handle=".handle">
        <div>
          <EmailAssistant />
        </div>
      </Draggable>
      <Programs />
    </DesktopBackground>
  </WorkspaceContainer>
);

export default Workspace;
