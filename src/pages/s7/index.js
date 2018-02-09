import { connect } from "funcup";
import React from "react";

import DemoMode from "../../components/DemoMode";
import Leaves from "../../components/Leaves";
import MainText from "../../components/MainText";
import SimpleScene from "../../components/SimpleScene";
import UserQuote from "../../components/UserQuote";

const s7 = props => (
  <div>
    <DemoMode />
    <SimpleScene isVisible={props.c}>
      <Leaves />
    </SimpleScene>

    <SimpleScene>
      <Leaves />
      <MainText>
        Wow, you must have dozed off a little bit there... what a week.
      </MainText>
      <MainText>
        You survey the backyard. Teenagers running around, parents chatting, the
        sublte hum of Nickelback. You sit up a little bit in the lawnchair.
      </MainText>
    </SimpleScene>

    <SimpleScene>
      <UserQuote>
        Have a bit of a nap there? They've really got you working hard.
      </UserQuote>

      <MainText>
        Alex hands you a cold creme soda. Damn, you love creme soda.
      </MainText>

      <UserQuote>Thanks. Yea, I guess so.</UserQuote>
    </SimpleScene>
  </div>
);

const map = state => ({
  c: state.s7.c
});

export default connect(map)(s7);
