import Clipboard from "react-feather/dist/icons/clipboard";
import Draggable from "react-draggable";
import React from "react";
import Sun from "react-feather/dist/icons/sun";
import styled, { keyframes } from "styled-components";

import {
  Raw,
  WindowBody,
  WindowContainer,
  WindowHeader,
  WindowTitle
} from "../Workspace";
import { ns } from "../../updaters/ns";
import Clickable from "../Clickable";
import LeftBar from "../Workspace/LeftBar";
import NextChapter from "../NextChapter";
import RightBar from "../Workspace/RightBar";
import TopBar from "../Workspace/TopBar";
import WorkspaceContainer from "../Workspace/WorkspaceContainer";
import frailty from "../../images/frailty.png";
import good_glitch from "../../images/gifs/good_glitch.gif";
import place1 from "../../images/keys.jpg";
import place2 from "../../images/bridge.png";
import plains from "../../images/plains.jpg";
import truth from "../../images/gifs/truth.gif";

const DesktopBackground = styled.div`
  background-color: rgba(31, 34, 40, 1);
  background-image: url(${plains});
  background-position: center center;
  background-size: cover;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const PoemText = styled.p`
  color: #fff;
  font-style: italic;
  margin: 0 0 15px;
  padding: 0 15px;

  &:first-of-type {
    padding-top: 12px;
  }
`;

const shake = keyframes`
  from {
    transform: translate(-1px, 0px);
  }

  to {
    transform: translate(1px, 0px);
  }
`;

const ShakyWindow = WindowContainer.extend`
  animation: ${shake} 0.1s linear infinite;
`;

const WhiteWindow = WindowTitle.extend`
  color: #fff;
`;

const Haywire = styled.div`
  background-color: rgba(254, 77, 135, 0.5);
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

const BlackWindow = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  width: 400px;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: 600px;
  transform: rotate3d(2, -1, -1, -0.2turn);
`;

const BlueWindow = styled.div`
  background-color: rgba(81, 182, 195, 0.9);
  width: 400px;
  position: absolute;
  top: 0;
  right: 35%;
  bottom: 0;
  height: 600px;
  transform: rotate3d(2, -1, -1, -0.2turn);
`;

const YellowWindow = styled.div`
  background-color: rgba(230, 170, 64, 0.8);
  width: 400px;
  position: absolute;
  top: 40%;
  right: 0;
  transform: rotate3d(2, -1, -1, -0.2turn);
  bottom: 0;
  height: 600px;
