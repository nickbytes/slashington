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
            <div
              className="cd-screen cd-smart-loader"
              style={{
                backgroundColor: "rgb(48, 48, 48)"
              }}
            >
              <div
                style={{
                  display: "flex",
                  backgroundColor: "rgb(27, 29, 35)",
                  color: "white",
                  position: "relative",
                  height: "100%",
                  justifyContent: "flex-end",
                  flexDirection: "column",
                  paddingLeft: "10px",
                  paddingBottom: "40px"
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    height: "12px",
                    backgroundColor: "rgb(215, 218, 224)",
                    left: "0",
                    right: "0"
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      top: "5px",
                      left: "6px",
                      height: "2px",
                      width: "2px",
                      backgroundColor: "rgb(27, 29, 35)"
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: "5px",
                      left: "10px",
                      height: "2px",
                      width: "2px",
                      backgroundColor: "rgb(27, 29, 35)"
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: "5px",
                      left: "14px",
                      height: "2px",
                      width: "2px",
                      backgroundColor: "rgb(27, 29, 35)"
                    }}
                  />
                </div>
                <div
                  style={{
                    position: "relative",
                    backgroundColor: "rgb(27, 29, 35)",
                    margin: "0 0 20px",
                    width: "100px",
                    height: "100px"
                  }}
                >
                  <span
                    style={{
                      top: "3%",
                      left: "50%",
                      width: "2px",
                      height: "2px",
                      backgroundColor: "rgb(215, 218, 224)"
                    }}
                  />
                  <span
                    style={{
                      bottom: "3%",
                      left: "50%",
                      width: "2px",
                      height: "2px",
                      backgroundColor: "rgb(215, 218, 224)"
                    }}
                  />
                  <span
                    style={{
                      top: "50%",
                      left: "50%",
                      width: "2px",
                      height: "2px",
                      backgroundColor: "rgb(215, 218, 224)"
                    }}
                  />
                  <span
                    style={{
                      top: "50%",
                      left: "3%",
                      width: "2px",
                      height: "2px",
                      backgroundColor: "rgb(215, 218, 224)"
                    }}
                  />
                  <span
                    style={{
                      top: "50%",
                      right: "3%",
                      width: "2px",
                      height: "2px",
                      backgroundColor: "rgb(215, 218, 224)"
                    }}
                  />
                  <span
                    style={{
                      top: "74%",
                      right: "7%",
                      width: "2px",
                      height: "2px",
                      backgroundColor: "rgb(215, 218, 224)"
                    }}
                  />
                  <span
                    style={{
                      top: "74%",
                      left: "7%",
                      width: "2px",
                      height: "2px",
                      backgroundColor: "rgb(215, 218, 224)"
                    }}
                  />
                  <span
                    style={{
                      top: "11%",
                      left: "74%",
                      width: "2px",
                      height: "2px",
                      backgroundColor: "rgb(215, 218, 224)"
                    }}
                  />
                  <span
                    style={{
                      top: "11%",
                      right: "74%",
                      width: "2px",
                      height: "2px",
                      backgroundColor: "rgb(215, 218, 224)"
                    }}
                  />
                  <span
                    style={{
                      top: "28%",
                      left: "7%",
                      width: "2px",
                      height: "2px",
                      backgroundColor: "rgb(215, 218, 224)"
                    }}
                  />
                  <span
                    style={{
                      top: "90%",
                      right: "73%",
                      width: "2px",
                      height: "2px",
                      backgroundColor: "rgb(215, 218, 224)"
                    }}
                  />
                  <span
                    style={{
                      top: "90%",
                      left: "73%",
                      width: "2px",
                      height: "2px",
                      backgroundColor: "rgb(215, 218, 224)"
                    }}
                  />
                  <span
                    style={{
                      top: "28%",
                      right: "7%",
                      width: "2px",
                      height: "2px",
                      backgroundColor: "rgb(215, 218, 224)"
                    }}
                  />
                </div>
                <h1
                  style={{
                    position: "relative",
                    backgroundColor: "rgb(27, 29, 35)",
                    fontWeight: "normal",
                    margin: "0"
                  }}
                >
                  Hello, {this.props.playerNameSaved || "Nick"}
                </h1>
                <h2
                  style={{
                    position: "relative",
                    backgroundColor: "rgb(27, 29, 35)",
                    fontWeight: "normal",
                    margin: "0"
                  }}
                >
                  You have one voicemail.
                </h2>
                <button
                  style={{
                    position: "relative",
                    backgroundColor: "rgb(27, 29, 35)",
                    fontWeight: "normal",
                    margin: "10px 0 40px",
                    color: "rgba(255,255,255,1)",
                    alignItems: "flex-start",
                    textAlign: "center",
                    width: "80px",
                    border: "1px solid rgb(215, 218, 224)",
                    padding: "3px 5px 5px",
                    cursor: "pointer"
                  }}
                >
                  Play now?
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PhoneComponent;
