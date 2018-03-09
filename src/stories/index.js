import React from "react";

import { storiesOf } from "@storybook/react";

import { List, ListItem } from "../components/ListUtils";
import BrokenEmail from "../components/BrokenEmail";
import CustomContainer from "../components/CustomContainer";
import DigitalBoard from "../components/DigitalBoard";
import DreamText from "../components/DreamText";
import EchoInline from "../components/EchoInline";
import EmailAssistant from "../components/Workspace/EmailAssistant";
import MainText from "../components/MainText";
import NextButton from "../components/NextButton";
import OliveWorkspace from "../components/OliveWorkspace";
import PetFormInput from "../components/PetFormInput";
import PetFormLabel from "../components/PetFormLabel";
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

storiesOf("Workspace", module).add("Workspace", () => <Workspace />);

storiesOf("OliveWorkspace", module)
  .add("normal", () => <OliveWorkspace />)
  .add("haywire", () => <OliveWorkspace haywire />);

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

storiesOf("New Rochelle", module).add("normal", () => (
  <CustomContainer>
    <List>
      <ListItem>
        <MainText>1. a small parking lot</MainText>
      </ListItem>
      <ListItem>
        <MainText>
          2. a variety of weathered vending machines inside and out, usually
          out-of-order and/or stock
        </MainText>
      </ListItem>
      <ListItem>
        <MainText>3. a waiting room, in case of inclimate weather</MainText>
      </ListItem>
      <ListItem>
        <MainText>
          4. a small snack bar/cafe selling tar-black coffee, breakfast pastries
          wrapped in Saran Wrap, fruit snacks, magazines, energy drinks, beer,
          wine coolers, chips, candy, gum
        </MainText>
      </ListItem>
      <ListItem>
        <MainText>5. a sadly restroom</MainText>
      </ListItem>
      <ListItem>
        <MainText>
          6. and a plastic wall mount distributing pamphlets for attractions,
          restaurants, golf courses, hay rides, swimming poles, lawn care, tax
          services, and public parks
        </MainText>
      </ListItem>
    </List>
  </CustomContainer>
));

storiesOf("Explanation", module).add("normal", () => (
  <div>
    <CustomContainer>
      <MainText>
        They begin to explain in <i>unison</i>.
      </MainText>

      <MainText>
        You catch bits from each of them, who seem to be volleying phrases back
        and forth with each other.
      </MainText>

      <MainText>It's a maddening orchestra of logic.</MainText>
    </CustomContainer>

    <CustomContainer>
      <List>
        <ListItem>
          <MainText>
            Parts of their explanation even sounds familiar, though you can't
            imagine how they would.
          </MainText>
        </ListItem>
        <ListItem>
          <MainText>
            You catch that magic has existed for thousands of years.
          </MainText>
        </ListItem>
        <ListItem rotate={-10} tug={40}>
          <MainText>
            A division and secret war amongst magicial animals and magical
            humans, further divisions and factions created amongst each of those
            groups....
          </MainText>
        </ListItem>

        <ListItem rotate={-10} tug={40}>
          <MainText>Allegiances formed among unlikely pairs...</MainText>
        </ListItem>

        <ListItem rotate={-5} tug={10}>
          <MainText>
            Elaborate attempts at secrecy, inflitrations into religions and
            states, governing bodies created, and disbanded..
          </MainText>
        </ListItem>

        <ListItem />
      </List>
    </CustomContainer>

    <CustomContainer>
      <MainText>
        They stop for a moment, as if to assess if you are following along,
        before starting up again, speaking even faster.
      </MainText>
      <List>
        <ListItem rotate="-2">
          <MainText>
            Politicians, celebrities, religious figures, accountants, all types
            of humans are magicians?
          </MainText>
        </ListItem>
        <ListItem rotate="1" tug="-30">
          <MainText>
            Living in secret, though more or less interwoven into "normal"
            society. Meeting in soft pockets is this dimension, known as,{" "}
            <i>Slashes</i>.
          </MainText>
        </ListItem>
        <ListItem rotate="-3">
          <MainText>
            You wonder <i>how</i> but don't have time to ask as they continue
            you on...
          </MainText>
        </ListItem>
        <ListItem rotate="2" tug="40">
          <MainText>
            You hear about the change the internet brings, the ability to
            connect people yet also to silo.
          </MainText>
        </ListItem>
        <ListItem>
          <MainText>
            You can't possibly see how the internet would have any effect on
            people who can do <i>actual magic</i>, but you listen anyway.
          </MainText>
        </ListItem>
        <ListItem rotate="3">
          <MainText>
            The ability to spread information at an unprecedented scale...brings
            responsibilities and outcomes that no magic can even tame.
          </MainText>
        </ListItem>
        <ListItem rotate="3" tug="20">
          <MainText>
            They mention digital archivists be "extremely online" and good
            resources for The Council, but you have no idea what that means...
          </MainText>
        </ListItem>

        <ListItem rotate="3" tug="20">
          <MainText>
            How could the work you are doing for Shape Corp have any real impact
            on the world?
          </MainText>
        </ListItem>
        <ListItem>
          <MainText>
            They say that you, especially, with your <i>connection</i>, are an
            important piece. What connection...?
          </MainText>
        </ListItem>
        <ListItem>
          <MainText>
            They talk about teaching new humans and magical creatures their
            philosophies. They explain that magic is a mix of science and
            artistry, honed over a lifetime, used for good or evil or worse,
            used without thought of purpose or effect...
          </MainText>
        </ListItem>

        <ListItem>
          <MainText>about a program called, what sounds like...</MainText>
        </ListItem>
      </List>
    </CustomContainer>
  </div>
));

storiesOf("EchoInline", module).add("normal", () => (
  <MainText>
    You feel your legs start to <EchoInline>wobble</EchoInline>.
  </MainText>
));
