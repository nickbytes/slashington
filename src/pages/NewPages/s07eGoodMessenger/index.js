import { connect } from "funcup";
import React from "react";

import MainText from "../../../components/MainText";
import SimpleScene from "../../../components/SimpleScene";
import UserQuote from "../../../components/UserQuote";

const s07eGoodMessenger = props => (
  <div>
    <SimpleScene isVisible={props.b}>
      <MainText>This chair is comfortable.</MainText>

      <UserQuote>
        It's good having you down for the weekend, can't tell you how much it
        means to us. And we don't mean to pester you about work, you know we're
        just worried.
      </UserQuote>

      <MainText>How did you get in the backyard?</MainText>
      <UserQuote />
    </SimpleScene>
    <SimpleScene />
  </div>
);

const map = state => ({
  b: state.b
});

export default connect(map)(s07eGoodMessenger);