`;

const OliveWorkspace = props => (
  <WorkspaceContainer>
    <TopBar className="desktop-topBar">
      <LeftBar />
      <RightBar coffee={props.coffee} {...props} />
    </TopBar>
    <DesktopBackground className="desktop-bg">
      {props.children}
      {props.haywire && [
        <Haywire key="haywireback" />,
        <BlackWindow key="blackwindow" />,
        <YellowWindow key="YellowWindow" />,
        <BlueWindow key="BlueWindow" />
      ]}

      <Draggable>
        <WindowContainer
          style={{ right: "100px", top: "55px" }}
          bgColor={"rgba(104, 159, 182, 1.000)"}
          haywire
        >
          <WindowHeader
            className="handle"
            bgColor={"rgba(83, 135, 245, 0.700)"}
            haywire
          >
            <WindowTitle>
              <Sun size={18} style={{ marginRight: "5px" }} />
              <span>{`Good Morning, ${props.nieceName || "Olive"}`}</span>
            </WindowTitle>
          </WindowHeader>
          <WindowBody>
            <Raw src={good_glitch} alt={"something"} />
          </WindowBody>
        </WindowContainer>
      </Draggable>
      <Draggable handle=".handle">
        <WindowContainer haywire style={{ top: "40%", left: "30%" }}>
          <WindowHeader haywire className="handle">
            <WindowTitle>
              <span>Device per source</span>
            </WindowTitle>
          </WindowHeader>
          <WindowBody haywire>
            <Raw src={place1} alt={"something"} />
          </WindowBody>
        </WindowContainer>
      </Draggable>
      <Draggable handle=".handle">
        <WindowContainer haywire style={{ top: "50%", left: "50%" }}>
          <WindowHeader haywire className="handle">
            <WindowTitle>
              <span>Fekkfyzystem</span>
            </WindowTitle>
          </WindowHeader>
          <WindowBody haywire>
            <Raw src={place2} alt={"something"} />
          </WindowBody>
        </WindowContainer>
      </Draggable>

      <Draggable handle=".handle">
        <WindowContainer haywire style={{ top: "60%", left: "10%" }}>
          <WindowHeader haywire className="handle">
            <WindowTitle>
              <span>Frailty Stow</span>
            </WindowTitle>
          </WindowHeader>
          <WindowBody haywire>
            <Raw src={frailty} alt={"something"} />
          </WindowBody>
        </WindowContainer>
      </Draggable>

      <Draggable handle=".handle">
        <WindowContainer haywire style={{ top: "10%", left: "10%" }}>
          <WindowHeader haywire className="handle">
            <WindowTitle>
              <span>Raw recording</span>
            </WindowTitle>
          </WindowHeader>
          <WindowBody haywire>
            <Raw src={truth} alt={"something"} />
          </WindowBody>
        </WindowContainer>
      </Draggable>
      <Draggable handle=".handle">
        <WindowContainer
          haywire
          style={{ right: "123px", top: "185px" }}
          bgColor={"#e5c273"}
          bColor={"#d29b62"}
        >
          <WindowHeader
            haywire
            className="handle"
            bgColor={"rgba(230, 195, 109, 0.7)"}
            bColor={"#d29b62"}
          >
            <WindowTitle>
              <Clipboard size={18} style={{ marginRight: "5px" }} />
              <span>Notes</span>
            </WindowTitle>
          </WindowHeader>
          <WindowBody haywire>
            <ul>
              <li>
                {props.leadPet}/{props.petThree} distrust?
              </li>
              <li>Research system dynamics</li>
              <li>Connections between emulation fever dreams</li>
              <li>Not keen on parasitic algorithms</li>
              <li>Has {props.playerNameSaved} had any memory damage?</li>
            </ul>
          </WindowBody>
        </WindowContainer>
      </Draggable>

      <Draggable handle=".handle">
        <ShakyWindow
          haywire
          style={{ right: "calc(50% - 180px)", top: "30%" }}
          bgColor={"#fe4d87"}
          bColor={"#e2194e"}
        >
          <WindowHeader
            haywire
            className="handle"
            bgColor={"rgba(254, 77, 135, 0.7)"}
            bColor={"#e2194e"}
          >
            <WhiteWindow>
              <span>READ HERE {props.playerNameSaved}</span>
            </WhiteWindow>
          </WindowHeader>
          <WindowBody haywire>
            <PoemText>Ooooo Oooo</PoemText>
            <PoemText>Ooooooooooo Oooooooo</PoemText>
            <PoemText>You delivered the keyboard</PoemText>
            <PoemText>But you still hold something more</PoemText>
            <PoemText>Of Slashington, you still have your reveries,</PoemText>
            <PoemText>Messenger, no more, you leave me your memories.</PoemText>
            {!props.haywire && (
              <PoemText>
                <Clickable
                  onClick={() => props.update(ns("s6", "c40"))}
                  bgColor={"transparent"}
                >
                  <span
                    role="img"
                    aria-label="sparkles"
                    style={{
                      fontSize: "26px"
                    }}
                  >
                    ✨
                  </span>
                </Clickable>
              </PoemText>
            )}
            {props.haywire && (
              <PoemText>
                <NextChapter to={`/good-messenger`} />
              </PoemText>
            )}
          </WindowBody>
        </ShakyWindow>
      </Draggable>
    </DesktopBackground>
  </WorkspaceContainer>
);

export default OliveWorkspace;
