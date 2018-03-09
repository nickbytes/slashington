import "../../vendor/devices.min.css";

import { connect } from "funcup";
import React from "react";

import {
  AbsoluteBlack,
  ChapterNext,
  ChapterNum,
  ChapterTitle
} from "../../components/ChapterUtils";
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
import NextChapter from "../../components/NextChapter";
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
import coffee from "../../images/gifs/coffee_glitch.gif";
import side_keyboard_glitch from "../../images/gifs/side_keyboard_glitch.gif";
import leonard_glitch from "../../images/gifs/leonard_glitch.gif";

const s1 = props => (
  <div>
    <SimpleScene isVisible={props.c0}>
      <AbsoluteBlack />
      <CustomContainer>
        <ChapterNum>Chapter 1</ChapterNum>
        <ChapterTitle>A Broken Keyboard</ChapterTitle>
        <ChapterNext onClick={() => props.update(ns("s1", "c1"))} />
      </CustomContainer>
    </SimpleScene>

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
        <MainText>The receptionist, Leonard, looks at you annoyed.</MainText>
        <MainText>
          Nothing is getting on your nerves today, though. Not the{" "}
          <Clickable clickFn={e => props.update(startBurning)}>
            <span style={{ position: "relative" }}>
              burnt toast {props.startBurning && <Smoke />}
            </span>
          </Clickable>{" "}
          that nearly caused a fire in your apartment, not your super, Derek,
          telling you that your rent is going to be higher next year, not your
          forgotten badge, and not the Leonard's crabby mood.
        </MainText>
        <MainText>It's Friday. It's the end of a long week.</MainText>
        <MainText>
          And after work today, you're headed to Washington, DC for your niece's
          birthday.
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
          {props.playerOccupationSaved} at Shapes Corp.
        </UserQuote>

        <NextButton onClick={() => props.update(ns("s1", "c9"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c9}>
      <CustomContainer>
        <img
          src={leonard_glitch}
          alt="Leonard"
          style={{
            width: "100%",
            maxWidth: "600px",
            marginBottom: "50px",
            display: "block"
          }}
        />
        <NextButton onClick={() => props.update(ns("s1", "c10"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c10}>
      <CustomContainer>
        <MainText>
          More click-clacking on the keyboard. {receptionist()} is looking
          intensely at you. You wonder what his deal is... why is he looking at
          you like this?
        </MainText>
        <NextButton onClick={() => props.update(ns("s1", "c11"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c11}>
      <CustomContainer>
        <UserQuote attrib={receptionist()}>
          THE ANSWERS TO YOUR SECURITY QUESTION!
        </UserQuote>

        <MainText>He nearly spits the words at you.</MainText>
        <NextButton onClick={() => props.update(ns("s1", "c12"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c12}>
      <CustomContainer>
        <UserQuote pt={"100px"} attrib={receptionist()}>
          What is the name of a close friend or relative who owns a pet, the
          pets name, and the type of pet?
        </UserQuote>
        <MainText>You don't remember filling out this question.</MainText>
        <MainText>Leonard continues to look at you suspiciously.</MainText>
        <NextButton onClick={() => props.update(ns("s1", "c13"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c13}>
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

    <SimpleScene isVisible={props.c14}>
      <CustomContainer>
        <MainText>More click-clacking on the keyboard.</MainText>
        <NextButton onClick={() => props.update(ns("s1", "c15"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c15}>
      <CustomContainer>
        <CustomContainer>
          <UserQuote pl={"300px"} attrib={receptionist()}>
            Look towards the{" "}
            <Clickable clickFn={() => props.update(ns("s1", "c16"))}>
              camera
            </Clickable>.
          </UserQuote>
        </CustomContainer>
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c16}>
      <CustomContainer>
        <WebcamComponent {...props} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c16b}>
      <CustomContainer>
        <UserQuote attrib={receptionist()}>
          Here is your new{" "}
          <Clickable clickFn={() => props.update(badgeHelper())}>
            badge
          </Clickable>.
        </UserQuote>
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c16c}>
      <YourNewBadge
        imgSrc={props.photoSrc}
        playerName={props.playerNameSaved}
        playerOccupation={props.playerOccupationSaved}
        {...props}
      />
    </SimpleScene>

    <SimpleScene isVisible={props.c17}>
      <CustomContainer>
        <MainText>
          Once you arrive at your desk, you turn on your{" "}
          <Clickable clickFn={e => props.update(ns("s1", "c18"))}>
            computer
          </Clickable>.
        </MainText>
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c18}>
      <Workspace {...props} coffee />
    </SimpleScene>

    <SimpleScene isVisible={props.c19}>
      <CustomContainer>
        <MainText>It's going to be a long day.</MainText>

        <MainText>You decide to grab a cup of coffee first.</MainText>
        <NextButton onClick={() => props.update(ns("s1", "c20"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c20}>
      <CustomContainer>
        <MainText>
          <img
            src={coffee}
            alt="Going to need this."
            style={{
              width: "100%",
              maxWidth: "600px",
              marginBottom: "50px"
            }}
          />
        </MainText>
        <NextButton onClick={() => props.update(ns("s1", "c21"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c21}>
      <CustomContainer>
        <MainText>
          When you get back to your desk, you see that you have a{" "}
          <Clickable clickFn={e => props.update(ns("s1", "c22"))}>
            voicemail
          </Clickable>{" "}
          from your brother.
        </MainText>
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c22}>
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

    <SimpleScene isVisible={props.c23}>
      <CustomContainer>
        <MainText>
          What did he mean by <i>strange gift</i>...? You think back to{" "}
          {props.nieceName}'s last birthday...
        </MainText>
      </CustomContainer>

      <CustomContainer>
        <DreamText>
          barbeque... the bean bag game...did you have a few drinks...?
        </DreamText>
        <DreamText>did... did you do slipnot karaoke...?</DreamText>
        <DreamText>
          what did you get her...? how could you{" "}
          <Clickable clickFn={() => props.update(ns("s1", "c24"))}>
            forget
          </Clickable>{" "}
          this...?
        </DreamText>
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c24}>
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
          your laptop.
        </MainText>
        <MainText>
          You'll <i>disconnect</i>.
        </MainText>
        <MainText>
          You've just got to get through the next few hours and{" "}
          <Clickable clickFn={e => props.update(ns("s1", "c25"))}>
            deadlines
          </Clickable>.
        </MainText>
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c25}>
      <Workspace>
        <BrokenEmail {...props} />
      </Workspace>
    </SimpleScene>

    <SimpleScene isVisible={props.c26}>
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
          <button
            onClick={() => props.update(ns("s1", "c27"))}
            style={{
              backgroundColor: "transparent",
              border: "none",
              margin: "0",
              padding: "0",
              cursor: "pointer"
            }}
          >
            <img src={side_keyboard_glitch} alt="keyboard" />
          </button>
        </CustomContainer>
      </div>
    </SimpleScene>

    <SimpleScene isVisible={props.c27}>
      <CustomContainer>
        <UserQuote attrib={coworkerFullTitle()}>Keyboard issues?</UserQuote>
        <NextButton onClick={() => props.update(ns("s1", "c28"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c28}>
      <CustomContainer>
        <MainText>
          You look up and see {coworker()}. {coworker()} is an {createTitle()},
          and a damn good one.
        </MainText>
        <MainText>
          If anyone would know what was wrong with your keyboard, it would be
          Paolo.
        </MainText>
        <MainText>
          Paolo leaned over the cubicle, eyeing you for a moment, then peering
          at the keyboard.
        </MainText>
        <NextButton onClick={() => props.update(ns("s1", "c29"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c29}>
      <CustomContainer>
        <UserQuote attrib={`You, ${props.playerNameSaved}`}>
          For some reason, every key is registering as only an <code>n</code> or{" "}
          <code>b</code> on the screen.
        </UserQuote>
        <NextButton onClick={() => props.update(ns("s1", "c30"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c30}>
      <CustomContainer>
        <UserQuote attrib={coworkerFullTitle()}>
          Hmm, yes. Same thing happened to me about a year ago. I took it to a
          place near where I lived in DC. Fixed it up in a day.
        </UserQuote>
        <NextButton onClick={() => props.update(ns("s1", "c31"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c31}>
      <CustomContainer>
        <UserQuote attrib={`You, ${props.playerNameSaved}`}>
          I'm taking the Amtrak down there this weekend... It's my niece's
          birthday...
        </UserQuote>
        <NextButton onClick={() => props.update(ns("s1", "c32"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c32}>
      <CustomContainer>
        <UserQuote attrib={coworkerFullTitle()}>
          <UserQuote paragraph>
            Quite the coincidence. The store is open on weekends too.
          </UserQuote>
          <UserQuote paragraph>It's right next to Union Station.</UserQuote>
          <UserQuote paragraph>
            Take a right out of the Northeast Entrance of the station. You can't
            miss it, south east corner of H Street and 4th.
          </UserQuote>
          <UserQuote paragraph>
            It's called <i>Igglefort's</i>.
          </UserQuote>
        </UserQuote>
        <NextChapter to="/train-ride" />
      </CustomContainer>
    </SimpleScene>
  </div>
);

const map = state => ({
  c0: state.s1.c0,
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
  c16b: state.s1.c16b,
  c16c: state.s1.c16c,
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
  c29: state.s1.c29,
  c30: state.s1.c30,
  c31: state.s1.c31,
  c32: state.s1.c32,
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
