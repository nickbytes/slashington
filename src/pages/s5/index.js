import { connect } from "funcup";
import React from "react";

import { ns } from "../../updaters/ns";
import Clickable from "../../components/Clickable";
import CustomContainer from "../../components/CustomContainer";
import Echo from "../../components/Echo";
import MainText from "../../components/MainText";
import NextButton from "../../components/NextButton";
import NextChapter from "../../components/NextChapter";
import SimpleScene from "../../components/SimpleScene";
import UserQuote from "../../components/UserQuote";

const s5 = props => (
  <div>
    <SimpleScene isVisible={props.c1}>
      <CustomContainer>
        <MainText>
          You board the train again and watch {props.petNameInputSaved} waving
          at you through the glass in the sliding doors. You hear The Council's
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
          They listened to your pleas to help, to take the task yourself, but
          they would have nothing of it.
        </MainText>

        <MainText>You are just the messenger.</MainText>

        <NextButton onClick={() => props.update(ns("s5", "c3"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c3}>
      <CustomContainer>
        <MainText>
          Yet, they didnt seem to care much about the welfare of your niece. Not
          in your mind, at least.
        </MainText>

        <MainText>
          Yes, they see <i>value</i> in her, but they do not <i>care</i> for
          her.
        </MainText>

        <MainText>
          You feel the familiar jolt of the train as it begins to move forward.
          The train slowly pulls away from the station.
        </MainText>
        <NextButton onClick={() => props.update(ns("s5", "c4"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c4}>
      <CustomContainer>
        <MainText>The dangers, they told you, were great.</MainText>
        <MainText>
          One of their less capable magicians had been caught, before even being
          able to carry out their plan. They now relied on Olive.
        </MainText>
        <NextButton onClick={() => props.update(ns("s5", "c5"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c5}>
      <CustomContainer>
        <MainText>
          What had happened to the other magician...? You had asked, but they
          would not speak of it, and when you thought you heard one of the{" "}
          {props.petTypeInputSaved}s mumble something about{" "}
          <i>permanent memory allicilatory obfunscator</i> they didn't explain,
          you asked more, but they would not tell you.
        </MainText>
        <NextButton onClick={() => props.update(ns("s5", "c6"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c6}>
      <CustomContainer>
        <MainText>
          You didnt want to admit it, but you feared the{" "}
          {props.petNameInputSaved}s. If they were capable of getting you to...
        </MainText>

        <MainText>
          ... well what is this place ...? Slashington, they had called it.
        </MainText>

        <MainText>
          You think about it for a second. Another dimension? A rip in reality?
          More like a soft tear.
        </MainText>
        <NextButton onClick={() => props.update(ns("s5", "c7"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c7}>
      <CustomContainer>
        <MainText>
          Anyway, what else were they capable of... you had never felt anything
          like what you felt from the keyboard.
        </MainText>

        <MainText>
          Even now, with it sitting right next to you, you dared not touch a
          key. You feared the power it held over you.
        </MainText>
        <NextButton onClick={() => props.update(ns("s5", "c8"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c8}>
      <CustomContainer>
        <MainText>
          The train rolls along familiar landscape. Rolling hills, small
          forests, empty highways, and country roads. The sun is about to peek
          out from behind the horizon.
        </MainText>
        <NextButton onClick={() => props.update(ns("s5", "c9"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c9}>
      <CustomContainer>
        <MainText>
          There's a tunnel approaching. Is there a tunnel on the Northeast
          Regional...?
        </MainText>
        <NextButton onClick={() => props.update(ns("s5", "c10"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c10}>
      <CustomContainer>
        <MainText>
          Three or four seconds. Suddenly the car <Clickable>bursts</Clickable>{" "}
          with light, you grimace and squint in the stark contrast. When you
          open your eyes, the train car is again packed with people, regular
          people. People reading their tablets, morning papers, talking on cell
          phones, glancing out the window as you pass through Baltimore.
        </MainText>
        <NextButton onClick={() => props.update(ns("s5", "c11"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c11}>
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
        <NextButton onClick={() => props.update(ns("s5", "c12"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c12}>
      <CustomContainer>
        <UserQuote attrib={`You, ${props.playerNameSaved}`}>
          A gift for {props.nieceName}.
        </UserQuote>
        <MainText>
          Carefully not to touch a key, you put the keyboard into your duffle
          bag.
        </MainText>
        <NextButton onClick={() => props.update(ns("s5", "c13"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c13}>
      <CustomContainer>
        <MainText>
          He goes on chatting about work, neighbors, {props.inLawName}'s job,
          only do you take notice when he mentions the exceptional grades{" "}
          {props.nieceName} has been getting.
        </MainText>
        <NextButton onClick={() => props.update(ns("s5", "c14"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c14}>
      <CustomContainer>
        <UserQuote attrib={`You, ${props.playerNameSaved}`}>
          That's great, real great.
        </UserQuote>
        <MainText>You try to hide the dread in your voice.</MainText>
        <NextChapter to={`/birthday-party`} />
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
  c13: state.s5.c13,
  c14: state.s5.c14,
  nieceName: state.nieceName,
  inLawName: state.inLawName,
  petNameInputSaved: state.petNameInputSaved,
  playerNameSaved: state.playerNameSaved,
  playerOccupationSaved: state.playerOccupationSaved
});

export default connect(map)(s5);
