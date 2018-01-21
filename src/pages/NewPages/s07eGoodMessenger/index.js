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

export default s07eGoodMessenger;
