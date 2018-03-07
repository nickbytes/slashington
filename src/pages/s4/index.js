import { connect } from "funcup";
import React from "react";

import { List, ListItem } from "../../components/ListUtils";
import { angryReaction, nodReaction } from "./updaters";
import { ns } from "../../updaters/ns";
import CustomContainer from "../../components/CustomContainer";
import DigitalBoard from "../../components/DigitalBoard";
import MainText from "../../components/MainText";
import NextButton from "../../components/NextButton";
import NextChapter from "../../components/NextChapter";
import PlainButton from "../../components/PlainButton";
import SimpleScene from "../../components/SimpleScene";
import UserQuote from "../../components/UserQuote";
import vim from "../../images/vim.png";

const s4 = props => (
  <div>
    <SimpleScene isVisible={props.c1}>
      <CustomContainer>
        <MainText>You stand inside an empty waiting room.</MainText>
        <MainText>
          You look up and see the digital train schedule board whizzing
          uncontrollably.
        </MainText>
        <NextButton onClick={() => props.update(ns("s4", "c2"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c2}>
      <CustomContainer>
        <DigitalBoard />
        <NextButton onClick={() => props.update(ns("s4", "c3"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c3}>
      <CustomContainer>
        <MainText>
          For some reason, it reminds you of stars in the night sky, and you
          almost forget that you've just spoken to a {props.petTypeInputSaved}.
        </MainText>
        <NextButton onClick={() => props.update(ns("s4", "c4"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c4}>
      <CustomContainer>
        <UserQuote attrib="Unknown Voice, to your right">
          Ahhhhh, {props.playerNameSaved}, {props.playerOccupationSaved}.
          Welcome.
        </UserQuote>
        <MainText>
          You nearly jump at the sound of a voice. When you turn, you see inside
          the small train station cafe, amongst a number of small empty tables,
          a table full of... {props.petTypeInputSaved}s.
        </MainText>
        <NextButton onClick={() => props.update(ns("s4", "c5"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c5}>
      <CustomContainer>
        <MainText>
          All of them are dressed similarly to {props.petNameInputSaved}, but
          more grandiose and intricate.
        </MainText>

        <MainText>
          They look like a mix between model train fanatics and Game of Thrones
          fans.
        </MainText>

        <UserQuote
          attrib={`${props.petTypeInputSaved}, sitting at head of table`}
        >
          Have a seat, {props.playerNameSaved}. I am Comrade {props.leadPet}.
        </UserQuote>
        <MainText>
          The {props.petTypeInputSaved} nods towards an empty seat at their
          table. Your feet seem to walk without you telling them to do so.
        </MainText>
        <NextButton onClick={() => props.update(ns("s4", "c6"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c6}>
      <CustomContainer>
        <UserQuote attrib={`Comrade ${props.leadPet}`}>
          We, as you might know, are The Council.
        </UserQuote>
        <NextButton onClick={() => props.update(ns("s4", "c7"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c7}>
      <CustomContainer>
        <List>
          <ListItem>
            <PlainButton onClick={() => props.update(angryReaction())}>
              React Angrily
            </PlainButton>
          </ListItem>
          <ListItem>
            <PlainButton onClick={() => props.update(nodReaction())}>
              Nod
            </PlainButton>
          </ListItem>
        </List>
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c8}>
      <CustomContainer>
        {props.reactedAngry && (
          <div>
            <UserQuote attrib={`You, ${props.playerNameSaved}`}>
              What the <i>fuck</i> is going on?
            </UserQuote>
            <UserQuote attrib={`Comrade ${props.petThree}`}>
              Such a temper... are they even fit for this task, Comrade{" "}
              {props.leadPet}?
            </UserQuote>
            <UserQuote attrib={`Comrade ${props.petTwo}`}>
              This is a valid question. Look at them... dishevled, mad... how
              can we know they'll fulfill the task and not...
            </UserQuote>
            <MainText>
              All around the table, eyes look over every inch of you.
            </MainText>
            <NextButton onClick={() => props.update(ns("s4", "c9"))} />
          </div>
        )}

        {props.reactedNod && (
          <div>
            <UserQuote attrib={`Comrade ${props.petTwo}`}>
              Did you already know that...?
            </UserQuote>
            <MainText>
              Glancing around the table, one {props.petTypeInputSaved} mutters
              to another
            </MainText>
            <UserQuote attrib={`Comrade ${props.petFour}`}>
              Are they okay? They look like they might faint...I told Comrade{" "}
              {props.leadPet}...
            </UserQuote>

            <MainText>They are talking about you...</MainText>
            <UserQuote attrib={`You, ${props.playerNameSaved}`}>
              {props.petNameInputSaved}... {props.petNameInputSaved} told me.
            </UserQuote>
            <NextButton onClick={() => props.update(ns("s4", "c9"))} />
          </div>
        )}
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c9}>
      <CustomContainer>
        {props.reactedAngry && (
          <div>
            <UserQuote attrib={`Comrade ${props.leadPet}`}>
              Completely normal response. You all saw the week{" "}
              {props.playerNameSaved} had {props.petThree}. All fine, fine{" "}
              {props.petFour}.
            </UserQuote>
            <MainText>
              Some of the {props.petTypeInputSaved}s whisper to each other, as
              the lead {props.petTypeInputSaved}, Comrade {props.leadPet}, tries
              to reassure them of your reaction.
            </MainText>
            <UserQuote attrib={`Comrade ${props.leadPet}`}>
              You have been--
            </UserQuote>
            <NextButton onClick={() => props.update(ns("s4", "c10"))} />
          </div>
        )}
        {props.reactedNod && (
          <div>
            <UserQuote attrib={`Comrade ${props.leadPet}`}>
              Well, good. Good, good. Okay, then.
            </UserQuote>
            <MainText>
              Some tension seems to have been released from the group. There is
              nodding.
            </MainText>
            <UserQuote attrib={`Comrade ${props.leadPet}`}>
              You have been--
            </UserQuote>
            <NextButton onClick={() => props.update(ns("s4", "c10"))} />
          </div>
        )}
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c10}>
      <CustomContainer>
        {props.reactedAngry && (
          <div>
            <UserQuote attrib={`Comrade ${props.petThree}`}>
              Must we really explain this each time Comrade {props.leadPet}?
            </UserQuote>
            <NextButton onClick={() => props.update(ns("s4", "c11"))} />
          </div>
        )}
        {props.reactedNod && (
          <div>
            <UserQuote attrib={`Comrade ${props.petFour}`}>
              Is it... hmm... pertinent to give such details now Comrade{" "}
              {props.leadPet}? Look at the state of them...
            </UserQuote>
            <NextButton onClick={() => props.update(ns("s4", "c11"))} />
          </div>
        )}
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c11}>
      <CustomContainer>
        <UserQuote attrib={`Comrade ${props.leadPet}`}>
          Rule 17, Article 405b states that the counselor must explain
          appropriate context for me the-
        </UserQuote>

        <UserQuote attrib={`Comrade ${props.petTwo}`}>
          I know what the article states, Comrade {props.leadPet}.
        </UserQuote>

        <MainText>
          You look around the table as the two {props.petTypeInputSaved} bicker.
          Some are rolling their eyes, some nodding in approval, one solemnly
          stirs its coffee, paying little attention.
        </MainText>
        <NextButton onClick={() => props.update(ns("s4", "c12"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c12}>
      <CustomContainer>
        <UserQuote attrib={`Comrade ${props.leadPet}`}>
          <UserQuote paragraph>
            Then you should also understand it's importance, {props.petFour}. As
            I was saying...
          </UserQuote>

          <UserQuote paragraph>You must have many questions.</UserQuote>
        </UserQuote>

        <MainText>
          You do. You can't tell if you feel like laughing, or crying.
        </MainText>

        <UserQuote attrib={`You, ${props.playerNameSaved}`}>
          Who are you? What is this? What is going on?
        </UserQuote>

        <UserQuote attrib={`Comrade ${props.leadPet}`}>
          Let us try to answer a few of these.
        </UserQuote>
        <NextButton onClick={() => props.update(ns("s4", "c13"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c13}>
      <CustomContainer>
        <MainText>
          They begin to explain in <i>unison</i>.
        </MainText>

        <MainText>
          You catch bits from each of them, who seem to be volleying phrases
          back and forth with each other.
        </MainText>

        <MainText>It's a maddening orchestra of logic.</MainText>
        <NextButton onClick={() => props.update(ns("s4", "c14"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c14}>
      <CustomContainer>
        <MainText>
          Parts of it even sound familiar, though you can't imagine how they
          would.
        </MainText>

        <MainText>
          You catch that magic has existed for thousands of years.
        </MainText>

        <MainText>
          A division and secret war amongst magicial animals and magical humans,
          further divisions and factions created amongst each of those
          groups...Elaborate attempts at secrecy, inflitrations into religions
          and states, governing bodies created, and disbanded...
        </MainText>
        <NextButton onClick={() => props.update(ns("s4", "c15"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c15}>
      <CustomContainer>
        <MainText>
          They stop for a moment, as if to assess if you are following along,
          before starting up again, speaking even faster.
        </MainText>
        <MainText>
          Politicians, celebrities, Popes, common people, all types of
          magicians? All in hiding? You wonder how but don't have time to ask as
          they continue you on...You hear about the change the internet brings,
          the ability to connect people yet also to silo. The ability to spread
          information at an unprecedented scale...
        </MainText>
        <MainText>
          They mention {props.playerOccupationSaved}s be "extremely online" and
          good candidates, but you have no idea what that means...They talk
          about teaching new humans and magical creatures their philosophies,
          centered around science, and exploration of their craft...about a
          program called, what sounds like...
        </MainText>
        <NextButton onClick={() => props.update(ns("s4", "c16"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene>
      <CustomContainer>
        <MainText>
          <img
            src={vim}
            alt="Vim"
            style={{ width: "100%", maxWidth: "200px" }}
          />
        </MainText>
        <NextButton onClick={() => props.update(ns("s4", "c16"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene>
      <CustomContainer>
        <MainText>
          A program? Like coursework? A computer program? You're left wondering
          as they continue...
        </MainText>
      </CustomContainer>
    </SimpleScene>

    <SimpleScene>
      <CustomContainer>
        <MainText>
          ...they describe successfull magicians: curious, empathetic, fierce,
          creative, hungry... and you can't help but feel like they're talking
          about you... you <i>are</i> standing here, in front of them...
        </MainText>
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c16}>
      <CustomContainer>
        <MainText>
          They stop abruptly, as if an orchestra cut off by their maestro
          suddenly.
        </MainText>
        <MainText>
          They look expectantly at you, as if they assumed you would be able to
          process that barrage of information.
        </MainText>
        <NextButton onClick={() => props.update(ns("s4", "c17"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c17}>
      <CustomContainer>
        <MainText>
          One of them grabs the keyboard and waves their fingers over the top of
          it.
        </MainText>

        <MainText>
          When you imagined what magic would look like, but it was not this.
        </MainText>

        <MainText>
          You imagined it so artistic, graceful, and nuanced. But here you are,
          watching <i>real magic</i>, and in the corniest way, this{" "}
          {props.petTypeInputSaved} waved 'spirit fingers' over the keyboard.
          You're almost disappointed, before you see the{" "}
          {props.petTypeInputSaved} push a key and you watch the keyboard light
          up.
        </MainText>
        <NextButton onClick={() => props.update(ns("s4", "c18"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c18}>
      <CustomContainer>
        <MainText>
          It's as if the sun itself is hiding behind each of the keys. It's a
          bright light, imminating 3-4 inches between the cracks of each of the
          keys. The glow feels warm and in your mind you know that must be what
          magic feels like.
        </MainText>
        <NextButton onClick={() => props.update(ns("s4", "c19"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c19}>
      <CustomContainer>
        <MainText>You love the feeling.</MainText>
        <UserQuote attrib={`Comrade ${props.leadPet}`}>
          The next part of training is the most important, the first mission is
          dangerous, but we are nearly out of time.
        </UserQuote>
        <NextButton onClick={() => props.update(ns("s4", "c20"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c20}>
      <CustomContainer>
        <UserQuote attrib={`You, ${props.playerNameSaved}`}>
          What mission am I to do?
        </UserQuote>

        <MainText>
          You ask almost brashly, but you can't help it, you are drunk with
          confidence (the magic?) from the keyboard. The feeling dies within
          seconds and you wondered why you even said anything.
        </MainText>
        <NextButton onClick={() => props.update(ns("s4", "c21"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c21}>
      <CustomContainer>
        <UserQuote attrib={`Comrade ${props.leadPet}`}>
          You, {props.playerNameSaved}, are the messenger. You will deliver this
          your niece, Olive.
        </UserQuote>
        <NextButton onClick={() => props.update(ns("s4", "c22"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c22}>
      <CustomContainer>
        <UserQuote attrib={`You, ${props.playerNameSaved}`}>What?</UserQuote>
        <MainText>The words spit themselves out.</MainText>
        <NextButton onClick={() => props.update(ns("s4", "c23"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c23}>
      <CustomContainer>
        <UserQuote attrib={`Comrade ${props.leadPet}`}>
          Your niece will place a curse on Frailty Stow, once she has learned
          the appropriate magical methods.
        </UserQuote>
        <NextButton onClick={() => props.update(ns("s4", "c24"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c24}>
      <CustomContainer>
        <UserQuote attrib={`You, ${props.playerNameSaved}`}>
          Frailty Stow? The pop singer?
        </UserQuote>
        <NextButton onClick={() => props.update(ns("s4", "c25"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c25}>
      <CustomContainer>
        <UserQuote attrib={`Comrade ${props.petTwo}`}>
          Country-pop, really.
        </UserQuote>
        <MainText>
          There are nods, and murmors of agreement about <i>country-pop</i>.
        </MainText>
        <NextButton onClick={() => props.update(ns("s4", "c26"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c26}>
      <CustomContainer>
        <UserQuote attrib={`Comrade ${props.leadPet}`}>
          Yes, the, er... country-pop singer.
        </UserQuote>
        <NextButton onClick={() => props.update(ns("s4", "c27"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c27}>
      <CustomContainer>
        <UserQuote attrib={`You, ${props.playerNameSaved}`}>
          How? Is she going to be in danger? Why must it be her? She's only 15,
          well 16 tomorrow...
        </UserQuote>
        <NextChapter to={`/to-washington`} />
      </CustomContainer>
    </SimpleScene>
  </div>
);

const map = state => ({
  c1: state.s4.c1,
  c2: state.s4.c2,
  c3: state.s4.c3,
  c4: state.s4.c4,
  c5: state.s4.c5,
  c6: state.s4.c6,
  c7: state.s4.c7,
  c8: state.s4.c8,
  c9: state.s4.c9,
  c10: state.s4.c10,
  c11: state.s4.c11,
  c12: state.s4.c12,
  c13: state.s4.c13,
  c14: state.s4.c14,
  c15: state.s4.c15,
  c16: state.s4.c16,
  c17: state.s4.c17,
  c18: state.s4.c18,
  c19: state.s4.c19,
  c20: state.s4.c20,
  c21: state.s4.c21,
  c22: state.s4.c22,
  c23: state.s4.c23,
  c24: state.s4.c24,
  c25: state.s4.c25,
  c26: state.s4.c26,
  c27: state.s4.c27,
  reactedAngry: state.reactedAngry,
  reactedNod: state.reactedNod,
  playerNameSaved: state.playerNameSaved,
  petTypeInputSaved: state.petTypeInputSaved,
  playerOccupationSaved: state.playerOccupationSaved,
  nieceName: state.nieceName,
  leadPet: state.leadPet,
  petTwo: state.petTwo,
  petThree: state.petThree,
  petFour: state.petFour,
  petNameInputSaved: state.petNameInputSaved
});

export default connect(map)(s4);
