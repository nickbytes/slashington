import { connect } from "funcup";
import React from "react";

import MainText from "../../../components/MainText";
import SimpleScene from "../../../components/SimpleScene";

const s07eGoodMessenger = props => (
  <div>
    <SimpleScene isVisible={props.b}>
      <MainText>Some text.</MainText>
    </SimpleScene>
    <SimpleScene>
      {/* <InProgress>Memory wipe ending :scream: </InProgress> */}
    </SimpleScene>
  </div>
);

const map = state => ({
  b: state.b
});

export default connect(map)(s07eGoodMessenger);
