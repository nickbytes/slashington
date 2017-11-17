import Icon from "react-geomicons";
import React from "react";

import { coffeeClicked } from "../../updaters/updaters";
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

const Workspace = props => (
  <WorkspaceContainer>
    <TopBar className="desktop-topBar">
      <div
        style={{
          paddingLeft: "20px"
        }}
      >
        <span role="img" aria-label="crystal ball">
          🔮
        </span>
        <span
          style={{
            color: "rgba(255,255,255,0.7)",
            paddingLeft: "20px",
            lineHeight: "1rem"
          }}
        >
          Computer
        </span>
      </div>
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
          <button
            style={{
              fontFamily: "inherit",
              fontSize: "inherit",
              lineHeight: "inherit",
              border: "0",
              background: "none",
              cursor: "pointer",
              outline: "0"
            }}
            onClick={e => props.update(coffeeClicked)}
          >
            <span role="img" aria-label="coffee">
              ☕️
            </span>
          </button>
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
      <div
        style={{
          position: "absolute",
          top: "200px",
          left: "200px",
          backgroundColor: "rgb(218, 216, 218)",
          border: "1px solid rgb(218, 216, 218)",
          width: "400px"
        }}
      >
        <div>
          <h1
            style={{
              margin: "0",
              padding: "5px 0 6px",
              fontSize: "0.85rem",
              fontWeight: "normal",
              textAlign: "center"
            }}
          >
            Window
          </h1>
        </div>
        <img
          style={{
            width: "100%",
            maxWidth: "100%"
          }}
          src={dunno}
          alt={"dunno"}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "50px",
          right: "20px",
          border: "1px dotted rgba(255,255,255,0.5)",
          width: "90px",
          height: "90px"
        }}
      >
        <img
          src={galaxy}
          alt={"Space"}
          style={{
            width: "100%",
            maxWidth: "100%"
          }}
        />
        <h1
          style={{
            margin: "0",
            padding: "0",
            textAlign: "center",
            fontSize: "0.5rem",
            color: "rgba(255,255,255,1)",
            textShadow: "1px 1px 2px black",
            letterSpacing: "1px"
          }}
        >
          Space
        </h1>
      </div>
    </DesktopBackground>
  </WorkspaceContainer>
);

export default Workspace;
