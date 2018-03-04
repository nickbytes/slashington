import React from "react";

import { storiesOf } from "@storybook/react";

import BrokenEmail from "../components/BrokenEmail";
import CustomContainer from "../components/CustomContainer";
import DigitalBoard from "../components/DigitalBoard";
import DreamText from "../components/DreamText";
import EmailAssistant from "../components/Workspace/EmailAssistant";
import Hypnotize from "../components/Hypnotize";
import NextButton from "../components/NextButton";
import OliveWorkspace from "../components/OliveWorkspace";
import PetFormInput from "../components/PetFormInput";
import PetFormLabel from "../components/PetFormLabel";
import TitleModal from "../components/TitleModal";
import TrainAnimation from "../components/TrainAnimation";
import UserQuote from "../components/UserQuote";
import WebcamComponent from "../components/WebcamComponent";
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

storiesOf("OliveWorkspace", module).add("normal", () => <OliveWorkspace />);

storiesOf("TitleModal", module).add("normal", () => (
  <TitleModal chapterNumber={"01"} chapterTitle={"The Office"} />
));

storiesOf("Pet Name Form", module).add("normal", () => (
  <CustomContainer>
    <form
      onSubmit={e => {
        e.preventDefault();
        console.log("yea");
      }}
    >
      <PetFormLabel>Friend or relative w/ pet</PetFormLabel>
      <PetFormInput
        defaultValue=""
        placeholder="Aunt Millie"
        onChange={() => console.log("clicking")}
      />

      <PetFormLabel>Type of Pet</PetFormLabel>
      <PetFormInput
        defaultValue=""
        placeholder="parrot"
        onChange={() => console.log("clicking")}
      />

      <PetFormLabel>Pet Name</PetFormLabel>
      <PetFormInput
        defaultValue=""
        placeholder="George"
        onChange={() => console.log("clicking")}
      />
      <div>
        <NextButton />
      </div>
    </form>
  </CustomContainer>
));

storiesOf("Testing long text blocks", module).add("normal", () => (
  <UserQuote attrib="Comrade Igglefort">
    <UserQuote paragraph>
      Then you should also understand it's importance. As I was saying...
    </UserQuote>

    <UserQuote paragraph>
      You, NAME, have been selected for a task. First, we should give you a
      little background on The Council and our Mission.
    </UserQuote>
    <UserQuote paragraph>
      Magic has been passed down throughout the ages. It used to be taught
      somewhat more openly, and accepted on some level, but rises in secular
      conservatism saw it as a threat.{" "}
    </UserQuote>
    <UserQuote paragraph>
      People persecuted magicial beings. Now it is hushed, but helps to keep
      societal balance in some ways.
    </UserQuote>
    <UserQuote paragraph>
      Today, magic is only taught to a handful of people, usually found in their
      early teens, though in some cases, later. These teenagers possess
      abilities and interests a number of fields including science, computing,
      mathematics, humanities, history, languages – you get the gist.
    </UserQuote>
    <UserQuote paragraph>
      The best magicians are critical thinkers. A few will go into politics, but
      that can really go awry.
    </UserQuote>
  </UserQuote>
));

storiesOf("Digital train board", module).add("normal", () => <DigitalBoard />);

storiesOf("EmailAssistant", module).add("normal", () => <EmailAssistant />);

storiesOf("Webcam", module).add("normal", () => <WebcamComponent />);

storiesOf("Hypnotize", module).add("normal", () => <Hypnotize />);
