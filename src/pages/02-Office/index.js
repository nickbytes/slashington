import React from "react";
import { Link } from "react-router-dom";
import { connect } from "funcup";
import { increment } from "../../updaters/updaters";

const Office = props => {
  return (
    <div>
      Office scene
      "Hello, I've forgotten my badge. Could I get a temporary one for today?",
      you ask the receptionist.

      Name please. [click]

      % appears name from twitter account

      Position please. [click]

      % appears bio from Twitter.

      Security question and answer please.

      You look back puzzled.

      Could I have a hint?

      It looks like it is the name of a close friend or relatives pet + what
      type of animal.

      % _George_ the _parrot_

      More click-clacking on the keyboard.

      "Here is your temporary badge."

      Once you arrive at your desk, you begin your work.

      - Phone call from brother
      - if pickup
      - tells you theyre worried about you
      - don't worry about gift, you insist
      - tells you more important things than work, like taking care of yourself,
      this hits you hard

      - if don't pickup
      - leaves goofy message you can listen to
      - annoyed
      - keep working until fall asleep and you're late
      - take different train, call alex to tell him this

      Next scene: Train
      - you board the train with [item] in hand
      - train winding along coast slowly lulls you to sleep.
      - you wake up to sunlight
      - you're still clenching your [item], you nearly drop it when you look out
      the window.
      - you are not in Washington, DC. You must be dreaming. The sun shines
      bright in the clear sky, but the landscape is bizarre. The ground is a red
      clay like dust and rock covered surface. Small shrubs, deep green with
      violet accents and flowrs speckle the harsh red clay ground. The train has
      stopped along a small wooden platform, not much different than those of
      the Metro North trains in small New England towns. But the backdrop is all
      wrong. There's a very small ticket patron standing a wooden both some 30
      yards away from the platform. Further, you see 10 or so small houses, or
      maybe huts. They are round, though not primitive looking. They have cone
      tops, and their bone white color nearly seems soft and as though they
      would be glow in a translucent fashion if this were nighttime.
      - There are no passengers on the train, none waiting on the platform. You
      debate getting off the train. You debate whether this could be a dream,
      but it is much too real. You can feel the [blank of the item]. You measure
      your breaths. You wiggle your toes, feel the tips of your fingers. This is
      real. Bag, suitcase, and [item] in hand, you slowly stand, and begin
      moving toward the open door.

      Next scene: the Exchange, the [item]
      - You begin walking towards the small ticket booth. Astonished you see not
      a human on the other side of the glass, but... no... it can't be.

      "A little late, but I think everything should be fine. I was starting to
      worry about you. I see you've got the [item], good good. Come on, I'll
      lead you to the council." said _George_ the _parrot_, dressed in a old
      timey looking train conductors outfit, complete with bowtie..

      "George?!?!?" you stammer. "You can speak! What in the hell is going on?
      Where are we.. what is the council..."

      You feel your legs start to wobble.

      "Oh yes, I always seem to forget this part...The Council will explain it
      to you."

      <h2>Count: {props.count}</h2>
      <button onClick={e => props.update(increment)} children="+Increment " />
      <Link to="/03-The-Council">Next</Link>
    </div>
  );
};

const map = state => ({
  count: state.count
});

export default connect(map)(Office);
