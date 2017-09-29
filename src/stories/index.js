import React from "react";

import { storiesOf } from "@storybook/react";

import BrokenEmail from "../components/BrokenEmail";
import DreamText from "../components/DreamText";
import TrainAnimation from "../components/TrainAnimation";
import Workspace from "../components/Workspace";

storiesOf("DreamText", module)
  .add("with text", () => <DreamText>How could you forget?</DreamText>)
  .add("longer text", () => (
    <DreamText>You can barely remember last year's birthday.</DreamText>
  ));

storiesOf("BrokenEmail", module).add("BrokenEmail", () => (
  <BrokenEmail playerNameSaved={"Nick"} />
));

storiesOf("TrainAnimation", module).add("TrainAnimation", () => (
  <TrainAnimation />
));

storiesOf("Workspace", module).add("Workspace", () => <Workspace />);
