import React, { Component } from "react";
import { Link } from "react-router-dom";

class StartGame extends Component {
  render() {
    return (
      <div>
        <p>
          Aurora Metropolis is a semi-fictional interactive story. It is played
          best on a modern desktop browser (Chrome, Safari, Firefox). The game
          has
          an audio component, with transcripts provided.
        </p>
        <Link to={`/01-Breakfast`}>Begin</Link>
      </div>
    );
  }
}

export default StartGame;
