import React, { Component } from "react";

import { scottArrives } from "../../updaters/updaters";

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
      if (this.state.wordJumble.length > 60) {
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
          backgroundColor: "rgb(218, 216, 218)"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center"
          }}
        >
          <h1>
            {"Scott"}
          </h1>
          <h2>Do you have a moment to chat? Could I come to your desk?</h2>
        </div>
        <div style={{ border: "1px solid rgb(40, 44, 52)" }}>
          > {this.state.wordJumble}
        </div>
      </div>
    );
  }
}

export default BrokenEmail;
