import Icon from "react-geomicons";
import React from "react";

import AreaChart from "../AreaChart";
import beach from "../../images/beach.jpg";
import dunno from "../../images/dunno.jpg";

const Workspace = () =>
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
          <time style={{ color: "white" }}>12:34</time>
        </div>
      </div>

      <div
        className="desktop-notif"
        style={{
          border: "1px solid rgb(157, 165, 180)",
          width: "400px",
          margin: "40px",
          color: "rgba(0,0,0,0.7)",
          background: "rgba(157, 165, 180, 0.7)"
        }}
      >
        <div
          style={{
            width: "100%",
            height: "15px",
            backgroundColor: "rgb(157, 165, 180)"
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
          backgroundColor: "gray",
          border: "1px solid gray",
          width: "400px"
        }}
      >
        <img
          style={{
            width: "100%",
            maxWidth: "100%"
          }}
          src={dunno}
        />
      </div>
    </div>
  </div>;

export default Workspace;
