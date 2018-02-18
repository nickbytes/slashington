import Draggable from "react-draggable";
import Icon from "react-geomicons";
import React from "react";
import styled from "styled-components";

import AreaChart from "../AreaChart";
import DesktopBackground from "./DesktopBackground";
import EmailAssistant from "./EmailAssistant";
import LeftBar from "./LeftBar";
import NotificationEvent from "./NotificationEvent";
import NotificationTopBar from "./NotificationTopBar";
import NotificationWindow from "./NotificationWindow";
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
  border: ${props => (props.color ? props.color : "rgb(218, 216, 218)")};
  width: 400px;
`;

const WindowHeader = styled.div`
  background-color: ${props =>
    props.bgColor ? props.bgColor : "rgb(218, 216, 218)"};
  border: ${props => (props.color ? props.color : "rgb(218, 216, 218)")};
`;

const WindowTitle = styled.h4`
  margin: 0;
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
        <NotificationWindow className="desktop-notif">
          <NotificationTopBar> Agenda </NotificationTopBar>
          <NotificationEvent>
            <Icon name="clock" /> You have 39 meetings today.
          </NotificationEvent>
          <NotificationEvent>
            <Icon name="skull" /> You have 7 deadlines today.
          </NotificationEvent>
        </NotificationWindow>
      </Draggable>
      <Draggable>
        <WindowContainer>
          <WindowHeader>
            <WindowTitle>Raw Photos</WindowTitle>
          </WindowHeader>
          <WindowBody>
            <Raw src={place1} alt={"something"} />
          </WindowBody>
        </WindowContainer>
      </Draggable>
      <Draggable>
        <WindowContainer bgColor={"#e5c273"}>
          <WindowHeader bgColor={"#e5c273"}>
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

      <Draggable>
        <div>
          <EmailAssistant />
        </div>
      </Draggable>
      <Programs />
    </DesktopBackground>
  </WorkspaceContainer>
);

export default Workspace;
