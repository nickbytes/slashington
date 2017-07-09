import { Blockquote, Container, Label, Radio, Text } from "rebass";
import { Link } from "react-router-dom";
import React, { Component } from "react";

class Breakfast extends Component {
  render() {
    return (
      <div>
        <Container py={2}>
          *Not part of story*<br />
          - What is crux of opening?<br />
          - There are people helping and watching you<br />
          - Bothered by landlord<br />
          - Bothered by desk admin<br />
          - Helped by coworker<br />
        </Container>

        <Container py={4}>
          <Text>
            You glance past the alarm clock. Rain beats on the streets outside.
            You can see the lights from the pet store, bodega, smoke shop, and
            appliance
            store are already glowing into your window from below. A sort of
            aurora metropolis.
          </Text>
        </Container>

        <Container py={4}>
          <Blockquote> >> Insert window animation</Blockquote>
        </Container>

        <Container py={4}>
          <Text>
            Before you let your mind begin racing with the thoughts of the
            workday, you remember today is
            Friday. It's the
            end of the week. <i>And</i>, you're leaving the city today to visit
            your
            niece for her birthday.
          </Text>
        </Container>

        <Container py={4}>
          <radiogroup>
            <Label>
              <Radio name="radio" defaultChecked />
              Waffles
            </Label>
            <Label>
              <Radio name="radio" />
              Toast
            </Label>
            <Label>
              <Radio name="radio" />
              Apple
            </Label>
            <Label>
              <Radio name="radio" />
              Skip Breakfast
            </Label>
          </radiogroup>
        </Container>

        <Container py={4}>
          <Text>
            You break out your Hello Kitty waffle maker you bought from the
            appliance store across the street. Sure, it was used but it looked
            in
            great condition.
          </Text>
          <Text>
            You pour in some readymade mix and quickly finish getting dressed...
          </Text>
        </Container>

        <Container py={4}>
          <Text>As you lace your shoes, you start to smell the burning...</Text>
        </Container>

        <Container py={4}>
          <Text>
            There's a small fire at the hinges of the Hello Kitty waffle maker.
            You open the window, then grab for a dish towel and bat at flames
            until the fire has ceased.
          </Text>
        </Container>

        <Container py={4}>
          <Text>
            Your waffles are burnt, and if you don't hurry up, you may be late
            for
            work.
          </Text>
        </Container>

        <Container py={4}>
          <Text>
            {" "}You seek refuge from the rain under the pet store awning
            nearby.
            You're always reminded of your. Aunt Muriel's Cat{" "}
          </Text>
        </Container>

        <Container py={4}>
          <Blockquote>Strange</Blockquote>
        </Container>

        <Container py={4}>
          <Text>
            You jam your headphones into your ears, and quickly select a song.
            You
            do not want to talk to Derek, your chatty super.
          </Text>
        </Container>

        <Container py={4}>
          <Text>
            Luckily, the bus arrives immediately, and you step quickly onboards
            with the swarth of people. As soon as you swipe you metro card, you
            realize you've forgotten your work badge. Too late now.
          </Text>
        </Container>

        <Container py={4}>
          <Link to="/02-Office">Next</Link>
        </Container>

      </div>
    );
  }
}

export default Breakfast;
