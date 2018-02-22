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
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c2}>
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

    <SimpleScene isVisible={props.c3}>
      <CustomContainer>
        <UserQuote attrib={`Alex, brother`}>
          Have a bit of a nap there? They've really got you working hard, glad
          you are relaxing.
        </UserQuote>

        <MainText>
          Alex hands you a cold creme soda. Damn, you love creme soda.
        </MainText>

        <UserQuote attrib={`You, ${props.playerNameSaved}`}>
          Thanks. Yea, I guess so.
        </UserQuote>

        <MainText>
          You barely remember sitting down here... what a week. You're glad you
          came to {props.nieceName}'s birthday. This is exactly what you needed.
        </MainText>

        <UserQuote attrib={`Alex, brother`}>
          Oh, and {props.nieceName} just told me about the gift. Wow,{" "}
          {props.playerNameSaved}. I don't know how you know exaclty just what
          to get her every year. She was going on about how perfect it will be
          for some new important project she is working on for school.
        </UserQuote>

        <UserQuote>
          I've gotta admit, I never know what to think of the gifts. I guess
          your kids always surprise you with their interests. I mean last years
          gift, the bizarre chemistry set and blender... I had no idea she was
          even into that sort of thing. She was locked away in her room all the
          time toying with it. It was a hit. Too bad someone stole it at school.
        </UserQuote>

        <MainText>
          What a great gift suggestion from {props.coworkerName}. With all that
          work piled up you'd forgotten a gift. You've got to thank that{" "}
          {props.coworkerName}.
        </MainText>
      </CustomContainer>
    </SimpleScene>
  </div>
);

const map = state => ({
  c1: state.s7.c1,
  c2: state.s7.c2,
  c3: state.s7.c3
});

export default connect(map)(s7);
