// eslint-disable-next-line
/* global smokemachine, party */

import React, { Component } from "react";

class Smoke extends Component {
  componentDidMount() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    canvas.width = 1000;
    canvas.height = 500;

    window.party = smokemachine(ctx, [54, 16.8, 18.2]);

    window.party.start(); // start animating

    window.party.addsmoke(550, 400, 20); // wow we made smoke
  }

  render() {
    return (
      <canvas
        id="canvas"
        style={{
          position: "absolute",
          bottom: "-40px",
          left: "-520px",
          zIndex: "-10"
        }}
      />
    );
  }
}

export default Smoke;
