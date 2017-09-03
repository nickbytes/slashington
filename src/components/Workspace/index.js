import { connect } from "funcup";
import Icon from "react-geomicons";
import React from "react";

import { coffeeClicked } from "../../updaters/updaters";
import AreaChart from "../AreaChart";
import beach from "../../images/beach.jpg";
import dunno from "../../images/dunno.jpg";
import galaxy from "../../images/galaxy.png";

const Workspace = props =>
  <div
    style={{
      padding: "4em 0",
      margin: "0 50px"
    }}
  >
    <div
      className="desktop-bg"
      style={{
        backgroundImage: `url(${beach})`,
        height: "600px",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        position: "relative"
      }}
    >
      <div
        className="desktop-topBar"
        style={{
          width: "100%",
          height: "27px",
          backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid black"
        }}
      >
        <div
          style={{
            paddingLeft: "20px"
          }}
        >
          <span>🔮</span>
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
              ☕️
            </button>
          </span>
          <span
            style={{
              paddingRight: "10px"
            }}
          >
            🌱
          </span>
          <time style={{ color: "white" }}>12:34</time>
        </div>
      </div>

      {props.children}

      <div
        className="desktop-notif"
        style={{
          border: "1px solid rgb(218, 216, 218)",
          width: "400px",
          margin: "40px",
          color: "rgba(0,0,0,0.7)",
          background: "rgba(218, 216, 218, 0.7)"
        }}
      >
        <div
          style={{
            width: "100%",
            height: "15px",
            backgroundColor: "rgb(218, 216, 218)"
          }}
        />
        <h1
          style={{
            padding: "0 15px",
            fontWeight: "normal",
            fontSize: "16px",
            letterSpacing: "1px"
          }}
        >
          <Icon name="clock" /> You have 39 meetings today.
        </h1>
        <h3
          style={{
            padding: "0 15px",
            fontWeight: "normal",
            fontSize: "16px",
            letterSpacing: "1px"
          }}
        >
          <Icon name="skull" /> You have 7 deadlines today.
        </h3>
      </div>
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
    </div>
  </div>;

const map = state => ({
  playerNameSaved: state.playerNameSaved
});

export default connect(map)(Workspace);
