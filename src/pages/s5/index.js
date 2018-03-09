import { connect } from "funcup";
import React from "react";
import styled from "styled-components";

import {
  AbsoluteBlack,
  ChapterNext,
  ChapterNum,
  ChapterTitle
} from "../../components/ChapterUtils";
import { burst } from "./updaters";
import { ns } from "../../updaters/ns";
import Clickable from "../../components/Clickable";
import CustomContainer from "../../components/CustomContainer";
import Echo from "../../components/Echo";
import MainText from "../../components/MainText";
import NextButton from "../../components/NextButton";
import NextChapter from "../../components/NextChapter";
import SimpleScene from "../../components/SimpleScene";
import UserQuote from "../../components/UserQuote";

const ColorSwitch = styled.span`
  color: ${props => (props.darkness ? "#fff" : "#000")};
`;

const s5 = props => (
  <div>
    <SimpleScene isVisible={props.c0}>
      <AbsoluteBlack />
      <CustomContainer>
        <ChapterNum>Chapter 5</ChapterNum>
        <ChapterTitle>To Washington</ChapterTitle>
        <ChapterNext onClick={() => props.update(ns("s5", "c1"))} />
      </CustomContainer>
    </SimpleScene>
    <SimpleScene isVisible={props.c1}>
      <CustomContainer>
        <MainText>You board the train again.</MainText>
        <MainText>
          {props.petNameInputSaved} waves at your from the platform at the
          sliding doors close.
        </MainText>
        <MainText>
          You hear The Council's words reverberate through your head.
        </MainText>
        <NextButton onClick={() => props.update(ns("s5", "c2"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c2}>
      <CustomContainer>
        <Echo>It must be her. She is nearly halfway trained now.</Echo>

        <Echo>Exceptional ability and upside.</Echo>

        <Echo>The Council must act soon.</Echo>

        <NextButton onClick={() => props.update(ns("s5", "c3"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c3}>
      <CustomContainer>
        <MainText>
          Yet, they didn't seem to care much about the welfare of your niece.
          Not in your mind, at least.
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
          One of their less capable magicians had been caught trying to carry
          out their plan.
        </MainText>
        <MainText>They now relied on Olive.</MainText>
        <NextButton onClick={() => props.update(ns("s5", "c5"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c5}>
      <CustomContainer>
        <MainText>What had happened to the other magician...?</MainText>
        <MainText>
          You had asked, but they told you it did not concern you.
        </MainText>

        <MainText>
          You thought you heard one of the {props.petTypeInputSaved}s mumble
          something about <i>permanent memory allicilatory obfunscator</i>.
        </MainText>

        <MainText>You asked more, but they wouldn't tell you.</MainText>

        <MainText>
          Your role was to be the <i>messenger</i>.
        </MainText>
        <NextButton onClick={() => props.update(ns("s5", "c6"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c6}>
      <CustomContainer>
        <MainText>
          You didn't want to admit it, but you feared the{" "}
          {props.petTypeInputSaved}s.
        </MainText>

        <MainText>
          If they were capable of getting you to... well what is this place?
        </MainText>

        <MainText>
          <i>Slashington</i>, they had called it.
        </MainText>
        <NextButton onClick={() => props.update(ns("s5", "c7"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c7}>
      <CustomContainer>
        <MainText>
          What else were they capable of... you had never felt anything like
          what you felt from the keyboard.
        </MainText>

        <MainText>
          Even now, with it sitting right next to you, you dare not touch a key.
        </MainText>
        <MainText>You feared the power it held over you.</MainText>
        <NextButton onClick={() => props.update(ns("s5", "c8"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c8}>
      <CustomContainer>
        <MainText>The train rolls along familiar landscape.</MainText>
        <MainText>
          Rolling hills, small forests, empty highways, and country roads. The
          sun is about to peek out from behind the horizon.
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
      {props.darkness && <AbsoluteBlack />}

      <CustomContainer>
        <MainText>
          <ColorSwitch darkness={props.darkness}>
            Three or four seconds. Suddenly the car{" "}
            <Clickable clickFn={() => props.update(burst())}>bursts</Clickable>{" "}
          </ColorSwitch>
          with light, you grimace and squint in the stark contrast.
        </MainText>
        <MainText>
          When you open your eyes, the train car is again packed with people,
          regular people.
        </MainText>

        <MainText>
          People reading their tablets, morning papers, talking on cell phones,
          glancing out the window as you pass through Baltimore.
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
          You hear the concern in his voice. He thinks you brought it to do some
          work this weekend.
        </MainText>

        <MainText>If only...</MainText>
        <NextButton onClick={() => props.update(ns("s5", "c12"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c12}>
      <CustomContainer>
        <UserQuote attrib={`You, ${props.playerNameSaved}`}>
          A gift for {props.nieceName}.
        </UserQuote>
        <MainText>
          Careful not to touch a key, you put the keyboard into your duffle bag.
        </MainText>
        <NextButton onClick={() => props.update(ns("s5", "c13"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c13}>
      <CustomContainer>
        <MainText>
          He says something under his breath about it being{" "}
          <i>better than scientific equipment</i>, then goes on chatting about
          work, neighbors, {props.inLawName}'s new job... only do you take
          notice when he mentions the exceptional grades {props.nieceName} has
          been getting.
        </MainText>
        <NextButton onClick={() => props.update(ns("s5", "c14"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c14}>
      <CustomContainer>
        <UserQuote attrib={`You, ${props.playerNameSaved}`}>
          That's great, really great.
        </UserQuote>
        <MainText>You try to hide the worry in your voice.</MainText>
        <NextChapter to={`/birthday-party`} />
      </CustomContainer>
    </SimpleScene>
  </div>
);

const map = state => ({
  c0: state.s5.c0,
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
  playerOccupationSaved: state.playerOccupationSaved,
  darkness: state.darkness,
  petTypeInputSaved: state.petTypeInputSaved
});

export default connect(map)(s5);
