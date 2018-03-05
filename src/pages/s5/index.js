import { Link } from "react-router-dom";
import { connect } from "funcup";
import React from "react";

import { ns } from "../../updaters/ns";
import Clickable from "../../components/Clickable";
import CustomContainer from "../../components/CustomContainer";
import Echo from "../../components/Echo";
import MainText from "../../components/MainText";
import NextButton from "../../components/NextButton";
import SimpleScene from "../../components/SimpleScene";
import UserQuote from "../../components/UserQuote";

const something = (
  <SimpleScene isVisible={props.c17}>
    <CustomContainer>
      <img src={vim} alt="Vim" style={{ width: "100%", maxWidth: "200px" }} />
      <NextButton onClick={() => props.update(ns("s4", "c18"))} />
    </CustomContainer>
  </SimpleScene>
);

const s5 = props => (
  <div>
    <SimpleScene isVisible={props.c1}>
      <CustomContainer>
        <MainText>
          You board the train again, with {props.petNameInputSaved} waving at
          you. As you look through the sliding doors, you hear The Council's
          words reverberate through your head.
        </MainText>
        <NextButton onClick={() => props.update(ns("s5", "c2"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c2}>
      <CustomContainer>
        <Echo>It must be her. She is nearly halfway trained now.</Echo>

        <Echo>Exceptional ability and upside.</Echo>
        <MainText>
          Yes, they heard your pleas to help, to take the task yourself, but
          they would have nothing of it. You were just the messenger.
        </MainText>

        <NextButton onClick={() => props.update(ns("s5", "c3"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene>
      <CustomContainer>
        <MainText>
          Yet they didnt seem to care much about the welfare of your niece. Not
          in your mind at least. Yes, they see <i>value</i> in her, but they do
          not <i>care</i> for her.
        </MainText>

        <MainText>
          You feel the familiar jolt of the train as it begins to move forward.
          There are no passengers in sight. The train slowly pulls away from the
          station.
        </MainText>
      </CustomContainer>
    </SimpleScene>

    <SimpleScene>
      <CustomContainer>
        <MainText>The dangers, they told you, were great.</MainText>
        <MainText>
          One of their less capable magicians had been caught, before even being
          able to carry out their plan. They now relied on Olive.
        </MainText>
      </CustomContainer>
    </SimpleScene>

    <SimpleScene>
      <CustomContainer>
        <MainText>
          What had happened to the other magician...? You had asked, but they
          would not speak of it, and when you thought you heard one of the{" "}
          {props.petTypeInputSaved} mumble something about{" "}
          <i>permanent memory allicilatory obfunscator</i> they didnt expect,
          you asked more, but they would not tell you.
        </MainText>
      </CustomContainer>
    </SimpleScene>

    <SimpleScene>
      <CustomContainer>
        <MainText>
          You didnt want to admit it, but you feared the{" "}
          {props.petNameInputSaved} a little. If they were capable of gettin you
          to a ...
        </MainText>

        <MainText>... well what is this place ...?</MainText>

        <MainText>
          You think about it for a second. Another dimension? A rip in reality?
          More like a soft tear.
        </MainText>
      </CustomContainer>
    </SimpleScene>

    <SimpleScene>
      <CustomContainer>
        <MainText>
          Anyway, what else were they capable of... you had never felt anything
          like what you felt from the keyboard.
        </MainText>

        <MainText>
          Even now, with it sitting right next to you, you dared not to touch a
          key. You feared the power it held over you.
        </MainText>
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c3}>
      <CustomContainer>
        <MainText>
          The landscape is familiar. Rolling hills, small forests, and
          tributaries pass along side the train. The sun is about to peek out
          from behind the horizon.
        </MainText>

        <MainText>Would like a gif graphic here.</MainText>
        <NextButton onClick={() => props.update(ns("s5", "c4"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c4}>
      <CustomContainer>
        <MainText>
          The Council's words begin to reverberate through you head. What had
          they said about the person who was caught by Frailty Stow's guards...?
        </MainText>
        <NextButton onClick={() => props.update(ns("s5", "c5"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c5}>
      <CustomContainer>
        <Echo>We are unaware of where the magician is now.</Echo>
        <Echo>They may have had their memory erased.</Echo>
        <NextButton onClick={() => props.update(ns("s5", "c6"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c6}>
      <CustomContainer>
        <MainText>
          There's a tunnel approaching. The Northeast Regional does not have a
          tunnel...
        </MainText>
        <NextButton onClick={() => props.update(ns("s5", "c7"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c7}>
      <CustomContainer>
        <MainText>
          Three or four seconds. Suddenly the car <Clickable>bursts</Clickable>{" "}
          with light, you grimace and squint in the stark contrast. When you
          open your eyes, the train car is again packed with people, regular
          people. People reading their tablets, morning papers, talking on cell
          phones, glancing out the window as you pass through Baltimore.
        </MainText>
        <NextButton onClick={() => props.update(ns("s5", "c8"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c8}>
      <CustomContainer>
        <MainText>
          Alex greets you at the station. You load your bags and keyboard into
          the trunk of his car.
        </MainText>

        <UserQuote attrib={`Alex, brother`}>
          What's with the keyboard?
        </UserQuote>

        <MainText>
          You hear the concern in his voice. He thinks you brought it to
          complete some work this weekend. If only...
        </MainText>
        <NextButton onClick={() => props.update(ns("s5", "c9"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c9}>
      <CustomContainer>
        <UserQuote attrib={`You, ${props.playerNameSaved}`}>
          A gift for {props.nieceName}.
        </UserQuote>
        <NextButton onClick={() => props.update(ns("s5", "c10"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c10}>
      <CustomContainer>
        <MainText>
          He goes on chatting about work, neighbors, {props.inLawName}'s job,
          only do you take notice when he mentions the exception grades{" "}
          {props.nieceName} has been getting.
        </MainText>
        <NextButton onClick={() => props.update(ns("s5", "c11"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c11}>
      <CustomContainer>
        <UserQuote attrib={`You, ${props.playerNameSaved}`}>
          That's great, real great.
        </UserQuote>
        <NextButton onClick={() => props.update(ns("s5", "c12"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c12}>
      <CustomContainer>
        <Echo>The burden is too great for one so young.</Echo>
        <MainText>Surely some adult can take on responsibility.</MainText>
        <Link to={`/birthday-party`}>Next</Link>
      </CustomContainer>
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
  c12: state.s5.c12,
  nieceName: state.nieceName,
  inLawName: state.inLawName
});

export default connect(map)(s5);
