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

import DollarSign from "react-feather/dist/icons/dollar-sign";
import Lock from "react-feather/dist/icons/lock";
import Eye from "react-feather/dist/icons/eye";
import Watch from "react-feather/dist/icons/watch";
import Briefcase from "react-feather/dist/icons/briefcase";
import Sun from "react-feather/dist/icons/sun";
import Clipboard from "react-feather/dist/icons/clipboard";
import Camera from "react-feather/dist/icons/camera";

const WindowContainer = styled.div`
  position: absolute;
  background-color: ${props =>
    props.bgColor ? props.bgColor : "rgb(218, 216, 218)"};
  width: 400px;
  border: ${props =>
    props.bColor ? `1px solid ${props.bColor}` : `1px solid #323d47`};
  z-index: 1;
`;

const WindowHeader = styled.div`
  background-color: ${props =>
    props.bgColor ? props.bgColor : "rgb(218, 216, 218)"};
  border-bottom: ${props =>
    props.bColor ? `1px solid ${props.bColor}` : `1px solid #323d47`};

  &:hover {
    cursor: pointer;
  }
`;

const WindowTitle = styled.h4`
  margin: 0;
  padding: 5px 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
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

const ListItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 15px;
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
        <WindowContainer
          style={{ right: "100px", top: "55px" }}
          bgColor={"rgba(104, 159, 182, 1.000)"}
        >
          <WindowHeader
            className="handle"
            bgColor={"rgba(83, 135, 245, 0.700)"}
          >
            <WindowTitle>
              <Sun size={18} style={{ marginRight: "5px" }} />
              <span>{`Good Morning, ${props.playerNameSaved || "Nick"}`}</span>
            </WindowTitle>
          </WindowHeader>
          <WindowBody>
            <ul>
              <ListItem>
                <Briefcase style={{ marginRight: "10px" }} />
                <span>You have 39 meetings today.</span>
              </ListItem>
              <ListItem>
                <Watch style={{ marginRight: "10px" }} />
                <span>You have 7 deadlines today.</span>
              </ListItem>
              <ListItem>
                <Lock style={{ marginRight: "10px" }} />
                <span>You have not enabled 2FA.</span>
              </ListItem>
              <ListItem>
                <Eye style={{ marginRight: "10px" }} />
                <span>You yearly review is in 3 days.</span>
              </ListItem>
              <ListItem>
                <DollarSign style={{ marginRight: "10px" }} />
                <span>
                  You have not contributed to your 401k, would you like to
                  start?
                </span>
              </ListItem>
            </ul>
          </WindowBody>
        </WindowContainer>
      </Draggable>
      <Draggable handle=".handle">
        <WindowContainer style={{ top: "40%", left: "30%" }}>
          <WindowHeader className="handle">
            <WindowTitle>
              <Camera size={18} style={{ marginRight: "5px" }} />
              <span>Raw Photos</span>
            </WindowTitle>
          </WindowHeader>
          <WindowBody>
            <Raw src={place1} alt={"something"} />
          </WindowBody>
        </WindowContainer>
      </Draggable>
      <Draggable handle=".handle">
        <WindowContainer
          style={{ right: "123px", top: "185px" }}
          bgColor={"#e5c273"}
          bColor={"#d29b62"}
        >
          <WindowHeader
            className="handle"
            bgColor={"rgba(230, 195, 109, 0.7)"}
            bColor={"#d29b62"}
          >
            <WindowTitle>
              <Clipboard size={18} style={{ marginRight: "5px" }} />
              <span>Notes</span>
            </WindowTitle>
          </WindowHeader>
          <WindowBody>
            <ul>
              <li>Research system dynamics</li>
              <li>Review Ethical Investments from Frontier Imaginaries</li>
              <li>Process emulation fever dream, due EOD.</li>
              <li>Military cybernetics?!?!</li>
              <li>4, 8, 15, 16, 23, 42</li>
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
