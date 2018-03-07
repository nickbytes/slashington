import { connect } from "funcup";
import React from "react";

import {
  AbsoluteBlack,
  ChapterNext,
  ChapterNum,
  ChapterTitle
} from "../../components/ChapterUtils";
import { ns } from "../../updaters/ns";
import CustomContainer from "../../components/CustomContainer";
import Echo from "../../components/Echo";
import MainText from "../../components/MainText";
import NextButton from "../../components/NextButton";
import NextChapter from "../../components/NextChapter";
import SimpleScene from "../../components/SimpleScene";
import UserQuote from "../../components/UserQuote";

const s3 = props => (
  <div>
    <SimpleScene isVisible={props.c0}>
      <AbsoluteBlack />
      <CustomContainer>
        <ChapterNum>Chapter 3</ChapterNum>
        <ChapterTitle>Slashington</ChapterTitle>
        <ChapterNext onClick={() => props.update(ns("s3", "c1"))} />
      </CustomContainer>
    </SimpleScene>
    <SimpleScene isVisible={props.c1}>
      <CustomContainer>
        <MainText>
          {props.petNameInputSaved} jumps off the bench and starts walking,
          upright, towards you. You stand dumbfounded.
        </MainText>
        <UserQuote attrib={props.petNameInputSaved}>
          C'mon now, the keyboard, you're going to need that.
        </UserQuote>
        <MainText>{props.petNameInputSaved} taps you on the leg.</MainText>
        <MainText>
          You stare for a moment, then slowly turn and walk back into the train
          car.
        </MainText>
        <NextButton onClick={() => props.update(ns("s3", "c2"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c2}>
      <CustomContainer>
        <Echo>
          WHAT THE FUCK IS GOING ON WHERE AM I WHERE IS EVERYONE ELSE IS THIS A
          DREAM HOW IS THIS HAPPENING HAVE I LOST MY MIND
        </Echo>

        <Echo>This most be a dream.</Echo>

        <NextButton onClick={() => props.update(ns("s3", "c3"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c3}>
      <CustomContainer>
        <Echo>{props.petNameInputSaved} IS TALKING</Echo>

        <Echo>WHY THE HELL AM I HOLDING THIS KEYBOARD</Echo>

        <NextButton onClick={() => props.update(ns("s3", "c4"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c4}>
      <CustomContainer>
        <MainText>You're on autopilot.</MainText>

        <MainText>You grab the keyboard and feel its tactile keys.</MainText>

        <MainText>You attempt to measure your breaths.</MainText>

        <MainText>You tap the keys and hear the soft clicks.</MainText>

        <MainText>Wiggle your toes.</MainText>

        <MainText>
          You turn and begin to walk towards the open car doors again. You
          realize {props.petNameInputSaved} has been talking the whole time.
        </MainText>
        <NextButton onClick={() => props.update(ns("s3", "c5"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c5}>
      <CustomContainer>
        <UserQuote attrib={props.petNameInputSaved}>
          -- and quite young, with such potential, but the risks of course, well
          I just don't know. Doesn't seem like theres any other options...
        </UserQuote>
        <MainText>
          You stop and really stare at {props.petNameInputSaved}.{" "}
          {props.petNameInputSaved}'s eyes are watery.
        </MainText>
        <UserQuote attrib={`You, ${props.playerNameSaved}`}>
          What was that?
        </UserQuote>
        <MainText>You surprise yourself with a sensitive tone.</MainText>
        <NextButton onClick={() => props.update(ns("s3", "c6"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c6}>
      <CustomContainer>
        <UserQuote attrib={props.petNameInputSaved}>
          It's nothing. C'mon, they're waiting for you. I'll be out here once
          you're finished.
        </UserQuote>
        <MainText>
          {props.petNameInputSaved} leads you towards the train station and
          points towards the double doors.
        </MainText>
        <NextButton onClick={() => props.update(ns("s3", "c7"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c7}>
      <CustomContainer>
        <UserQuote attrib={`You, ${props.playerNameSaved}`}>
          {props.petNameInputSaved}, where am I?
        </UserQuote>
        <UserQuote attrib={props.petNameInputSaved}>Slashington.</UserQuote>

        <MainText>
          You walk forward, keyboard in hand, and push through the doors.
        </MainText>

        <NextChapter to={`/the-council`} />
      </CustomContainer>
    </SimpleScene>
  </div>
);

const map = state => ({
  c0: state.s3.c0,
  c1: state.s3.c1,
  c2: state.s3.c2,
  c3: state.s3.c3,
  c4: state.s3.c4,
  c5: state.s3.c5,
  c6: state.s3.c6,
  c7: state.s3.c7,
  petTypeInputSaved: state.petTypeInputSaved,
  playerNameSaved: state.playerNameSaved,
  petNameInputSaved: state.petNameInputSaved
});

export default connect(map)(s3);
