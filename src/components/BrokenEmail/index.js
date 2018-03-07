import React, { Component } from "react";

import { ns } from "../../updaters/ns";
import Blinking from "./Blinking";
import EmailContainer from "./EmailContainer";
import InputContainer from "./InputContainer";
import MessageName from "./MessageName";
import MessageText from "./MessageText";
import MessagesContainer from "./MessagesContainer";
import SingleMessage from "./SingleMessage";
import TopBar from "./TopBar";
import Draggable from "react-draggable";

class BrokenEmail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wordJumble: ""
    };
  }
  componentDidMount() {
    document.body.addEventListener("keypress", this.typingMess);
  }
  componentWillUnmount() {
    document.body.removeEventListener("keypress", this.typingMess);
  }

  typingMess = () => {
    if (this.state.wordJumble.length > 35) {
      this.props.update(ns("s1", "c22"));
    } else {
      const textArray = ["n", "b", " "];
      const randomNumber = Math.floor(Math.random() * textArray.length);
      let wordzlol = this.state.wordJumble + textArray[randomNumber];
      this.setState({
        wordJumble: wordzlol
      });
    }
  };
  render() {
    return (
      <Draggable handle=".handle">
        <EmailContainer className="handle">
          <TopBar>WorkplaceAIM ({36 - this.state.wordJumble.length})</TopBar>
          <MessagesContainer>
            <SingleMessage>
              <MessageName>audrey</MessageName>
              <MessageText>o n l i n e</MessageText>
            </SingleMessage>
            <SingleMessage>
              <MessageName>cristina</MessageName>
              <MessageText>sample text</MessageText>
            </SingleMessage>
            <SingleMessage>
              <MessageName>edouard</MessageName>
              <MessageText>YOW</MessageText>
            </SingleMessage>
            <SingleMessage>
              <MessageName>alexsingh</MessageName>
              <MessageText>
                Your friend's analogy can take the woodworker all the way to the
                origins of the universe
              </MessageText>
            </SingleMessage>
            <SingleMessage>
              <MessageName>james.ayres</MessageName>
              <MessageText>
                I have a complicated relationship with money
              </MessageText>
            </SingleMessage>
            <SingleMessage>
              <MessageName>jay_manday</MessageName>
              <MessageText>
                hmmm, i havn't played with these but p5.js is great for 3D web
                gl with tons and tons of documentation and knowledge
                infrasturcture
              </MessageText>
            </SingleMessage>
            <SingleMessage>
              <MessageName>tarngerine</MessageName>
              <MessageText>
                particiularly that sentence about artists needing to embody
                eternal truth rather than reacting to the world around them. all
                of a humans guesses at eternal truth are based on the world
                around them
              </MessageText>
            </SingleMessage>
            <SingleMessage>
              <MessageName>wes</MessageName>
              <MessageText>
                where can i get some stereoscopic tingles for my machines
              </MessageText>
            </SingleMessage>
            <SingleMessage>
              <MessageName>morgane</MessageName>
              <MessageText>
                well it’s built with unity and can technically export to any
                platform. i just export to iOS so i can run it on my phone. i
                could try to do webvr instead :thinking_face:
              </MessageText>
            </SingleMessage>

            <SingleMessage>
              <MessageName>scott</MessageName>
              <MessageText>
                @{this.props.playerNameSaved}, do you have a moment to chat?
                Could I come to your desk?
              </MessageText>
            </SingleMessage>
          </MessagesContainer>
          <InputContainer>
            {this.state.wordJumble} <Blinking />
          </InputContainer>
        </EmailContainer>
      </Draggable>
    );
  }
}

export default BrokenEmail;
