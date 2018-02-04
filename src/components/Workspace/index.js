import Icon from "react-geomicons";
import React from "react";

import { nsHelper } from "../../pages/s1/updaters";
import AreaChart from "../AreaChart";
import DesktopBackground from "./DesktopBackground";
import NotesApp from "../NotesApp";
import NotificationEvent from "./NotificationEvent";
import NotificationTopBar from "./NotificationTopBar";
import NotificationWindow from "./NotificationWindow";
import TopBar from "./TopBar";
import WorkspaceContainer from "./WorkspaceContainer";
import dunno from "../../images/dunno.jpg";
import galaxy from "../../images/galaxy.png";
import styled from "styled-components";

const InnerBar = styled.div`
  padding-left: 20px;
`;

const IconText = styled.span`
  color: rgba(255, 255, 255, 0.7);
  padding-left: 20px;
  line-height: 1rem;
`;

const NoButton = styled.button`
  font-weight: inherit;
  font-size: inherit;
  line-height: inherit;
  border: none;
  background: none;
  cursor: pointer;
  outline: 0;
`;

const SpaceContainer = styled.div`
  position: absolute;
  top: 50px;
  right: 20px;
  border: 1px dotted rgba(255, 255, 255, 0.5);
  width: 90px;
  height: 90px;
`;

const SpaceText = styled.h1`
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: 0.5rem;
  color: rgba(255, 255, 255, 1);
  text-shadow: 1px 1px 2px black;
  letter-spacing: 1px;
`;

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
  background-color: rgb(218, 216, 218);
  border: 1px solid rgb(218, 216, 218);
  width: 400px;
`;

const Workspace = props => (
  <WorkspaceContainer>
    <TopBar className="desktop-topBar">
      <InnerBar>
        <span role="img" aria-label="crystal ball">
          🔮
        </span>
        <IconText>Computer</IconText>
      </InnerBar>
      <div
        style={{
          paddingRight: "15px"
        }}
      >
        <span
          style={{
            paddingRight: "10px"
          }}
        >
          <NoButton onClick={e => props.update(nsHelper)}>
            <span role="img" aria-label="coffee">
              ☕️
            </span>
          </NoButton>
        </span>
        <span
          style={{
            paddingRight: "10px"
          }}
        >
          <span role="img" aria-label="seedling">
            🌱
          </span>
        </span>
        <time style={{ color: "white" }}>12:34</time>
      </div>
    </TopBar>
    <DesktopBackground className="desktop-bg">
      {props.children}

      <NotificationWindow className="desktop-notif">
        <NotificationTopBar />
        <NotificationEvent>
          <Icon name="clock" /> You have 39 meetings today.
        </NotificationEvent>
        <NotificationEvent>
          <Icon name="skull" /> You have 7 deadlines today.
        </NotificationEvent>
      </NotificationWindow>
      <NotesApp />
      <AreaChart />
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
      <SpaceContainer>
        <img
          src={galaxy}
          alt={"Space"}
          style={{
            width: "100%",
            maxWidth: "100%"
          }}
        />
        <SpaceText>Space</SpaceText>
      </SpaceContainer>
    </DesktopBackground>
  </WorkspaceContainer>
);

export default Workspace;
