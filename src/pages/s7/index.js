import { Link } from "react-router-dom";
import { connect } from "funcup";
import React from "react";

import CustomContainer from "../../components/CustomContainer";
import Leaves from "../../components/Leaves";
import MainText from "../../components/MainText";
import SimpleScene from "../../components/SimpleScene";
import UserQuote from "../../components/UserQuote";

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
          presumably for some new game – it's hard to keep up with them. some .
        </UserQuote>
        <MainText>
          Alex shakes his head and takes a swig of creme soda.
        </MainText>
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c5}>
      <CustomContainer>
        <MainText>You think about how you had research keyb</MainText>
        <Link to={`/credits`}>Next</Link>
      </CustomContainer>
    </SimpleScene>
  </div>
);

const map = state => ({
  c1: state.s7.c1,
  c2: state.s7.c2,
  c3: state.s7.c3,
  playerNameSaved: state.playerNameSaved,
  nieceName: state.nieceName
});

export default connect(map)(s7);
