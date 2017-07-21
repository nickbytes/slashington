import { Blockquote, Heading, Text } from "rebass";
import { Link } from "react-router-dom";
import { connect } from "funcup";
import React from "react";

import CustomContainer from "../../components/CustomContainer";
import MainText from "../../components/MainText";

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
        <MainText>Relief washes over you like a series gentle waves.</MainText>
      </CustomContainer>

      <CustomContainer>
        <MainText>
          The train nudges forward, and begins rolling out of the station. You
          lean against the window as city lights slowly give in to the darkness
          of the outer edges of the city.
        </MainText>
        <MainText>
          The train has begun its slow wind along the coast. It lulls you to
          sleep.
        </MainText>
      </CustomContainer>

      <CustomContainer>
        <MainText>Train animation</MainText>
      </CustomContainer>

      <CustomContainer>
        <MainText>
          You groggily awake to the sunshine on your face. The sky is bright and
          clear.
        </MainText>
        <MainText>
          As you stir awake, you notice the train car is completely silent. A
          quick glance reveals that you are alone on the train.
        </MainText>
        <MainText>You look out the window.</MainText>
        <MainText>
          You must be dreaming. You are not in Washington, DC.
        </MainText>
        <MainText>
          The morning sun is above you, but the landscape is bizarre. The ground
          is a red clay-like dust and rock-covered surface.Small shrubs, deep
          green with violet accents and flowrs speckle the harsh red clay
          ground. The train has stopped along a small wooden platform, not much
          different than those of the Metro North trains in small New England
          towns. But the backdrop is all wrong. There's a very small ticket
          patron standing a wooden both some 30 yards away from the platform.
          Further, you see 10 or so small houses, or maybe huts. They are round,
          though not primitive looking. They have cone tops, and their bone
          white color nearly seems soft and as though they would be glow in a
          translucent fashion if this were nighttime.
        </MainText>
        <MainText>
          There are no passengers waiting on the platform. You debate getting
          off the train. You debate whether this could be a dream, but it is
          much too real. You can feel the subtle tactile keys on the keyboard.
          You measure your breaths. You wiggle your toes, feel the tips of your
          fingers. This is real. Bag, suitcase, and keyboard in hand, you slowly
          stand, and begin moving toward the open door.
        </MainText>
      </CustomContainer>

      <CustomContainer bg={"#e3e3e3"} />

      <CustomContainer>
        <Heading>Next scene: the Exchange, the [item]</Heading>
      </CustomContainer>

      <CustomContainer>
        <Text>
          You begin walking towards the small ticket booth. Astonished you see
          not a human on the other side of the glass, but... no... it can't be.
        </Text>
      </CustomContainer>

      <CustomContainer>
        <Blockquote>
          "A little late, but I think everything should be fine. I was starting
          to worry about you. I see you've got the [item], good good. Come on,
          I'll lead you to the council."
        </Blockquote>
        <Text>
          said _George_ the _parrot_, dressed in a old timey looking train
          conductors outfit, complete with bowtie..
        </Text>
      </CustomContainer>

      <CustomContainer>
        <Blockquote>"George?!?!?"</Blockquote>
        <Text>you stammer.</Text>
        <Blockquote>
          "You can speak! What in the hell is going on? Where are we.. what is
          the council..."
        </Blockquote>
      </CustomContainer>

      <CustomContainer>
        <Text>You feel your legs start to wobble.</Text>
      </CustomContainer>

      <CustomContainer>
        <Blockquote>
          "Oh yes, I always seem to forget this part...The Council will explain
          it to you."
        </Blockquote>
      </CustomContainer>

      <CustomContainer>
        <Link to="/03-The-Council">Next</Link>
      </CustomContainer>
    </div>
  );
};

const map = state => ({
  count: state.count
});

export default connect(map)(Train);
