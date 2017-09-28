import React, { Component } from "react";

import { scottArrives } from "../../updaters/updaters";
import Blinking from "./Blinking";
import EmailContainer from "./EmailContainer";
import InputContainer from "./InputContainer";
import MessageName from "./MessageName";
import MessageText from "./MessageText";
import MessagesContainer from "./MessagesContainer";
import SingleMessage from "./SingleMessage";
import TopBar from "./TopBar";

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
      <EmailContainer>
        <TopBar>WorkplaceAIM</TopBar>
        <MessagesContainer>
          <SingleMessage>
            <MessageName>Morgane</MessageName>
            <MessageText>
              well it’s built with unity and can technically export to any
              platform. i just export to iOS so i can run it on my phone. i
              could try to do webvr instead :thinking_face:
            </MessageText>
          </SingleMessage>

          <SingleMessage>
            <MessageName>Scott</MessageName>
            <MessageText>
              @{this.props.playerNameSaved}, do you have a moment to chat? Could
              I come to your desk?
            </MessageText>
          </SingleMessage>
        </MessagesContainer>
        <InputContainer>
          {this.state.wordJumble} <Blinking />
        </InputContainer>
      </EmailContainer>
    );
  }
}

export default BrokenEmail;
