import React from "react";

import { storiesOf } from "@storybook/react";

import BrokenEmail from "../components/BrokenEmail";
import DreamText from "../components/DreamText";
import ItalicMind from "../components/ItalicMind";
import NotesApp from "../components/NotesApp";
import ThoughtQuote from "../components/ThoughtQuote";
import TitleModal from "../components/TitleModal";
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

storiesOf("ThoughtQuote", module)
  .add("with text", () => <ThoughtQuote>How could you forget?</ThoughtQuote>)
  .add("longer text", () => (
    <ThoughtQuote>You can barely remember last year's birthday.</ThoughtQuote>
  ));

storiesOf("ItalicMind", module)
  .add("with text", () => <ItalicMind>How could you forget?</ItalicMind>)
  .add("longer text", () => (
    <ItalicMind>You can barely remember last year's birthday.</ItalicMind>
  ));

storiesOf("TitleModal", module).add("normal", () => (
  <TitleModal chapterNumber={"01"} chapterTitle={"The Office"} />
));

storiesOf("Notes App", module).add("normal", () => <NotesApp />);
