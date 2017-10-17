import { Link } from "react-router-dom";
import { connect } from "funcup";
import React from "react";

import {
  lookOutWindowTrain,
  sayPetName,
  showTrainAnimation,
  thinkMustBeDream,
  walkOffTrain
} from "../../updaters/NotWashingtonUpdaters";
import { showWaves } from "../../updaters/updaters";
import CustomContainer from "../../components/CustomContainer";
import MainText from "../../components/MainText";
import TrainAnimation from "../../components/TrainAnimation";
import UserQuote from "../../components/UserQuote";
import Waves from "../../components/Waves";
import buttonStyle from "../../utilities/buttonStyle";

const Train = props => {
  return (
    <div>
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
          <button style={buttonStyle} onClick={e => props.update(showWaves)}>
            waves.
          </button>
        </MainText>
      </CustomContainer>

      {props.wavesVisible && (
        <div>
          <CustomContainer>
            <Waves />
          </CustomContainer>

          <CustomContainer>
            <MainText>
              The train nudges forward, and begins rolling out of the station.
              You lean against the window as city lights slowly give in to the
              darkness of the outer edges of the city.
            </MainText>
            <MainText>
              The train has begun its slow wind along the coast. It lulls you to{" "}
              <button
                style={buttonStyle}
                onClick={e => props.update(showTrainAnimation)}
              >
                sleep.
              </button>
            </MainText>
          </CustomContainer>
        </div>
      )}

      {props.trainAnimationVisible && (
        <CustomContainer>
          <TrainAnimation />
        </CustomContainer>
      )}

      {props.awakenAfterTrainRide && (
        <CustomContainer>
          <MainText>
            You groggily awake to the sunshine on your face. The sky is bright
            and clear.
          </MainText>
          <MainText>
            As you stir awake, you notice the train car is completely silent. A
            quick glance reveals that you are alone on the train.
          </MainText>
          <MainText>
            You look out the{" "}
            <button
              style={buttonStyle}
              onClick={e => props.update(lookOutWindowTrain)}
            >
              window
            </button>.
          </MainText>
        </CustomContainer>
      )}

      {props.afterLookOutWindow && (
        <CustomContainer>
          <MainText>
            You must be dreaming. You are not in{" "}
            <button
              style={buttonStyle}
              onClick={e => props.update(thinkMustBeDream)}
            >
              Washington, DC
            </button>.
          </MainText>
        </CustomContainer>
      )}

      {props.afterYouMustBeDreaming && (
        <CustomContainer>
          <MainText>
            The morning sun is above you, but the landscape is bizarre. The
            ground is a red clay-like dust and rock-covered surface.Small
            shrubs, deep green with violet accents and flowrs speckle the harsh
            red clay ground. The train has stopped along a small wooden
            platform, not much different than those of the Metro North trains in
            small New England towns. But the backdrop is all wrong. There's a
            very small ticket patron standing a wooden both some 30 yards away
            from the platform. Further, you see 10 or so small houses, or maybe
            huts. They are round, though not primitive looking. They have cone
            tops, and their bone white color nearly seems soft and as though
            they would be glow in a translucent fashion if this were nighttime.
          </MainText>
          <MainText>
            There are no passengers waiting on the platform. You debate getting
            off the train. You debate whether this could be a dream, but it is
            much too real. You can feel the subtle tactile keys on the keyboard.
            You measure your breaths. You wiggle your toes, feel the tips of
            your fingers. This is real. Bag, suitcase, and keyboard in hand, you
            slowly stand, and begin moving toward the{" "}
            <button
              onClick={e => props.update(walkOffTrain)}
              style={buttonStyle}
            >
              open door
            </button>.
          </MainText>
        </CustomContainer>
      )}

      {props.afterWalkingOffTrain && (
        <CustomContainer>
          <MainText>
            You begin walking towards the small ticket booth. Astonished you see
            not a human on the other side of the glass, but... no... it can't
            be.
          </MainText>
          <UserQuote pl={"300px"}>
            "A little late, but I think everything should be fine. I was
            starting to worry about you. I see you've got the keyboard, good
            good. Come on, I'll lead you to the council."
          </UserQuote>
          <MainText>
            says {props.petNameInputSaved} the {props.petTypeInputSaved},
            dressed in a old timey looking train conductors outfit.{" "}
            {props.petNameInputSaved} is wearing a bowtie.
          </MainText>
          <UserQuote>
            <button onClick={e => props.update(sayPetName)} style={buttonStyle}>
              "{props.petNameInputSaved || "PET_NAME"}?!?!?"
            </button>
          </UserQuote>
          <MainText>you stammer.</MainText>
        </CustomContainer>
      )}

      {props.afterSayingPetName && (
        <div>
          <CustomContainer>
            <UserQuote>
              "You can speak! What in the hell is going on? Where are we.. what
              is the council..."
            </UserQuote>
          </CustomContainer>

          <CustomContainer>
            <MainText>You feel your legs start to wobble.</MainText>
          </CustomContainer>
          <CustomContainer>
            <UserQuote pl={"300px"}>
              "Oh yes, I always seem to forget this part...The Council will
              explain it to you."
            </UserQuote>
          </CustomContainer>

          <CustomContainer>
            <Link to="/The-Council">Next</Link>
          </CustomContainer>
        </div>
      )}
    </div>
  );
};

const map = state => ({
  petNameInputSaved: state.petNameInputSaved,
  petTypeInputSaved: state.petTypeInputSaved,
  wavesVisible: state.wavesVisible,
  trainAnimationVisible: state.trainAnimationVisible,
  awakenAfterTrainRide: state.awakenAfterTrainRide,
  afterLookOutWindow: state.afterLookOutWindow,
  afterYouMustBeDreaming: state.afterYouMustBeDreaming,
  afterWalkingOffTrain: state.afterWalkingOffTrain,
  afterSayingPetName: state.afterSayingPetName
});

export default connect(map)(Train);
