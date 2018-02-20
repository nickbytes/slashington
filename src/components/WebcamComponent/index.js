import React, { Component } from "react";
import Webcam from "react-webcam";
import { cameraHelper } from "../../pages/s1/updaters";
import styled from "styled-components";

const Button = styled.button`
  position: absolute;
  left: calc(50% - 85px);
  width: 170px;
  bottom: 20px;
  background-color: #abb2c0;
  border: none;
  color: #000;
  font-size: 22px;
  line-height: 26px;
  border-radius: 3px;
  padding: 7px 12px;
  border: 4px double #000;
`;

const Container = styled.div`
  width: 640px;
  position: relative;
`;

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
        <Container>
          <Webcam ref={this.setRef} audio={false} />
          <Button onClick={this.takePhoto} style={{}}>
            Take Photo
          </Button>
        </Container>
      </div>
    );
  }
}

export default WebcamComponent;
