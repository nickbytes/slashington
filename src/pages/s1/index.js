import "../../vendor/devices.min.css";

import { Link } from "react-router-dom";
import { connect } from "funcup";
import Draggable from "react-draggable";
import React from "react";

import {
  addPlayerName,
  addSecurityAnswers,
  setNewPetName,
  setNewPetOwner,
  setNewPetType,
  setNewPlayerName,
  startBurning
} from "./updaters";
import { badgeHelper } from "../../pages/s1/updaters";
import { coworker, coworkerFullTitle } from "../../utilities/coworker";
import { createTitle } from "../../components/JobSelectionComponent/jobGenerator";
import { ns } from "../../updaters/ns";
import { receptionist } from "../../utilities/receptionist";
import BrokenEmail from "../../components/BrokenEmail";
import Clickable from "../../components/Clickable";
import CustomContainer from "../../components/CustomContainer";
import DreamText from "../../components/DreamText";
import ItalicText from "../../components/ItalicText";
import JobSelectionComponent from "../../components/JobSelectionComponent";
import MainText from "../../components/MainText";
import NewInput from "../../components/NewInput";
import NextButton from "../../components/NextButton";
import PetFormInput from "../../components/PetFormInput";
import PetFormLabel from "../../components/PetFormLabel";
import PhoneComponent from "../../components/PhoneComponent";
import SimpleScene from "../../components/SimpleScene";
import Smoke from "../../components/Smoke";
import SubmitButton from "../../components/SubmitButton";
import UserQuote from "../../components/UserQuote";
import WebcamComponent from "../../components/WebcamComponent";
import Workspace from "../../components/Workspace";
import YourNewBadge from "../../components/YourNewBadge";
import keyboard from "../../images/keyboard.jpg";
import leonard from "../../images/leonard.gif";

