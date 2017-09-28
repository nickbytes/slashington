import React from "react";

import { Button, Welcome } from "@storybook/react/demo";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { storiesOf } from "@storybook/react";

import BrokenEmail from "../components/BrokenEmail";
import DreamText from "../components/DreamText";
import TrainAnimation from "../components/TrainAnimation";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>😀 😎 👍 💯</Button>
  ));

storiesOf("DreamText", module).add("with text", () => (
  <DreamText>How could you forget?</DreamText>
));

storiesOf("BrokenEmail", module).add("BrokenEmail", () => (
  <BrokenEmail playerNameSaved={"Nick"} />
));

storiesOf("TrainAnimation", module).add("TrainAnimation", () => (
  <TrainAnimation />
));
