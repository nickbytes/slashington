import { Link } from "react-router-dom";
import { connect } from "funcup";
import React from "react";

import CustomContainer from "../../components/CustomContainer";
import Leaves from "../../components/Leaves";
import MainText from "../../components/MainText";
import SimpleScene from "../../components/SimpleScene";
import UserQuote from "../../components/UserQuote";
import Waiting from "../../components/Waiting";

const s7 = props => (
  <div>
    <SimpleScene isVisible={props.c1}>
      <CustomContainer>
        <Leaves />
        <MainText>
          Wow, you must have dozed off a little bit there... what a week.
        </MainText>
        <MainText>
          You survey the backyard. Teenagers running around, parents chatting,
          the sublte hum of Nickelback. You sit up a little bit in the
          lawnchair.
        </MainText>
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c2}>
      <CustomContainer>
        <UserQuote attrib={`Alex, brother`}>
          Have a bit of a nap there? They've really got you working hard, glad
          you are relaxing.
        </UserQuote>

        <MainText>
          Alex hands you a cold creme soda. Damn, you love creme soda.
        </MainText>
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c3}>
      <CustomContainer>
        <UserQuote attrib={`You, ${props.playerNameSaved}`}>
          Thanks. Yea, I guess so.
        </UserQuote>

        <MainText>
          You barely remember sitting down here... You're glad you came to{" "}
          {props.nieceName}'s birthday. This is exactly what you needed.
        </MainText>
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c4}>
      <CustomContainer>
        <UserQuote attrib={`Alex, brother`}>
          Oh, and {props.nieceName} just told me about the keyboard. Wow,{" "}
          {props.playerNameSaved}. She was going on about how perfect it is,
          presumably for some new game – it's hard to keep up with them.
        </UserQuote>
        <MainText>
          Alex shakes his head and takes a swig of creme soda.
        </MainText>
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c5}>
      <CustomContainer>
        <UserQuote attrib={`You, ${props.playerNameSaved}`}>
          I did a little research, they're all the rage right now.
        </UserQuote>
        <MainText>
          The words come out effortlessly, almost mechanically.
        </MainText>
        <MainText>
          You feel like you <i>really knew</i> she'd like the keyboard.
        </MainText>
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c6}>
      <CustomContainer>
        <UserQuote attrib={`Alex, brother`}>
          I did a little research, they're all the rage right now.
        </UserQuote>
        <MainText>
          The words come out effortlessly, almost mechanically.
        </MainText>
        <MainText>
          You feel like you <i>really knew</i> she'd like the keyboard. You
          checked a few forums, watched some reviews online... but where had you
          picked the keyboard up, again? And when did you get it...?
        </MainText>
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c7}>
      <CustomContainer>
        <Waiting />
        <Waiting delay={200} />
        <Waiting delay={300} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c8}>
      <CustomContainer>
        <MainText>Doesn't matter.</MainText>
        <MainText>
          She loves the gift, you're with family, and you don't have to work
          this weekend for the first time in a long while.
        </MainText>
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c9}>
      <CustomContainer>
        <UserQuote attrib={`Alex, brother`}>
          Hey – and can you believe she won backstage passes to the Frailty Stow
          show next month? Quite the birthday. She's excited.
        </UserQuote>
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c10}>
      <CustomContainer>
        <UserQuote attrib={`You, ${props.playerNameSaved}`}>
          Wow, jealous.
        </UserQuote>
        <Link to={`/credits`}>Next</Link>
      </CustomContainer>
    </SimpleScene>
  </div>
);

const map = state => ({
  c1: state.s7.c1,
  c2: state.s7.c2,
  c3: state.s7.c3,
  c4: state.s7.c4,
  c5: state.s7.c5,
  c6: state.s7.c6,
  c7: state.s7.c7,
  c8: state.s7.c8,
  c9: state.s7.c9,
  c10: state.s7.c10,
  playerNameSaved: state.playerNameSaved,
  nieceName: state.nieceName
});

export default connect(map)(s7);
