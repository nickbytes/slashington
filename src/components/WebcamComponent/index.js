import { connect } from "funcup";
import React, { Component } from "react";
import Webcam from "react-webcam";

import { receiveBadge } from "../../updaters/updaters";
import UserQuote from "../UserQuote";
import YourNewBadge from "../YourNewBadge";
import buttonStyle from "../../utilities/buttonStyle";

class WebcamComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoSrc: ""
    };

    this.takePhoto = this.takePhoto.bind(this);
    this.setRef = this.setRef.bind(this);
  }

  setRef = webcam => {
    this.webcam = webcam;
  };
  takePhoto() {
    const imageSrc = this.webcam.getScreenshot();

    this.setState({
      photoSrc: imageSrc
    });
  }
  render() {
    return (
      <div>
        {this.state.photoSrc ? (
          <div>
            <UserQuote>
              "Here is your new{" "}
              <button
                style={buttonStyle}
                onClick={e => this.props.update(receiveBadge)}
              >
                badge
              </button>."
            </UserQuote>
            {this.props.newBadgeReceived && (
              <YourNewBadge
                imgSrc={this.state.photoSrc}
                playerName={this.props.playerNameSaved}
                playerOccupation={this.props.playerOccupationSaved}
              />
            )}
          </div>
        ) : (
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
                left: "50%",
                right: "50%",
                bottom: "0"
              }}
            >
              Take Photo
            </button>
          </div>
        )}
      </div>
    );
  }
}

const map = state => ({
  newBadgeReceived: state.newBadgeReceived,
  playerNameSaved: state.playerNameSaved,
  playerOccupationSaved: state.playerOccupationSaved
});

export default connect(map)(WebcamComponent);