const s1 = props => (
  <div>
    <SimpleScene isVisible={props.c1}>
      <CustomContainer>
        <UserQuote attrib="You">
          Hello, I've forgotten my badge. Could I get a temporary one for today?
        </UserQuote>
        <NextButton onClick={() => props.update(ns("s1", "c2"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c2}>
      <CustomContainer>
        <MainText>Leonard looks at you, annoyed.</MainText>
        <MainText>
          Nothing is getting on your nerves today. Not the{" "}
          <Clickable clickFn={e => props.update(startBurning)}>
            <span style={{ position: "relative" }}>
              burnt toast {props.startBurning && <Smoke />}
            </span>
          </Clickable>{" "}
          that nearly caused a fire in your apartment, not your nosy super,
          Derek, asking about your plans to renew your lease, not your forgotten
          badge, and not the Leonard's crabby mood.
        </MainText>
        <MainText>
          It's Friday. It's the end of a long week. And after work today, you're
          headed to Washington, DC for your niece's birthday.
        </MainText>
        <NextButton onClick={() => props.update(ns("s1", "c3"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c3}>
      <CustomContainer>
        <UserQuote attrib={receptionist()}>
          Name{" "}
          <Clickable clickFn={e => props.update(ns("s1", "c4"))}>
            please
          </Clickable>.
        </UserQuote>
        <MainText>
          Leonard definitely knows your name, but he is going through the
          motions.
        </MainText>
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c4}>
      <CustomContainer>
        <form
          onSubmit={e => {
            e.preventDefault();
            props.update(addPlayerName);
          }}
        >
          <NewInput
            defaultValue=""
            placeholder="First Name"
            value={props.newPlayerName}
            onChange={e => props.update(setNewPlayerName(e.target.value))}
          />

          <SubmitButton />
        </form>
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c5}>
      <CustomContainer>
        <UserQuote attrib="You">{props.playerNameSaved}.</UserQuote>
        <UserQuote attrib={receptionist()}>
          Right, right... {props.playerNameSaved}.
        </UserQuote>
        <NextButton onClick={() => props.update(ns("s1", "c6"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c6}>
      <CustomContainer>
        <UserQuote attrib={receptionist()}>
          Position{" "}
          <Clickable clickFn={e => props.update(ns("s1", "c7"))}>
            please
          </Clickable>.
        </UserQuote>
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c7}>
      <CustomContainer>
        <JobSelectionComponent {...props} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c8}>
      <CustomContainer>
        <UserQuote attrib="You">
          {props.playerOccupationSaved} at Tinsel Corp.
        </UserQuote>

        <NextButton onClick={() => props.update(ns("s1", "c9"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c9}>
      <div>
        <CustomContainer>
          <img
            src={leonard}
            alt="Leonard"
            style={{ width: "100%", maxWidth: "600px" }}
          />
        </CustomContainer>
        <CustomContainer>
          <MainText>
            More click-clacking on the keyboard.{receptionist()} is looking
            intensely at you. You wonder what his deal is... why is he looking
            at you so intensely?
          </MainText>
        </CustomContainer>

        <CustomContainer>
          <NextButton onClick={() => props.update(ns("s1", "c10"))} />
        </CustomContainer>
      </div>
    </SimpleScene>

    <SimpleScene isVisible={props.c10}>
      <CustomContainer>
        <UserQuote attrib={receptionist()}>
          THE ANSWERS TO YOUR SECURITY QUESTION!
        </UserQuote>

        <MainText>
          He nearly spits the words at you, his lower limb trembling.
        </MainText>

        <MainText>You can't seem to remember any "security" question.</MainText>
      </CustomContainer>

      <CustomContainer>
        <NextButton onClick={() => props.update(ns("s1", "c11"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c11}>
      <CustomContainer>
        <UserQuote pt={"100px"} attrib={receptionist()}>
          What is the name of a close friend or relative who owns a pet, the
          pets name, and the type of pet?
        </UserQuote>
      </CustomContainer>

      <CustomContainer>
        <MainText>
          You don't remember filling out this question. Leonard continues to
          look at you suspiciously.
        </MainText>
      </CustomContainer>
      <CustomContainer>
        <NextButton onClick={() => props.update(ns("s1", "c12"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c12}>
      <CustomContainer>
        <form
          onSubmit={e => {
            e.preventDefault();
            props.update(addSecurityAnswers);
          }}
        >
          <PetFormLabel>Friend or relative w/ pet</PetFormLabel>
          <PetFormInput
            defaultValue=""
            placeholder="Aunt Muriel"
            value={props.newPetOwner}
            onChange={e => props.update(setNewPetOwner(e.target.value))}
          />

          <PetFormLabel>Type of Pet</PetFormLabel>
          <PetFormInput
            defaultValue=""
            placeholder="cat"
            value={props.newPetType}
            onChange={e => props.update(setNewPetType(e.target.value))}
          />

          <PetFormLabel>Pet Name</PetFormLabel>
          <PetFormInput
            defaultValue=""
            placeholder="Wilbur"
            value={props.newPetName}
            onChange={e => props.update(setNewPetName(e.target.value))}
          />
          <div>
            <NextButton />
          </div>
        </form>
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c13}>
      <div>
        <CustomContainer>
          <MainText>More click-clacking on the keyboard.</MainText>
        </CustomContainer>

        <CustomContainer>
          <UserQuote pl={"300px"} attrib={receptionist()}>
            Look towards the{" "}
            <Clickable clickFn={() => props.update(ns("s1", "c14"))}>
              camera
            </Clickable>.
          </UserQuote>
        </CustomContainer>
      </div>
    </SimpleScene>

    <SimpleScene isVisible={props.c14}>
      <CustomContainer>
        <WebcamComponent {...props} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c14b}>
      <UserQuote>
        Here is your new{" "}
        <Clickable clickFn={() => props.update(badgeHelper())}>badge</Clickable>.
      </UserQuote>
    </SimpleScene>

    <SimpleScene isVisible={props.c14c}>
      <YourNewBadge
        imgSrc={props.photoSrc}
        playerName={props.playerNameSaved}
        playerOccupation={props.playerOccupationSaved}
        {...props}
      />
    </SimpleScene>

    <SimpleScene isVisible={props.c15}>
      <CustomContainer>
        <MainText>
          Once you arrive at your desk, you turn on your{" "}
          <Clickable clickFn={e => props.update(ns("s1", "c16"))}>
            computer
          </Clickable>.
        </MainText>
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c16}>
      <Workspace {...props} coffee />
    </SimpleScene>

    <SimpleScene isVisible={props.c17}>
      <div>
        <MainText>
          It's going to be a long day, you should really grab a cup of coffee
          first.
        </MainText>

        <MainText>Coffee Graphic</MainText>

        <MainText>
          When you get back to your desk, you see that you have a{" "}
          <Clickable clickFn={e => props.update(ns("s1", "c18"))}>
            voicemail
          </Clickable>from your brother.
        </MainText>
      </div>
    </SimpleScene>

    <SimpleScene isVisible={props.c18}>
      <PhoneComponent {...props} />
      <ItalicText>
        Hey {props.playerNameSaved}, I know you're probably busy at work...
      </ItalicText>
      <ItalicText>
        We're really excited to have you down here this weekend. I'll pick you
        up at the train station in the morning, give me a call if your train
        gets delayed.
      </ItalicText>
      <ItalicText>Alright, uh, excited to see you. Talk soon.</ItalicText>
      <ItalicText>
        – hey, by the way, don't worry about a gift this year... I know last
        year was tough on you, but the gift you brought was a little... well,
        strange... I mean, {props.nieceName} liked it, but {props.inLawName} and
        I were just a little concerned... you know...
      </ItalicText>
      <ItalicText>
        Look – {props.nieceName} doesn't need anything, she just wants to see
        you, and we just want to have a nice relaxing weekend, okay?
      </ItalicText>
      <ItalicText>Alright, see you soon.</ItalicText>
    </SimpleScene>

    <SimpleScene isVisible={props.c19}>
      <CustomContainer>
        <MainText>
          What did he mean by 'strange gift'...? You think back to{" "}
          {props.nieceName}'s last birthday...
        </MainText>
      </CustomContainer>

      <CustomContainer>
        <DreamText>
          barbeque, slipknot karaoke, did you have a few drinks...?
        </DreamText>
        <DreamText>
          what did you get her...? how could you{" "}
          <Clickable clickFn={() => props.update(ns("s1", "c20"))}>
            forget
          </Clickable>{" "}
          this...?
        </DreamText>
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c20}>
      <CustomContainer>
        <MainText>
          It all feels hazy... You're a{" "}
          {props.playerOccupationSaved || "PLAYER_OCCUPATION"} – you pay such
          great attention to detail. How could you forget something like
          this...?
        </MainText>
        <MainText>
          Maybe Alex <i>is</i> right.
        </MainText>
        <MainText>
          All this work is pushing you to the edge. This weekend, you won't take
          your laptop. You'll <i>disconnect</i>. You've just got to{" "}
          <Clickable clickFn={e => props.update(ns("s1", "c21"))}>
            get through the next few hours and deadlines.
          </Clickable>
        </MainText>
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c21}>
      <Workspace>
        <Draggable handle=".handle">
          <BrokenEmail {...props} />
        </Draggable>
      </Workspace>
    </SimpleScene>

    <SimpleScene isVisible={props.c22}>
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
          <button onClick={() => props.update(ns("s1", "c23"))}>
            <img src={keyboard} alt="keyboard" />
          </button>
        </CustomContainer>
      </div>
    </SimpleScene>

    <SimpleScene isVisible={props.c23}>
      <CustomContainer>
        <UserQuote attrib={coworkerFullTitle()}>Keyboard issues?</UserQuote>
        <NextButton onClick={() => props.update(ns("s1", "c24"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c24}>
      <CustomContainer>
        <MainText>
          You look up and see {coworker()}. {coworker()} is an {createTitle()},
          and a damn good one.
        </MainText>
        <NextButton onClick={() => props.update(ns("s1", "c25"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c25}>
      <CustomContainer>
        <UserQuote attrib={`You, ${props.playerNameSaved}`}>
          For some reason, every key is registering as only an <code>n</code> or{" "}
          <code>b</code> on the screen.
        </UserQuote>
        <NextButton onClick={() => props.update(ns("s1", "c26"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c26}>
      <CustomContainer>
        <UserQuote attrib={coworkerFullTitle()}>
          Same thing happened to me about a year ago. I took it to a place near
          where I lived in DC. Fixed it up in a day, had it working good as new.
        </UserQuote>
        <NextButton onClick={() => props.update(ns("s1", "c27"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c27}>
      <CustomContainer>
        <UserQuote attrib={`You, ${props.playerNameSaved}`}>
          I'm taking the Amtrak down there this weekend... It's my niece's
          birthday...
        </UserQuote>
        <NextButton onClick={() => props.update(ns("s1", "c28"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c28}>
      <CustomContainer>
        <UserQuote attrib={coworkerFullTitle()}>
          Crazy coincidence! It's right off the Amtrak stop. You can't miss it,
          south east corner of H Street and 4th. Open on weekends too, can
          probably pick it up on your way back.
        </UserQuote>
        <Link to="/train-ride">Next</Link>
      </CustomContainer>
    </SimpleScene>
  </div>
);

const map = state => ({
  c1: state.s1.c1,
  c2: state.s1.c2,
  c3: state.s1.c3,
  c4: state.s1.c4,
  c5: state.s1.c5,
  c6: state.s1.c6,
  c7: state.s1.c7,
  c8: state.s1.c8,
  c9: state.s1.c9,
  c10: state.s1.c10,
  c11: state.s1.c11,
  c12: state.s1.c12,
  c13: state.s1.c13,
  c14: state.s1.c14,
  c14b: state.s1.c14b,
  c14c: state.s1.c14c,
  c15: state.s1.c15,
  c16: state.s1.c16,
  c17: state.s1.c17,
  c18: state.s1.c18,
  c19: state.s1.c19,
  c20: state.s1.c20,
  c21: state.s1.c21,
  c22: state.s1.c22,
  c23: state.s1.c23,
  c24: state.s1.c24,
  c25: state.s1.c25,
  c26: state.s1.c26,
  c27: state.s1.c27,
  c28: state.s1.c28,
  newBadgeReceived: state.s1.newBadgeReceived,
  startBurning: state.startBurning,
  playerNameInput: state.playerNameInput,
  playerNameSaved: state.playerNameSaved,
  playerOccupationSaved: state.playerOccupationSaved,
  playerOccupationRadio: state.playerOccupationRadio,
  petOwnerInput: state.petOwnerInput,
  petTypeInput: state.petTypeInput,
  petNameInput: state.petNameInput,
  petOwnerInputSaved: state.petOwnerInputSaved,
  petTypeInputSaved: state.petTypeInputSaved,
  petNameInputSaved: state.petNameInputSaved,
  photoSrc: state.photoSrc,
  nieceName: state.nieceName,
  inLawName: state.inLawName
});

export default connect(map)(s1);
