import { Link } from "react-router-dom";
import { connect } from "funcup";
import React from "react";

import { ns } from "../../updaters/ns";
import MainText from "../../components/MainText";
import NextButton from "../../components/NextButton";
import SimpleScene from "../../components/SimpleScene";
import UserQuote from "../../components/UserQuote";

const s03eSlashington = props => (
  <div>
    <SimpleScene isVisible={props.c1}>
      <MainText>
        {props.petNameInputSaved} jumps off the bench and starts walking towards
        you. You're standing there dumbfounded.
      </MainText>
      <UserQuote attrib={props.petNameInputSaved}>
        "C'mon now, the keyboard."
      </UserQuote>
      <MainText>{props.petNameInputSaved} taps you on the leg.</MainText>
      <MainText>You slowly turn and walk back into the train car.</MainText>
      <NextButton onClick={() => props.update(ns("s3", "c2"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c2}>
      WHAT THE FUCK IS GOING ON WHERE AM I WHERE IS EVERYONE ELSE IS THIS A
      DREAM HOW IS THIS HAPPENING HAVE I LOST MY MIND
      <NextButton onClick={() => props.update(ns("s3", "c3"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c3}>
      {props.petNameInputSaved} IS TALKING WHY THE HELL AM I HOLDING THIS
      KEYBOARD
      <NextButton onClick={() => props.update(ns("s3", "c4"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c4}>
      <MainText>
        You're on autopilot. You grabbed the keyboard and feel its tactile keys.
        You attempt to measure your breaths. Light shines in the train window
        over the keys. Cherry MX. You tap the keys and hear the soft clicks.
        Wiggle your toes. This is real.
      </MainText>

      <MainText>
        You turn and begin to walk towards the open car doors again. You realize{" "}
        {props.petNameInputSaved} has been talking the whole time.
      </MainText>
      <NextButton onClick={() => props.update(ns("s3", "c5"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c5}>
      <UserQuote attrib={props.petNameInputSaved}>
        -- and quite young, with such potential, but the risks of course, well I
        just don't know. Doesn't seem like theres any other options...
      </UserQuote>
      <MainText>
        You stop and really stare at {props.petNameInputSaved}.{" "}
        {props.petNameInputSaved}'s eyes are watery.
      </MainText>
      <UserQuote attrib={`You, ${props.playerNameSaved}`}>
        "What was that?"
      </UserQuote>
      <MainText>
        , you ask and surprise yourself with a sensitive tone.
      </MainText>
      <UserQuote attrib={props.petNameInputSaved}>
        Aw it's nothing. C'mon, they're waiting for you. I'll be waiting out
        here once you're finished.
      </UserQuote>
      <MainText>
        PET leads you towards the train station and points towards the double
        doors.
      </MainText>

      <UserQuote attrib={`You, ${props.playerNameSaved}`}>
        {props.petNameInputSaved}, where am I?
      </UserQuote>
      <UserQuote attrib={props.petNameInputSaved}>Slashington.</UserQuote>

      <MainText>
        You walk forward, keyboard in hand, and push through the doors.
      </MainText>

      <Link to={`/s04eTheCouncil`}>Next</Link>
    </SimpleScene>
  </div>
);

const map = state => ({
  c1: state.s3.c1,
  c2: state.s3.c2,
  c3: state.s3.c3,
  c4: state.s3.c4,
  c5: state.s3.c5
});

export default connect(map)(s03eSlashington);
