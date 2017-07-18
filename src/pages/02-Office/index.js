import "../../vendor/devices.min.css";

import { Arrow, Clock } from "reline";
import Icon from "react-geomicons";
import { Blockquote, Container, Input } from "rebass";
import { Link } from "react-router-dom";
import { connect } from "funcup";
import React from "react";

import {
  addPlayerName,
  setNewPlayerName,
  showPlayerNameField,
  showPlayerOccupationField,
  startBurning,
  turnOnComputer
} from "../../updaters/updaters";
import CustomContainer from "../../components/CustomContainer";
import JobSelectionComponent from "../../components/JobSelectionComponent";
import MainText from "../../components/MainText";
import PhoneComponent from "../../components/PhoneComponent";
import Smoke from "../../components/Smoke";
import UserQuote from "../../components/UserQuote";
import Workspace from "../../components/Workspace";

const Office = props => {
  return (
    <div>
      <Container py={4}>
        <UserQuote>
          "Hello, I've forgotten my badge. Could I get a temporary one for
          today?"
        </UserQuote>
        <MainText>
          you ask the receptionist. She looks at you annoyed, but you're not
          bothered by it.
        </MainText>
        <MainText>
          Nothing is getting on your nerves today. Not the{" "}
          <button
            style={{
              fontFamily: "inherit",
              fontSize: "inherit",
              border: "0",
              borderBottom: "1px dotted",
              background: "none",
              outline: "0"
            }}
            onClick={e => props.update(startBurning)}
          >
            <div style={{ position: "relative" }}>
              burnt toast
              {props.startBurning && <Smoke />}
            </div>
          </button>
          that nearly caused a fire in your apartment, not your nosy super Derek
          asking about your plans to renew your lease, not your forgotten badge,
          and not the receptionist's crabby mood.
        </MainText>
        <MainText>
          It's Friday. It's the end of a long week. And tonight you're leaving
          New York City for Washington, DC to visit your brother and more
          importantly, his daughter Sam.
        </MainText>
      </Container>

      {props.startBurning &&
        <Container py={4}>
          <UserQuote>
            "Name{" "}
            <button
              style={{
                fontFamily: "inherit",
                fontSize: "inherit",
                lineHeight: "inherit",
                border: "0",
                background: "none",
                cursor: "pointer",
                borderBottom: "4px dotted",
                outline: "0"
              }}
              onClick={e => props.update(showPlayerNameField)}
            >
              please
            </button>."
          </UserQuote>
        </Container>}

      {props.playerNameVisible &&
        <Container py={4}>
          <form
            onSubmit={e => {
              e.preventDefault();
              props.update(addPlayerName);
            }}
            style={{
              display: "flex"
            }}
          >
            <Input
              defaultValue=""
              placeholder="First Name"
              value={props.newPlayerName}
              onChange={e => props.update(setNewPlayerName(e.target.value))}
              style={{
                border: "0",
                fontFamily: "'Courier Neue', courier, monospace",
                width: "200px",
                borderBottom: "2px dotted",
                marginRight: "35px"
              }}
            />

            <button style={{}} children={<Arrow right />} />
          </form>
        </Container>}

      {props.playerNameSaved &&
        <Container py={4}>
          <UserQuote>
            "Position{" "}
            <button
              style={{
                fontFamily: "inherit",
                fontSize: "inherit",
                lineHeight: "inherit",
                border: "0",
                background: "none",
                cursor: "pointer",
                borderBottom: "4px dotted",
                outline: "0"
              }}
              onClick={e => props.update(showPlayerOccupationField)}
            >
              please
            </button>."
          </UserQuote>
        </Container>}

      {props.playerOccupationVisible &&
        <Container py={4}>
          <JobSelectionComponent {...props} />
        </Container>}

      {props.playerOccupationFinished &&
        <div>
          <Container py={4}>
            <UserQuote>"Security question and answer please."</UserQuote>
          </Container>

          <Container py={4}>
            <MainText>You look back puzzled.</MainText>
          </Container>

          <Container py={4}>
            <UserQuote>"Could I have a hint?"</UserQuote>
          </Container>

          <Container py={4}>
            <MainText>
              The receptionist looks at you with a suspicious glance.
            </MainText>
            <UserQuote>
              "It looks like it is the name of a close friend or relatives pet +
              what type of animal."
            </UserQuote>
          </Container>

          <Container py={4}>
            <Input defaultValue="" placeholder="George" />
            <MainText>the</MainText>
            <Input defaultValue="" placeholder="Parrot" />
          </Container>
        </div>}

      {props.securityQuestionsAnswered &&
        <div>
          <Container py={4}>
            <MainText>More click-clacking on the keyboard.</MainText>
          </Container>

          <Container py={4}>
            <UserQuote>"Look towards the camera."</UserQuote>
            <Blockquote>"Here is your new badge."</Blockquote>
          </Container>
        </div>}

      {props.newBadgeReceived &&
        <Container py={4}>
          <MainText>
            Once you arrive at your desk, you turn on your{" "}
            <button
              style={{
                fontFamily: "inherit",
                fontSize: "inherit",
                border: "0",
                borderBottom: "1px dotted",
                background: "none",
                outline: "0"
              }}
              onClick={e => props.update(turnOnComputer)}
            >
              computer
            </button>.
          </MainText>
        </Container>}

      {props.workspaceVisible && <Workspace />}

      <CustomContainer>
        <MainText>
          You eject yourself from your desk and go grab a cup of{" "}
          {props.preferredBeverage}.
        </MainText>
      </CustomContainer>

      <CustomContainer>
        <MainText>
          When you get back to your desk, you see that you have a voicemail from
          your brother.
        </MainText>
        <MainText bg={"#e3e3e3"}>
          "Hey, you must be busy working. Anyway, we're looking forward to
          having you down this weekend. And listen, don't worry about a gift,
          Emma is just excited to have you down here this weekend. We all are.
          Hope work hasn't been stressing you out too much – I know how you bury
          yourself away from time to time. Okay well, I'll pick you up at the
          train station at normal time. Talk soon. "
        </MainText>
      </CustomContainer>

      {props.phoneVisible &&
        <PhoneComponent>
          <div>
            <h1>Hello</h1>
            <Icon name="clock" />
          </div>
        </PhoneComponent>}

      <CustomContainer>
        <MainText>You get back to work.</MainText>
      </CustomContainer>

      <CustomContainer bg={"#e3e3e3"}>
        <MainText>Email broken</MainText>
      </CustomContainer>

      <CustomContainer>
        <MainText>
          Something is wrong with your keyboard. As a {props.playerOccupation},
          it's pretty essential for you to have this type of special keyboard.
          While any version of this keyboard will work, you've been using this
          one for years.
        </MainText>
      </CustomContainer>

      <CustomContainer>
        <Blockquote>Keyboard issues?</Blockquote>
        <MainText>
          You look up and see {props.coworkerName}.
        </MainText>
      </CustomContainer>

      <CustomContainer>
        <Blockquote>
          Yea, for some reason every key is registering as only an t or z on the
          screen.
        </Blockquote>
      </CustomContainer>

      <CustomContainer>
        <Blockquote>
          Same thing happened to me about a year ago. I took it to a place near
          where I lived in DC. Fixed it up in a day, had it working good as new.
        </Blockquote>
      </CustomContainer>

      <CustomContainer>
        <Blockquote>
          I'm headed there this weekend. Where's the shop located?
        </Blockquote>
      </CustomContainer>

      <CustomContainer>
        <Blockquote>
          Crazy coincidence. It's right off the Amtrak stop. You can't miss it,
          south east corner of the Mall. Open on weekends too, can probably pick
          it up on your way back.
        </Blockquote>
      </CustomContainer>

      <Link to="/02.5-Train">Next</Link>
    </div>
  );
};

const map = state => ({
  playerNameVisible: state.playerNameVisible,
  playerNameSaved: state.playerNameSaved,
  playerOccupationVisible: state.playerOccupationVisible,
  playerOccupation: state.playerOccupation,
  playerOccupationFinished: state.playerOccupationFinished,
  preferredBeverage: state.preferredBeverage,
  phoneVisible: state.phoneVisible,
  startBurning: state.startBurning,
  newBadgeReceived: state.newBadgeReceived,
  workspaceVisible: state.workspaceVisible
});

export default connect(map)(Office);
