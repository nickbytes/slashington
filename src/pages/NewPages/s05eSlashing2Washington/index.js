import React from "react";

import MainText from "../../../components/MainText";
import SimpleScene from "../../../components/SimpleScene";
import ThoughtQuote from "../../../components/ThoughtQuote";
import UserQuote from "../../../components/UserQuote";
import buttonStyle from "../../../utilities/buttonStyle";

const s05eSlashing2Washington = props => (
  <div>
    <SimpleScene>
      <MainText>You sit down again in the same seat on the train.</MainText>
    </SimpleScene>

    <SimpleScene>
      <MainText>
        You watch outside, as {props.petNameInputSaved} waves to you.
      </MainText>

      <MainText>
        You feel the familiar jolt of the train as it begins to move forward.
        There are no passengers in sight. The train slowly pulls away from the
        station.
      </MainText>
    </SimpleScene>

    <SimpleScene>
      <MainText>
        The landscape is familiar. Rolling hills, small forests, and tributaries
        pass along side the train. The sun is about to peek out from behind the
        horizon.
      </MainText>

      <MainText>Would like a gif graphic here.</MainText>
    </SimpleScene>

    <SimpleScene>
      <MainText>
        The Council's words begin to reverberate through you head. What had they
        said about the person who was caught by Frailty Stow's guards...?
      </MainText>
    </SimpleScene>

    <SimpleScene>
      <ThoughtQuote>We are unaware of where the magician is now.</ThoughtQuote>
      <ThoughtQuote>They may have had their memory erased.</ThoughtQuote>
    </SimpleScene>

    <SimpleScene>
      <MainText>
        There's a tunnel approaching. The Northeast Regional does not have a
        tunnel...
      </MainText>
    </SimpleScene>

    <SimpleScene>
      <MainText>
        Three or four seconds. Suddenly the car{" "}
        <button style={buttonStyle}>bursts</button> with light, you grimace and
        squint in the stark contrast. When you open your eyes, the train car is
        again packed with people, regular people. People reading their tablets,
        morning papers, talking on cell phones, glancing out the window as you
        pass through Baltimore.
      </MainText>
    </SimpleScene>

    <SimpleScene>
      <MainText>
        Alex greets you at the station. You load your bags and keyboard into the
        trunk of his car.
      </MainText>

      <UserQuote>What's with the keyboard?</UserQuote>

      <MainText>
        You hear the concern in his voice. He thinks you brought it to complete
        some work this weekend. If only...
      </MainText>
    </SimpleScene>

    <SimpleScene>
      <UserQuote>A gift for Sam.</UserQuote>
    </SimpleScene>

    <SimpleScene>
      <MainText>
        He goes on chatting about work, neighbors, Jill's job, only do you take
        notice when he mentions the exception grades Emma has been getting.
      </MainText>
    </SimpleScene>

    <SimpleScene>
      <UserQuote>"That's great, real great."</UserQuote>
    </SimpleScene>

    <SimpleScene>
      <MainText>
        Words gotta come to mind again to end the scene. maybe the below
      </MainText>
      <ThoughtQuote>
        The burden is too great for one so young. Surely some adult can take on
        responsibility.
      </ThoughtQuote>
    </SimpleScene>
  </div>
);

export default s05eSlashing2Washington;
