import React, { Component } from "react";

import { scottArrives } from "../../updaters/updaters";
import Blinking from "../Blinking";

class BrokenEmail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wordJumble: ""
    };

    this.typingMess = this.typingMess.bind(this);
  }
  componentDidMount() {
    this.typingMess();
  }
  componentWillUnmount() {
    document.body.removeEventListener("keypress");
  }

  typingMess() {
    document.body.addEventListener("keypress", () => {
      if (this.state.wordJumble.length > 35) {
        this.props.update(scottArrives);
      } else {
        const textArray = ["n", "b", " "];
        const randomNumber = Math.floor(Math.random() * textArray.length);
        let wordzlol = this.state.wordJumble + textArray[randomNumber];
        this.setState({
          wordJumble: wordzlol
        });
      }
    });
  }
  render() {
    return (
      <div
        style={{
          backgroundColor: "rgb(218, 216, 218)",
          maxWidth: "600px",
          position: "relative",
          paddingTop: "16px",
          paddingBottom: "10px"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            textAlign: "center"
          }}
        >
          WorkplaceAIM
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center"
          }}
        >
          <h1
            style={{
              fontSize: "10px",
              paddingRight: "50px"
            }}
          >
            {"Scott"}
          </h1>
          <h2
            style={{
              fontSize: "9px"
            }}
          >
            Do you have a moment to chat? Could I come to your desk?
          </h2>
        </div>
        <div
          style={{
            border: "1px solid rgb(40, 44, 52)",
            margin: "10px 10px 0 10px",
            padding: "10px"
          }}
        >
          {this.state.wordJumble} <Blinking />
        </div>
      </div>
    );
  }
}

export default BrokenEmail;
