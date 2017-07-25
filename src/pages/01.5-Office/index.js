import "../../vendor/devices.min.css";

import { Arrow } from "reline";
import { Blockquote, Container, Input } from "rebass";
import { Link } from "react-router-dom";
import { connect } from "funcup";
import Icon from "react-geomicons";
import React from "react";

import {
  addPlayerName,
  addSecurityAnswers,
  receiveBadge,
  setNewPetName,
  setNewPetOwner,
  setNewPetType,
  setNewPlayerName,
  showPlayerNameField,
  showPlayerOccupationField,
  startBurning,
  turnOnComputer
} from "../../updaters/updaters";
import CustomContainer from "../../components/CustomContainer";
import DreamText from "../../components/DreamText";
import InProgress from "../../components/InProgress";
import JobSelectionComponent from "../../components/JobSelectionComponent";
import MainText from "../../components/MainText";
import PhoneComponent from "../../components/PhoneComponent";
import Smoke from "../../components/Smoke";
import UserQuote from "../../components/UserQuote";
import Workspace from "../../components/Workspace";

const Office = props => {
  return (
    <div
      style={{
        paddingBottom: "150px"
      }}
    >
      <CustomContainer>
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
          It's Friday. It's the end of a long week. And after work today you're
          headed to from New York to Washington, DC for your niece's birthday.
        </MainText>
      </CustomContainer>

      {props.startBurning &&
        <CustomContainer>
          <UserQuote pl={"300px"}>
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
        </CustomContainer>}

      {props.playerNameVisible &&
        <CustomContainer>
          {!props.playerNameSaved &&
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
            </form>}

          {props.playerNameSaved &&
            <UserQuote>
              "{props.playerNameSaved}."
            </UserQuote>}
        </CustomContainer>}

      {props.playerNameSaved &&
        <CustomContainer>
          <UserQuote pl={"300px"}>
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
        </CustomContainer>}

      {props.playerOccupationVisible &&
        <CustomContainer>
          {!props.playerOccupationFinished &&
            <JobSelectionComponent {...props} />}
          {props.playerOccupationFinished &&
            <UserQuote>
              "{props.playerOccupationSaved}."
            </UserQuote>}
        </CustomContainer>}

      {props.playerOccupationFinished &&
        <div>
          <CustomContainer>
            <UserQuote pl={"300px"}>
              "And what are the answers your security question?"
            </UserQuote>
          </CustomContainer>

          <Container py={4}>
            <MainText>You look back puzzled.</MainText>
          </Container>

          <Container py={4}>
            <UserQuote>"Uhhh, what's the question again?"</UserQuote>
          </Container>

          <Container py={4}>
            <MainText>
              The receptionist looks at you with a suspicious glance.
            </MainText>
            <UserQuote pl={"300px"}>
              "What is the name of a close friend or relative who owns a pet,
              the pets name, and the type of pet?"
            </UserQuote>
          </Container>

          <CustomContainer>
            <MainText>You don't remember filling out this question.</MainText>
          </CustomContainer>

          <CustomContainer>
            <form
              onSubmit={e => {
                e.preventDefault();
                props.update(addSecurityAnswers);
              }}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-end",
                justifyContent: "flex-start"
              }}
            >
              <Input
                defaultValue=""
                placeholder="Aunt Millie"
                value={props.newPetOwner}
                onChange={e => props.update(setNewPetOwner(e.target.value))}
                style={{
                  border: "0",
                  fontFamily: "'Courier Neue', courier, monospace",
                  width: "200px",
                  borderBottom: "2px dotted",
                  marginRight: "5px"
                }}
              />
              <span>'s</span>

              <Input
                defaultValue=""
                placeholder="parrot"
                value={props.newPetType}
                onChange={e => props.update(setNewPetType(e.target.value))}
                style={{
                  border: "0",
                  fontFamily: "'Courier Neue', courier, monospace",
                  width: "200px",
                  borderBottom: "2px dotted",
                  marginRight: "35px"
                }}
              />

              <Input
                defaultValue=""
                placeholder="George"
                value={props.newPetName}
                onChange={e => props.update(setNewPetName(e.target.value))}
                style={{
                  border: "0",
                  fontFamily: "'Courier Neue', courier, monospace",
                  width: "200px",
                  borderBottom: "2px dotted",
                  marginRight: "35px"
                }}
              />
              <div>
                <button style={{}} children={<Arrow right />} />
              </div>
            </form>
          </CustomContainer>
        </div>}

      {props.securityQuestionsAnswered &&
        <div>
          <CustomContainer>
            <MainText>More click-clacking on the keyboard.</MainText>
          </CustomContainer>

          <CustomContainer>
            <UserQuote pl={"300px"}>"Look towards the camera."</UserQuote>
          </CustomContainer>

          <CustomContainer>
            <InProgress>This is where the webcam will come in 👀</InProgress>
          </CustomContainer>

          <CustomContainer>
            <UserQuote pl={"300px"}>
              "Here is your new{" "}
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
                onClick={e => props.update(receiveBadge)}
              >
                badge
              </button>."
            </UserQuote>
          </CustomContainer>
        </div>}

      {props.newBadgeReceived &&
        <CustomContainer>
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
        </CustomContainer>}

      {props.workspaceVisible && <Workspace />}

      {props.coffeeClicked &&
        <CustomContainer>
          <MainText>
            You eject yourself from your desk and go grab a cup of{" "}
            {props.preferredBeverage}.
          </MainText>
        </CustomContainer>}

      {props.coffeeBreakOver &&
        <CustomContainer>
          <MainText>
            When you get back to your desk, you see that you have a voicemail
            from your brother.
          </MainText>
          <MainText bg={"#e3e3e3"}>
            "Hey, you must be busy working. Anyway, we're looking forward to
            having you down this weekend. And listen, don't worry about a gift,
            Emma is just excited to have you down here this weekend. We all are.
            Hope work hasn't been stressing you out too much – I know how you
            bury yourself away from time to time. Okay well, I'll pick you up at
            the train station at normal time. Talk soon. "
          </MainText>
        </CustomContainer>}

      {props.phoneVisible &&
        <PhoneComponent>
          <div>
            <h1>Hello</h1>
            <Icon name="clock" />
          </div>
        </PhoneComponent>}

      {props.voicemailOver &&
        <CustomContainer>
          <MainText>You get back to work.</MainText>
          <MainText>
            What did he mean by 'strange gift'...? You think back to Sam's last
            birthday...
          </MainText>
          <DreamText>
            barbeque, slipknot karaoke, did you have a few drinks...?
          </DreamText>
          <DreamText>
            what did you get her...? how could you forget this...?
          </DreamText>
          <MainText>
            It all feels dreamlike. You're a {props.playerOccupation}, you pay
            such great attention to detail, how could you forget something like
            this...?
          </MainText>
          <MainText>
            Maybe Alex <i>is</i> right. All this work is pushing you to the
            edge. This weekend, you won't take your laptop, you wont look at the
            feeds, you'll disconnect. You've just got to get through the next
            few hours and deadlines.
          </MainText>
        </CustomContainer>}

      {props.restartingWork &&
        <CustomContainer bg={"#e3e3e3"}>
          <MainText>Email broken</MainText>
        </CustomContainer>}

      {props.brokenKeyboard &&
        <div>
          <CustomContainer>
            <MainText>
              Something is wrong with your keyboard. As a{" "}
              {props.playerOccupation}, it's pretty essential for you to have
              this type of special keyboard. While any version of this keyboard
              will work, you've been using this one for years.
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
              Yea, for some reason every key is registering as only an t or z on
              the screen.
            </Blockquote>
          </CustomContainer>
          <CustomContainer>
            <Blockquote>
              Same thing happened to me about a year ago. I took it to a place
              near where I lived in DC. Fixed it up in a day, had it working
              good as new.
            </Blockquote>
          </CustomContainer>

          <CustomContainer>
            <Blockquote>
              I'm headed there this weekend. Where's the shop located?
            </Blockquote>
          </CustomContainer>

          <CustomContainer>
            <Blockquote>
              Crazy coincidence. It's right off the Amtrak stop. You can't miss
              it, south east corner of the Mall. Open on weekends too, can
              probably pick it up on your way back.
            </Blockquote>
          </CustomContainer>
          <Link to="/02.5-Train">Next</Link>
        </div>}
    </div>
  );
};

const map = state => ({
  playerNameVisible: state.playerNameVisible,
  playerNameSaved: state.playerNameSaved,
  playerOccupationVisible: state.playerOccupationVisible,
  playerOccupation: state.playerOccupation,
  playerOccupationFinished: state.playerOccupationFinished,
  playerOccupationSaved: state.playerOccupationSaved,
  preferredBeverage: state.preferredBeverage,
  phoneVisible: state.phoneVisible,
  startBurning: state.startBurning,
  newBadgeReceived: state.newBadgeReceived,
  workspaceVisible: state.workspaceVisible,
  securityQuestionsAnswered: state.securityQuestionsAnswered,
  coffeeClicked: state.coffeeClicked
});

export default connect(map)(Office);
