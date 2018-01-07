import { Arrow, Container } from "rebass";
import { Link } from "react-router-dom";
import { connect } from "funcup";
import React from "react";

import {
  addPlayerName,
  addSecurityAnswers,
  restartWork,
  setNewPetName,
  setNewPetOwner,
  setNewPetType,
  setNewPlayerName,
  showPhone,
  showPlayerNameField,
  showPlayerOccupationField,
  startBurning,
  turnOnComputer
} from "../../../updaters/updaters";
import { showNameQuestion, showReceptionist } from "./updaters";
import BrokenEmail from "../../../components/BrokenEmail";
import CustomContainer from "../../../components/CustomContainer";
import DreamText from "../../../components/DreamText";
import JobSelectionComponent from "../../../components/JobSelectionComponent";
import MainText from "../../../components/MainText";
import NewInput from "../../../components/NewInput";
import NextButton from "../../../components/NextButton";
import NotesApp from "../../../components/NotesApp";
import PhoneComponent from "../../../components/PhoneComponent";
import SimpleScene from "../../../components/SimpleScene";
import Smoke from "../../../components/Smoke";
import UserQuote from "../../../components/UserQuote";
import WebcamComponent from "../../../components/WebcamComponent";
import Workspace from "../../../components/Workspace";
import buttonStyle from "../../../utilities/buttonStyle";
import keyboard from "../../../images/keyboard.jpg";

