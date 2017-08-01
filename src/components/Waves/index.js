import React, { Component } from "react";
import ReactPlayer from "react-player";

class Waves extends Component {
  render() {
    return (
      <div>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=zmPzbZVUp3g"
          playing
          loop={true}
          controls={false}
        />
        <div>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=P1TX-xlVVWA"
            playing
            loop={true}
            controls={false}
            volume={0}
          />
        </div>
      </div>
    );
  }
}

export default Waves;
