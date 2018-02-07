import { Link } from "react-router-dom";
import { connect } from "funcup";
import React from "react";

import { ns } from "../../updaters/ns";
import DemoMode from "../../components/DemoMode";
import MainText from "../../components/MainText";
import NextButton from "../../components/NextButton";
import SimpleScene from "../../components/SimpleScene";
import ThoughtQuote from "../../components/ThoughtQuote";
import UserQuote from "../../components/UserQuote";
import buttonStyle from "../../utilities/buttonStyle";

const s5 = props => (
  <div>
    <DemoMode />
    <SimpleScene isVisible={props.c1}>
      <MainText>You sit down again in the same seat on the train.</MainText>
      <NextButton onClick={() => props.update(ns("s5", "c2"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c2}>
      <MainText>
        You watch outside, as {props.petNameInputSaved} waves to you.
      </MainText>

      <MainText>
        You feel the familiar jolt of the train as it begins to move forward.
        There are no passengers in sight. The train slowly pulls away from the
        station.
      </MainText>
      <NextButton onClick={() => props.update(ns("s5", "c3"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c3}>
      <MainText>
        The landscape is familiar. Rolling hills, small forests, and tributaries
        pass along side the train. The sun is about to peek out from behind the
        horizon.
      </MainText>

      <MainText>Would like a gif graphic here.</MainText>
      <NextButton onClick={() => props.update(ns("s5", "c4"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c4}>
      <MainText>
        The Council's words begin to reverberate through you head. What had they
        said about the person who was caught by Frailty Stow's guards...?
      </MainText>
      <NextButton onClick={() => props.update(ns("s5", "c5"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c5}>
      <ThoughtQuote>We are unaware of where the magician is now.</ThoughtQuote>
      <ThoughtQuote>They may have had their memory erased.</ThoughtQuote>
      <NextButton onClick={() => props.update(ns("s5", "c6"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c6}>
      <MainText>
        There's a tunnel approaching. The Northeast Regional does not have a
        tunnel...
      </MainText>
      <NextButton onClick={() => props.update(ns("s5", "c7"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c7}>
      <MainText>
        Three or four seconds. Suddenly the car{" "}
        <button style={buttonStyle}>bursts</button> with light, you grimace and
        squint in the stark contrast. When you open your eyes, the train car is
        again packed with people, regular people. People reading their tablets,
        morning papers, talking on cell phones, glancing out the window as you
        pass through Baltimore.
      </MainText>
      <NextButton onClick={() => props.update(ns("s5", "c8"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c8}>
      <MainText>
        Alex greets you at the station. You load your bags and keyboard into the
        trunk of his car.
      </MainText>

      <UserQuote attrib={`Alex, brother`}>What's with the keyboard?</UserQuote>

      <MainText>
        You hear the concern in his voice. He thinks you brought it to complete
        some work this weekend. If only...
      </MainText>
      <NextButton onClick={() => props.update(ns("s5", "c9"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c9}>
      <UserQuote attrib={`You, ${props.playerNameSaved}`}>
        A gift for Sam.
      </UserQuote>
      <NextButton onClick={() => props.update(ns("s5", "c10"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c10}>
      <MainText>
        He goes on chatting about work, neighbors, Jill's job, only do you take
        notice when he mentions the exception grades Emma has been getting.
      </MainText>
      <NextButton onClick={() => props.update(ns("s5", "c11"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c11}>
      <UserQuote attrib={`You, ${props.playerNameSaved}`}>
        That's great, real great.
      </UserQuote>
      <NextButton onClick={() => props.update(ns("s5", "c12"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c12}>
      <MainText>
        Words gotta come to mind again to end the scene. maybe the below
      </MainText>
      <ThoughtQuote>
        The burden is too great for one so young. Surely some adult can take on
        responsibility.
      </ThoughtQuote>
      <Link to={`/birthday-party`}>Next</Link>
    </SimpleScene>
  </div>
);

const map = state => ({
  c1: state.s5.c1,
  c2: state.s5.c2,
  c3: state.s5.c3,
  c4: state.s5.c4,
  c5: state.s5.c5,
  c6: state.s5.c6,
  c7: state.s5.c7,
  c8: state.s5.c8,
  c9: state.s5.c9,
  c10: state.s5.c10,
  c11: state.s5.c11,
  c12: state.s5.c12
});

export default connect(map)(s5);