const s01eWork = props => (
  <div>
    <SimpleScene isVisible={props.initialBlock}>
      <CustomContainer>
        <UserQuote>
          "Hello, I've forgotten my badge. Could I get a temporary one for
          today?"
        </UserQuote>
        <NextButton onClick={() => props.update(showReceptionist)} />
      </CustomContainer>
    </SimpleScene>
    <SimpleScene isVisible={props.receptionistVisible}>
      <CustomContainer>
        <MainText>
          The receptionist looks at you, annoyed. You're not bothered by it.
        </MainText>
        <MainText>
          Nothing is getting on your nerves today. Not the{" "}
          <button style={buttonStyle} onClick={e => props.update(startBurning)}>
            <div style={{ position: "relative" }}>
              burnt toast
              {props.startBurning && <Smoke />}
            </div>
          </button>
          that nearly caused a fire in your apartment, not your nosy super Derek
          asking about your plans to renew your lease, not your forgotten badge,
          and not the clerk's crabby mood.
        </MainText>
        <MainText>
          It's Friday. It's the end of a long week. And after work today you're
          headed to from New York to Washington, DC for your niece's birthday.
        </MainText>
        <NextButton onClick={() => props.update(showNameQuestion)} />
      </CustomContainer>
    </SimpleScene>
    <SimpleScene isVisible={props.nameQuestionVisible}>
      <CustomContainer>
        <UserQuote pl={"300px"}>
          "Name{" "}
          <button
            style={buttonStyle}
            onClick={e => props.update(showPlayerNameField)}
          >
            please
          </button>."
        </UserQuote>
      </CustomContainer>
    </SimpleScene>
    <SimpleScene isVisible={props.nameFormVisible}>
      <CustomContainer>
        {!props.playerNameSaved && (
          <form
            onSubmit={e => {
              e.preventDefault();
              props.update(addPlayerName);
            }}
            style={{
              display: "flex"
            }}
          >
            <NewInput
              defaultValue=""
              placeholder="First Name"
              value={props.newPlayerName}
              onChange={e => props.update(setNewPlayerName(e.target.value))}
            />

            <button
              style={{
                background: "none",
                border: "none",
                cursor: "pointer"
              }}
              children={<Arrow right />}
            />
          </form>
        )}
      </CustomContainer>
    </SimpleScene>
    <SimpleScene isVisible={props.nameAnswerVisible}>
      <UserQuote>"{props.playerNameSaved}."</UserQuote>
    </SimpleScene>
    <SimpleScene isVisible={props.positionQuestionVisible}>
      <CustomContainer>
        <UserQuote pl={"300px"}>
          "Position{" "}
          <button
            style={buttonStyle}
            onClick={e => props.update(showPlayerOccupationField)}
          >
            please
          </button>."
        </UserQuote>
      </CustomContainer>
    </SimpleScene>
    <SimpleScene isVisible={props.positionFormVisible}>
      <CustomContainer>
        {!props.playerOccupationFinished && (
          <JobSelectionComponent {...props} />
        )}
        {props.playerOccupationFinished && (
          <UserQuote>"{props.playerOccupationSaved}."</UserQuote>
        )}
      </CustomContainer>
    </SimpleScene>
    <SimpleScene isVisible={props.occupationAnswerCompleted}>
      <div>
        <CustomContainer>
          <UserQuote pl={"300px"}>...</UserQuote>
        </CustomContainer>

        <CustomContainer>
          <MainText>
            You look back puzzled. The receptionist is sharing at you intently.
          </MainText>
        </CustomContainer>

        <CustomContainer>
          <UserQuote pl={"300px"}>
            "THE ANSWERS TO YOUR SECURITY QUESTION."
          </UserQuote>
        </CustomContainer>

        <Container py={4}>
          <MainText>The clerk looks at you with a suspicious glance.</MainText>
          <UserQuote pl={"300px"} pt={"100px"}>
            "What is the name of a close friend or relative who owns a pet, the
            pets name, and the type of pet?"
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
          >
            <NewInput
              defaultValue=""
              placeholder="Aunt Millie"
              value={props.newPetOwner}
              onChange={e => props.update(setNewPetOwner(e.target.value))}
            />
            <span
              style={{
                fontFamily: "'Source Code Pro', monospace",
                fontWeight: "700",
                fontSize: "1.5rem",
                border: "none"
              }}
            >
              's
            </span>

            <NewInput
              defaultValue=""
              placeholder="parrot"
              value={props.newPetType}
              onChange={e => props.update(setNewPetType(e.target.value))}
            />

            <NewInput
              defaultValue=""
              placeholder="George"
              value={props.newPetName}
              onChange={e => props.update(setNewPetName(e.target.value))}
            />
            <div style={{ paddingLeft: "355px" }}>
              <button
                style={{ background: "none", border: "none" }}
                children={<Arrow right />}
              />
            </div>
          </form>
        </CustomContainer>
      </div>
    </SimpleScene>
    <SimpleScene>
      <div>
        <CustomContainer>
          <MainText>More click-clacking on the keyboard.</MainText>
        </CustomContainer>

        <CustomContainer>
          <UserQuote pl={"300px"}>"Look towards the camera."</UserQuote>
        </CustomContainer>

        <CustomContainer>
          <WebcamComponent />
        </CustomContainer>
      </div>
    </SimpleScene>
    <SimpleScene>
      <CustomContainer>
        <MainText>
          Once you arrive at your desk, you turn on your{" "}
          <button
            style={buttonStyle}
            onClick={e => props.update(turnOnComputer)}
          >
            computer
          </button>.
        </MainText>
      </CustomContainer>
    </SimpleScene>
    <SimpleScene>
      <Workspace {...props} />
    </SimpleScene>
    <SimpleScene>
      <div>
        <CustomContainer>
          <MainText>
            You eject yourself from your desk and go grab a cup of coffee.
          </MainText>
        </CustomContainer>
        <CustomContainer>
          <MainText>
            When you get back to your desk, you see that you have a{" "}
            <button style={buttonStyle} onClick={e => props.update(showPhone)}>
              voicemail from your brother
            </button>.
          </MainText>
        </CustomContainer>
      </div>
    </SimpleScene>
    <SimpleScene>
      <PhoneComponent {...props} />
    </SimpleScene>
    <SimpleScene>
      <div>
        <CustomContainer>
          <MainText>
            What did he mean by 'strange gift'...? You think back to Sam's last
            birthday...
          </MainText>
        </CustomContainer>

        <CustomContainer>
          <DreamText>
            barbeque, slipknot karaoke, did you have a few drinks...?
          </DreamText>
          <DreamText>
            what did you get her...? how could you forget this...?
          </DreamText>
        </CustomContainer>

        <CustomContainer>
          <MainText>
            It all feels dreamlike. You're a{" "}
            {props.playerOccupationSaved || "PLAYER_OCCUPATION"} – you pay such
            great attention to detail. How could you forget something like
            this...?
          </MainText>
          <MainText>
            Maybe Alex <i>is</i> right.
          </MainText>
          <MainText>
            All this work is pushing you to the edge. This weekend, you won't
            take your laptop, you won't look at the Feeds, you'll disconnect.
            You've just got to{" "}
            <button
              style={buttonStyle}
              onClick={e => props.update(restartWork)}
            >
              get through the next few hours and deadlines.
            </button>
          </MainText>
        </CustomContainer>
      </div>
    </SimpleScene>
    <SimpleScene>
      <Workspace>
        <BrokenEmail {...props} />
        <NotesApp />
      </Workspace>
    </SimpleScene>
    <SimpleScene>
      <div>
        <CustomContainer>
          <MainText>
            Something is wrong with your keyboard. As a{" "}
            {props.playerOccupationSaved || "PLAYER_OCCUPATION"}, it's pretty
            essential for you to have this type of special keyboard. While any
            version of this keyboard will work, you've been using this one for
            years.
          </MainText>
        </CustomContainer>
        <CustomContainer>
          <img src={keyboard} alt="keyboard" />
        </CustomContainer>
        <CustomContainer>
          <UserQuote pl={"300px"}>"Keyboard issues?"</UserQuote>
        </CustomContainer>
        <CustomContainer>
          <MainText>
            You look up and see {props.coworkerName || "SCOTT_PLAYER_TEST"}.
          </MainText>
        </CustomContainer>
        <CustomContainer>
          <UserQuote>
            "For some reason, every key is registering as only an n or b on the
            screen."
          </UserQuote>
        </CustomContainer>
        <CustomContainer>
          <UserQuote pl={"300px"}>
            "Same thing happened to me about a year ago. I took it to a place
            near where I lived in DC. Fixed it up in a day, had it working good
            as new."
          </UserQuote>
        </CustomContainer>

        <CustomContainer>
          <UserQuote>
            "I'm taking the Amtrak down there this weekend... It's my niece's
            birthday..."
          </UserQuote>
        </CustomContainer>

        <CustomContainer>
          <UserQuote pl={"300px"}>
            "Crazy coincidence! It's right off the Amtrak stop. You can't miss
            it, south east corner of the Mall. Open on weekends too, can
            probably pick it up on your way back."
          </UserQuote>
        </CustomContainer>
        <CustomContainer>
          <Link to="/A-Train-to-Not-Washington">Next</Link>
        </CustomContainer>
      </div>
    </SimpleScene>
  </div>
);

const map = state => ({
  initialBlock: state.initialBlock,
  startBurning: state.startBurning,
  receptionistVisible: state.receptionistVisible
});

export default connect(map)(s01eWork);
