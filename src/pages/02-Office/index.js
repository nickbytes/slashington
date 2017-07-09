import { Blockquote, Container, Divider, Input, Text } from "rebass";
import { Link } from "react-router-dom";
import { connect } from "funcup";
import React from "react";

import { increment } from "../../updaters/updaters";

const Office = props => {
  return (
    <div>
      <Container py={4}>
        <Blockquote>
          "Hello, I've forgotten my badge. Could I get a temporary one for
          today?"
        </Blockquote>
        <Text>you ask the receptionist.</Text>
      </Container>

      <Container py={4}>
        <Blockquote>Name <button>please</button>.</Blockquote>
      </Container>

      <Container py={4}>
        <Input defaultValue="" placeholder="Name" />
      </Container>

      <Container py={4}>
        <Blockquote>Position <button>please</button>.</Blockquote>
      </Container>

      <Container py={4}>
        <Blockquote>>> Job selection component</Blockquote>
      </Container>

      <Container py={4}>
        <Blockquote>Security question and answer please.</Blockquote>
      </Container>

      <Container py={4}>
        <Text>You look back puzzled.</Text>
      </Container>

      <Container py={4}>
        <Blockquote>Could I have a hint?</Blockquote>
      </Container>

      <Container py={4}>
        <Text>The receptionist looks at you with a suspicious glance.</Text>
        <Blockquote>
          It looks like it is the name of a close friend or relatives pet + what
          type of animal.
        </Blockquote>
      </Container>

      <Container py={4}>
        <Input defaultValue="" placeholder="George" /><Text>the</Text>
        <Input defaultValue="" placeholder="Parrot" />
      </Container>

      <Container py={4}>
        <Text>More click-clacking on the keyboard.</Text>
      </Container>

      <Container py={4}>
        <Blockquote>"Look towards the camera."</Blockquote>
        <Blockquote>"Here is your new badge."</Blockquote>
      </Container>

      <Divider />
      <Container py={4}>
        <Text>Once you arrive at your desk, you begin your work.</Text>
      </Container>

      <Container py={4}>
        <Blockquote>>> Work animation</Blockquote>
      </Container>

      <Container>
        <Blockquote>Get back to desk, listen to voicemail</Blockquote>
        <Text bg={"#e3e3e3"}>
          - tells you theyre worried about you
          - don't worry about gift, you insist
          - tells you more important things than work, like taking care of
          yourself,
        </Text>
      </Container>

      <h2>Count: {props.count}</h2>
      <button onClick={e => props.update(increment)} children="+Increment " />
      <Link to="/02.5-Train">Next</Link>
    </div>
  );
};

const map = state => ({
  count: state.count
});

export default connect(map)(Office);
