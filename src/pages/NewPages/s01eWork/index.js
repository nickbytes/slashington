import "../../../vendor/devices.min.css";

import { Arrow, Container } from "rebass";
import { Link } from "react-router-dom";
import { connect } from "funcup";
import React from "react";

import {
  addPlayerName,
  addSecurityAnswers,
  setNewPetName,
  setNewPetOwner,
  setNewPetType,
  setNewPlayerName,
  showFirstWorkspace,
  showNameQuestion,
  showPhone,
  showPlayerJobQuestion,
  showPlayerNameField,
  showPositionForm,
  showReceptionist,
  showReceptionistSecurityAsk,
  showSecurityForm,
  startBurning
} from "./updaters";
import { receptionist } from "../../../utilities/receptionist";
import { restartWork } from "../../../updaters/updaters";
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
        <UserQuote attrib="You">
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
        <UserQuote attrib={receptionist()}>
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
      </CustomContainer>
    </SimpleScene>
    <SimpleScene isVisible={props.nameAnswerVisible}>
      <CustomContainer>
        <UserQuote attrib="You">"{props.playerNameSaved}."</UserQuote>
        <NextButton onClick={() => props.update(showPlayerJobQuestion)} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.positionQuestionVisible}>
      <CustomContainer>
        <UserQuote attrib={receptionist()}>
          "Position{" "}
          <button
            style={buttonStyle}
            onClick={e => props.update(showPositionForm)}
          >
            please
          </button>."
        </UserQuote>
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.positionFormVisible}>
      <CustomContainer>
        <JobSelectionComponent {...props} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.playerOccupationFinished}>
      <CustomContainer>
        <UserQuote attrib="You">"{props.playerOccupationSaved}."</UserQuote>
        <NextButton onClick={() => props.update(showReceptionistSecurityAsk)} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.occupationAnswerCompleted}>
      <div>
        <CustomContainer>
          <UserQuote attrib={receptionist()}>...</UserQuote>
        </CustomContainer>

        <CustomContainer>
          <MainText>
            You look back puzzled. The receptionist is sharing at you intently.
          </MainText>
        </CustomContainer>

        <CustomContainer>
          <UserQuote attrib={receptionist()}>
            "THE ANSWERS TO YOUR SECURITY QUESTION."
          </UserQuote>
        </CustomContainer>

        <Container py={4}>
          <MainText>The clerk looks at you with a suspicious glance.</MainText>
          <UserQuote pt={"100px"} attrib={receptionist()}>
            "What is the name of a close friend or relative who owns a pet, the
            pets name, and the type of pet?"
          </UserQuote>
        </Container>

        <CustomContainer>
          <MainText>You don't remember filling out this question.</MainText>
        </CustomContainer>
        <CustomContainer>
          <NextButton onClick={() => props.update(showSecurityForm)} />
        </CustomContainer>
      </div>
    </SimpleScene>

    <SimpleScene isVisible={props.securityFormShowing}>
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
    </SimpleScene>

    <SimpleScene isVisible={props.askForPhoto}>
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

    <SimpleScene isVisible={props.arrivedAtDesk}>
      <CustomContainer>
        <MainText>
          Once you arrive at your desk, you turn on your{" "}
          <button
            style={buttonStyle}
            onClick={e => props.update(showFirstWorkspace)}
          >
            computer
          </button>.
        </MainText>
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.firstWorkspace}>
      <Workspace {...props} />
    </SimpleScene>

    <SimpleScene isVisible={props.grabCoffee}>
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

    <SimpleScene isVisible={props.phoneVisible}>
      <PhoneComponent {...props} />
    </SimpleScene>

    <SimpleScene isVisible={props.phoneCallOver}>
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

    <SimpleScene isVisible={props.secondWorkspace}>
      <Workspace>
        <BrokenEmail {...props} />
        <NotesApp />
      </Workspace>
    </SimpleScene>

    <SimpleScene isVisible={props.computerBroken}>
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
          <UserQuote>"Keyboard issues?"</UserQuote>
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
          <UserQuote>
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
          <UserQuote>
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
  receptionistVisible: state.receptionistVisible,
  nameQuestionVisible: state.nameQuestionVisible,
  nameFormVisible: state.nameFormVisible,
  playerNameInput: state.playerNameInput,
  playerNameSaved: state.playerNameSaved,
  nameAnswerVisible: state.nameAnswerVisible,
  positionQuestionVisible: state.positionQuestionVisible,
  playerOccupationSaved: state.playerOccupationSaved,
  playerOccupationFinished: state.playerOccupationFinished,
  playerOccupationRadio: state.playerOccupationRadio,
  positionFormVisible: state.positionFormVisible,
  occupationAnswerCompleted: state.occupationAnswerCompleted,
  securityFormShowing: state.securityFormShowing,
  askForPhoto: state.askForPhoto,
  arrivedAtDesk: state.arrivedAtDesk,
  firstWorkspace: state.firstWorkspace,
  grabCoffee: state.grabCoffee,
  phoneVisible: state.phoneVisible,
  phoneCallOver: state.phoneCallOver,
  secondWorkspace: state.secondWorkspace,
  computerBroken: state.computerBroken
});

export default connect(map)(s01eWork);
