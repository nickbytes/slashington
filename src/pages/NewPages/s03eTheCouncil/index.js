import React from "react";
import md from "markdown-in-js";
import SimpleScene from "../../../components/SimpleScene";

const s03eTheCouncil = props => (
  <div>
    <SimpleScene>
      <MainText>
        {props.petTypeInputSaved} jumps off the bench and starts walking towards
        you. You're standing there dumbfounded.
      </MainText>
      <UserQuote attrib={props.petTypeInputSaved}>
        "C'mon now, the keyboard."
      </UserQuote>
      <MainText>{props.petTypeInputSaved} taps you on the leg.</MainText>
      <MainText>You slowly turn and walk back into the train car.</MainText>
    </SimpleScene>

    <SimpleScene>
      WHAT THE FUCK IS GOING ON WHERE AM I WHERE IS EVERYONE ELSE IS THIS A
      DREAM HOW IS THIS HAPPENING HAVE I LOST MY MIND
    </SimpleScene>

    <SimpleScene>
      {props.petNameInputSaved} IS TALKING WHY THE HELL AM I HOLDING THIS
      KEYBOARD
    </SimpleScene>

    <SimpleScene>
      <MainText>
        You're on autopilot. You grabbed the keyboard and feel its tactile keys.
        You attempt to measure your breaths. Light shines in the train window
        over the keys. Cherry MX. You tap the keys and hear the soft clicks.
        Wiggle your toes. This is real.
      </MainText>

      <MainText>
        You turn and begin to walk towards the open car doors again. You realize{" "}
        {props.petTypeInputSaved} has been talking the whole time.
      </MainText>
    </SimpleScene>

    <SimpleScene>
      <UserQuote attrib={props.petTypeInputSaved}>
        -- and quite young, with such potential, but the risks of course, well I
        just don't know. Doesn't seem like theres any other options...
      </UserQuote>
      <MainText>
        You stop and really stare at {props.petTypeInputSaved}.{" "}
        {props.petTypeInputSaved}'s eyes are watery.
      </MainText>
      <UserQuote attrib={`You, ${props.playerNameSaved}`}>
        "What was that?"
      </UserQuote>
      <MainText>
        , you ask and surprise yourself with a sensitive tone.
      </MainText>
      <UserQuote attrib={props.petTypeInputSaved}>
        Aw it's nothing. C'mon, they're waiting for you. I'll be waiting out
        here once you're finished.
      </UserQuote>
    </SimpleScene>

    <SimpleScene />
  </div>
);

export default s03eTheCouncil;
