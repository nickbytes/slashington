import { Link } from "react-router-dom";
import { connect } from "funcup";
import React from "react";

import { ns } from "../../updaters/ns";
import CustomContainer from "../../components/CustomContainer";
import DemoMode from "../../components/DemoMode";
import MainText from "../../components/MainText";
import NextButton from "../../components/NextButton";
import SimpleScene from "../../components/SimpleScene";
import TrainAnimation from "../../components/TrainAnimation";
import UserQuote from "../../components/UserQuote";
import Waves from "../../components/Waves";
import buttonStyle from "../../utilities/buttonStyle";

const scene = "s2";

const s2 = props => (
  <div>
    <DemoMode />
    <SimpleScene isVisible={props.c1}>
      <CustomContainer>
        <MainText>
          You board the train, duffle bag slung over one shoulder, keyboard in
          the other hand.
        </MainText>
        <MainText>
          You find a seat near the middle of the train and unwind. You've made
          it. The end of a long week.
        </MainText>
        <MainText>
          Relief washes over you like a series gentle{" "}
          <button
            style={buttonStyle}
            onClick={e => props.update(ns(scene, "c2"))}
          >
            waves.
          </button>
        </MainText>
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c2}>
      <CustomContainer>
        <Waves />
      </CustomContainer>
      <NextButton onClick={() => props.update(ns("s2", "c3"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c3}>
      <CustomContainer>
        <MainText>
          The train nudges forward, and begins rolling out of the station. You
          lean against the window as city lights slowly give in to the darkness
          of the outer edges of the city.
        </MainText>
        <MainText>
          The train has begun its slow wind along the coast. It lulls you to{" "}
          <button
            style={buttonStyle}
            onClick={e => props.update(ns("s2", "c4"))}
          >
            sleep.
          </button>
        </MainText>
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c4}>
      <CustomContainer>
        <TrainAnimation {...props} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.awakenAfterTrainRide} />

    <SimpleScene isVisible={props.afterLookOutWindow} />

    <SimpleScene isVisible={props.afterYouMustBeDreaming}>
      <CustomContainer>
        Not really the thing
        <MainText>
          There are no passengers waiting on the platform. You debate getting
          off the train. You debate whether this could be a dream, but it is
          much too real. You can feel the subtle tactile keys on the keyboard.
          You measure your breaths. You wiggle your toes, feel the tips of your
          fingers. This is real. Bag, suitcase, and keyboard in hand, you slowly
          stand, and begin moving toward the{" "}
          <button onClick={e => props.update()} style={buttonStyle}>
            open door
          </button>.
        </MainText>
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.afterWalkingOffTrain}>Something</SimpleScene>

    <SimpleScene isVisible={props.afterSayingPetName}>
      <UserQuote attrib={`You, ${props.playerNameSaved}`}>
        "You can speak! What in the hell is going on? Where are we.. what is the
        council..."
      </UserQuote>

      <MainText>You feel your legs start to wobble.</MainText>
      <UserQuote attrib={props.petNameInputSaved}>
        "Oh yes, I always seem to forget this part...The Council will explain it
        to you."
      </UserQuote>

      <Link to="/s03eSlashington">Next</Link>
    </SimpleScene>
  </div>
);

const map = state => ({
  c1: state.s2.c1,
  c2: state.s2.c2,
  c3: state.s2.c3,
  c4: state.s2.c4
});

export default connect(map)(s2);
