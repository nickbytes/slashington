import React, { Component } from "react";

class PhoneComponent extends Component {
  render() {
    return (
      <div
        style={{
          position: "fixed",
          top: "0",
          right: "25px"
        }}
      >
        <div className="cd-iphone-6 cd-scale-60 cd-center cd-padded-device cd-blueprint">
          <div className="cd-body">
            <div className="cd-sound" />
            <div className="cd-sleep" />
            <div className="cd-camera" />
            <div className="cd-ear" />
            <div className="cd-home" />
            <div className="cd-screen cd-smart-loader">
              <div
                style={{
                  display: "block !important",
                  color: "black !important"
                }}
              >
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PhoneComponent;
