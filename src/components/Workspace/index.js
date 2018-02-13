import Draggable, { DraggableCore } from "react-draggable";
import Icon from "react-geomicons";
import React from "react";
import styled from "styled-components";

import { nsHelper } from "../../pages/s1/updaters";
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
import dunno from "../../images/dunno.jpg";

const WindowText = styled.h1`
  margin: 0;
  padding: 5px 0 6px;
  font-size: 0.85rem;
  font-weight: normal;
  text-align: center;
`;

const WindowContainer = styled.div`
  position: absolute;
  top: 200px;
  left: 200px;
  background-color: ${props =>
    props.color ? props.color : "rgb(218, 216, 218)"};
  border: ${props => (props.color ? props.color : "rgb(218, 216, 218)")};
  width: 400px;
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
          <NotificationTopBar>Agenda</NotificationTopBar>
          <NotificationEvent>
            <Icon name="clock" /> You have 39 meetings today.
          </NotificationEvent>
          <NotificationEvent>
            <Icon name="skull" /> You have 7 deadlines today.
          </NotificationEvent>
        </NotificationWindow>
      </Draggable>

      <Draggable>
        <WindowContainer color={"#e5c273"}>
          <div>
            <WindowText>Notes</WindowText>
          </div>
          <div>
            <ul>
              <li>Research system dynamics</li>
              <li>Review Ethical Investments from Frontier Imaginaries</li>
              <li>Process emulation fever dream, due EOD.</li>
              <li>Military cybernetics?!?!</li>
              <li>4, 8, 15, 16, 23, 42</li>
            </ul>
          </div>
        </WindowContainer>
      </Draggable>

      <AreaChart />

      <Draggable>
        <WindowContainer>
          <div>
            <WindowText>Window</WindowText>
          </div>
          <img
            style={{
              width: "100%",
              maxWidth: "100%"
            }}
            src={dunno}
            alt={"dunno"}
          />
        </WindowContainer>
      </Draggable>

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
