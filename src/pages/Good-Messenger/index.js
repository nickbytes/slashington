import { connect } from "funcup";
import React from "react";

import ChapterTitle from "../../components/ChapterTitle";
import CustomContainer from "../../components/CustomContainer";
import InProgress from "../../components/InProgress";

const GoodMessengerScene = props => (
  <div>
    <ChapterTitle>Good Messenger</ChapterTitle>
    <CustomContainer>
      <InProgress>Candles animation</InProgress>
    </CustomContainer>
    <CustomContainer />
  </div>
);

const map = state => ({
  finalSceneReady: state.finalSceneReady
});

export default connect(map)(GoodMessengerScene);
