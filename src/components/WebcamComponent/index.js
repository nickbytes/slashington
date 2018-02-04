import React, { Component } from "react";
import Webcam from "react-webcam";
import { cameraHelper } from "../../pages/s1/updaters";

class WebcamComponent extends Component {
  constructor(props) {
    super(props);

    this.takePhoto = this.takePhoto.bind(this);
    this.setRef = this.setRef.bind(this);
  }

  setRef = webcam => {
    this.webcam = webcam;
  };
  takePhoto() {
    const imageSrc = this.webcam.getScreenshot();

    this.props.update(cameraHelper(imageSrc));
  }
  render() {
    return (
      <div>
        <div
          style={{
            position: "relative"
          }}
        >
          <Webcam ref={this.setRef} audio={false} />
          <button
            onClick={this.takePhoto}
            style={{
              position: "absolute",
              left: "280px",
              bottom: "0"
            }}
          >
            Take Photo
          </button>
        </div>
      </div>
    );
  }
}

export default WebcamComponent;
