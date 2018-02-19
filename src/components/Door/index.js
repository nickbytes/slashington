import React, { Component } from "react";
import styled from "styled-components";

const PictureFrame = styled.div`
  width: ${props => (props.width ? "${props.width}" : "400px")};
  height: ${props => (props.height ? "${props.height}" : "600px")};
  box-shadow: -1px 1px 3px black;
`;

class Door extends Component {
  state = {
    src1: "",
    src2: "",
    src3: "",
    src4: ""
  };
  changeSrc = () => {
    console.log("cliking");
  };
  render() {
    return (
      <div>
        <h1>Door</h1>
        <PictureFrame />
        <PictureFrame />
        <PictureFrame />
        <PictureFrame />
      </div>
    );
  }
}

export default Door;
