import { Blockquote, Heading, Text } from "rebass";
import { Link } from "react-router-dom";
import { connect } from "funcup";
import React from "react";

import CustomContainer from "../../components/CustomContainer";

const Train = props => {
  return (
    <div>
      <CustomContainer>
        <Heading>Next scene: Train</Heading>
      </CustomContainer>

      <CustomContainer bg={"#e3e3e3"}>
        - you board the train with [item] in hand
        - train winding along coast slowly lulls you to sleep.
        - you wake up to sunlight
        - you're still clenching your [item], you nearly drop it when you look
        out
        the window.
        - you are not in Washington, DC. You must be dreaming. The sun shines
        bright in the clear sky, but the landscape is bizarre. The ground is a
        red
        clay like dust and rock covered surface. Small shrubs, deep green with
        violet accents and flowrs speckle the harsh red clay ground. The train
        has
        stopped along a small wooden platform, not much different than those of
        the Metro North trains in small New England towns. But the backdrop is
        all
        wrong. There's a very small ticket patron standing a wooden both some 30
        yards away from the platform. Further, you see 10 or so small houses, or
        maybe huts. They are round, though not primitive looking. They have cone
        tops, and their bone white color nearly seems soft and as though they
        would be glow in a translucent fashion if this were nighttime.
        - There are no passengers on the train, none waiting on the platform.
        You
        debate getting off the train. You debate whether this could be a dream,
        but it is much too real. You can feel the [blank of the item]. You
        measure
        your breaths. You wiggle your toes, feel the tips of your fingers. This
        is
        real. Bag, suitcase, and [item] in hand, you slowly stand, and begin
        moving toward the open door.
      </CustomContainer>

      <CustomContainer>
        <Heading>Next scene: the Exchange, the [item]</Heading>
      </CustomContainer>

      <CustomContainer>
        <Text>
          You begin walking towards the small ticket booth. Astonished you see
          not
          a human on the other side of the glass, but... no... it can't be.
        </Text>
      </CustomContainer>

      <CustomContainer>
        <Blockquote>
          "A little late, but I think everything should be fine. I was starting
          to
          worry about you. I see you've got the [item], good good. Come on, I'll
          lead you to the council."
        </Blockquote>
        <Text>
          said _George_ the _parrot_, dressed in a old
          timey looking train conductors outfit, complete with bowtie..
        </Text>
      </CustomContainer>

      <CustomContainer>
        <Blockquote>"George?!?!?"</Blockquote>
        <Text>you stammer.</Text>
        <Blockquote>
          "You can speak! What in the hell is going on?
          Where are we.. what is the council..."
        </Blockquote>
      </CustomContainer>

      <CustomContainer>
        <Text>You feel your legs start to wobble.</Text>
      </CustomContainer>

      <CustomContainer>
        <Blockquote>
          "Oh yes, I always seem to forget this part...The Council will explain
          it
          to you."
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
