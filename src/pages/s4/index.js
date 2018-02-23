import { Link } from "react-router-dom";
import { connect } from "funcup";
import React from "react";

import { angryReaction, nodReaction } from "./updaters";
import { ns } from "../../updaters/ns";
import CustomContainer from "../../components/CustomContainer";
import DigitalBoard from "../../components/DigitalBoard";
import MainText from "../../components/MainText";
import NextButton from "../../components/NextButton";
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
        <MainText>For some reason, it reminds you of the night sky.</MainText>
        <MainText>Weird.</MainText>
        <NextButton onClick={() => props.update(ns("s4", "c4"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c4}>
      <CustomContainer>
        <UserQuote attrib="Unknown Voice, to your right">
          Ahhhhh, {props.playerNameSaved || "Nick"},{" "}
          {props.playerOccupationSaved || "Digital Archivist"}. Welcome.
        </UserQuote>
        <MainText>
          You nearly jump at the sound of a voice. When you turn, you see inside
          the small train station cafe, amongst a number of small empty tables,
          a table full of... {props.petTypeInputSaved}.
        </MainText>
        <NextButton onClick={() => props.update(ns("s4", "c5"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c5}>
      <CustomContainer>
        <MainText>
          All of them are dressed similarly to {props.petNameInputSaved}, but
          more grandiose and intricate, like some weird game of thrones cosplay
          mixed with a model train fanatic.
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
        <ul>
          <li>
            <PlainButton onClick={() => props.update(angryReaction())}>
              React Angrily
            </PlainButton>
          </li>
          <li>
            <PlainButton onClick={() => props.update(nodReaction())}>
              Nod
            </PlainButton>
          </li>
        </ul>
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
              Such a temper... are they even fit for this task?
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
              Are they okay? They look like they might faint...
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
              {props.playerNameSaved} had. All fine, fine.
            </UserQuote>
            <MainText>
              Some of the {props.petTypeInputSaved}s whisper to each other, as
              the lead {props.petTypeInputSaved} tries to reassure them of your
              reaction.
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
              Must we really explain this each time Comrade Igglefort?
            </UserQuote>
            <NextButton onClick={() => props.update(ns("s4", "c11"))} />
          </div>
        )}
        {props.reactedNod && (
          <div>
            <UserQuote attrib={`Comrade ${props.petFour}`}>
              Is it... hmm... pertinent to give such details now Comrade
              Igglefort? Look at the state of them...
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
            Then you should also understand it's importance. As I was saying...
          </UserQuote>

          <UserQuote paragraph>
            You, {props.playerNameSaved}, have been selected for a task. First,
            we should give you a little background on The Council and our
            Mission.
          </UserQuote>
        </UserQuote>
        <NextButton onClick={() => props.update(ns("s4", "c13"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c13}>
      <CustomContainer>
        <UserQuote attrib={`Comrade ${props.leadPet}`}>
          <UserQuote paragraph>
            Magic has been passed down throughout the ages. It used to be taught
            somewhat more openly, and accepted on some level. The rise secular
            conservatism saw magic not as a threat, but as a living manifestion
            of sainthood. Many magicians themselves agreed, and turned to
            religion to answer why they were given power.
          </UserQuote>
          <UserQuote paragraph>
            The problem became when animals revealed themselves as magicians as
            well. The first were snakes. Christians saw this as a direct
            correlation to the Garden of Eden. They were terrified. They
            believed these animals were not saints, but demons, regardless of
            what forms they appeared in afterwards.
          </UserQuote>
          <UserQuote paragraph>
            Today, magic is only taught to a handful of people and creatures,
            usually found in their adolescence, though in some cases, later.
            These "teenagers" possess abilities and interests a number of fields
            including science, computing, mathematics, humanities, history,
            languages – you get the gist. Animals possess similar talents,
            though more suited to their species.
          </UserQuote>
          <UserQuote paragraph>
            The best magicians are critical thinkers.
          </UserQuote>
        </UserQuote>
        <NextButton onClick={() => props.update(ns("s4", "c14"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c14}>
      <CustomContainer>
        <UserQuote attrib={`Comrade ${props.petThree}`}>
          Our mission, on the whole, is to unify magicians to live in harmony
          amongst non-magical beings. Accept all forms of magic, whether you
          believe it to be a divine gift or not.
        </UserQuote>

        <UserQuote attrib={`Comrade ${props.petFour}`}>
          We do this through science and research in our origins, philosophical
          discussions, and compromise.
        </UserQuote>

        <MainText>
          You feel uneasy about this. It doesn't really make sense. The lead{" "}
          {props.petTypeInputSaved}, apparently named Comrade Igglefort,
          continues.
        </MainText>
        <NextButton onClick={() => props.update(ns("s4", "c15"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c15}>
      <CustomContainer>
        <UserQuote attrib={`Comrade ${props.leadPet}`}>
          Next bit of training is the most important. We need an easy vessel for
          communication. Your keyboard, of course. Once the item is made magical
          we'll be able to communicate. Items like this will be hard to detect
          obviously, looks as though a product of modern tech. Last time, we
          tried a blender, obvious fluke...
        </UserQuote>

        <MainText>
          Something sounds vaguely familiar about a blender. A moment of deja-vu
          almost...
        </MainText>
        <NextButton onClick={() => props.update(ns("s4", "c16"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c16}>
      <CustomContainer>
        <UserQuote attrib={`Comrade ${props.leadPet}`}>
          We will bound your keyboard to one of our own though a complicated
          series of spellwork, as network protocols are too easily monitored.
          This connection, we believe, is unhackable. Messages about the mission
          delivered to the keyboard will be viewable on the computer from a
          program called...
        </UserQuote>

        <NextButton onClick={() => props.update(ns("s4", "c17"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c17}>
      <CustomContainer>
        <img src={vim} alt="Vim" style={{ width: "100%", maxWidth: "200px" }} />
        <MainText>You think to yourself. What kind of name is that?</MainText>

        <UserQuote attrib={`You, ${props.playerNameSaved}`}>
          What mission?
        </UserQuote>
        <NextButton onClick={() => props.update(ns("s4", "c18"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c18}>
      <CustomContainer>
        <MainText>
          There is quiet. {props.petTypeInputSaved}s start to look around at
          each other. Comrade Igglefort shuffles some papers in front of him.
        </MainText>

        <UserQuote attrib={`Comrade ${props.leadPet}`}>
          It is not important––
        </UserQuote>

        <MainText>
          Before Comrade Igglefort can finish, he's interrupted by another{" "}
          {props.petTypeInputSaved}.
        </MainText>
        <NextButton onClick={() => props.update(ns("s4", "c19"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c19}>
      <CustomContainer>
        <UserQuote attrib={`Comrade ${props.petTwo}`}>
          Comrade Igglefort, may we hear some possible doubts in this plan-
        </UserQuote>

        <UserQuote attrib={`Comrade ${props.leadPet}`}>
          The Council has decided. There will be no further discussions. We are
          moving forward with the candidate.
        </UserQuote>

        <MainText>
          Some {props.petTypeInputSaved}s look taken aback, or vaguely offended,
          though none continue to quarrel. You hear one of them mutter something
          like "too exposed."
        </MainText>
        <NextButton onClick={() => props.update(ns("s4", "c20"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c20}>
      <CustomContainer>
        <UserQuote attrib={`You, ${props.playerNameSaved}`}>
          Look if I'm going to be ... too exposed ... I want to know what im
          getting myself into.
        </UserQuote>

        <UserQuote attrib={`Comrade ${props.leadPet}`}>
          There is almost no danger to you.
        </UserQuote>

        <UserQuote attrib={`You, ${props.playerNameSaved}`}>
          But, they just said...
        </UserQuote>

        <UserQuote attrib={`Comrade ${props.leadPet}`}>
          Yes, the plan is quite dangerous. But you are only a{" "}
          <span>messenger</span>. You will deliver this keyboard to your{" "}
          <span>niece</span>
          tonight as a gift for her 16th birthday.
        </UserQuote>

        <MainText>
          Again you feel your legs shake. {props.nieceName}?!? She's involved in
          this.
        </MainText>
        <NextButton onClick={() => props.update(ns("s4", "c21"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c21}>
      <CustomContainer>
        <UserQuote attrib={`You, ${props.playerNameSaved}`}>
          What's going on here...?
        </UserQuote>
        <NextButton onClick={() => props.update(ns("s4", "c22"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c22}>
      <CustomContainer>
        <UserQuote attrib={`Comrade ${props.leadPet}`}>
          Your niece is going to place a curse on Frailty Stow.
        </UserQuote>
        <NextButton onClick={() => props.update(ns("s4", "c23"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c23}>
      <CustomContainer>
        <UserQuote attrib={`You, ${props.playerNameSaved}`}>
          ... Frailty Stow... the... the pop singer...?
        </UserQuote>

        <UserQuote attrib={`Comrade ${props.petThree}`}>
          It's technically country pop.
        </UserQuote>

        <MainText>
          Some murmuring about <span>country pop</span>.
        </MainText>

        <UserQuote attrib={`Comrade ${props.leadPet}`}>
          Yes, the pop singer.
        </UserQuote>

        <UserQuote>How..? Why..!?!</UserQuote>
        <NextButton onClick={() => props.update(ns("s4", "c24"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c24}>
      <CustomContainer>
        <UserQuote attrib={`Comrade ${props.petTwo}`}>
          Frailty Stow has become a sort of figurehead for one of the larger
          opposition factions of magicians. We've set it up so that{" "}
          {props.playerNameSaved} has won backstage passes and a meet and greet
          with Frailty next weekend. Once there, she will have approximately
          three minutes to place a curse upon Frailty before she goes on stage
          to perform.
        </UserQuote>

        <UserQuote attrib={`Comrade ${props.petThree}`}>
          Frailty is being looked after quite closely. Other groups of magicians
          have tried to persuade her to join their causes. She has expressed
          ideological leanings towards one of our rival factions.
        </UserQuote>

        <UserQuote attrib={`Comrade ${props.leadPet}`}>
          The task is great. We are not sure what should happen is{" "}
          {props.playerNameSaved} is caught.
        </UserQuote>
        <NextButton onClick={() => props.update(ns("s4", "c25"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c25}>
      <CustomContainer>
        <UserQuote attrib={`Comrade ${props.petThree}`}>
          They will not suspect such a young child. And anyway, they would not
          harm such a young talented child. This would be a gift to them really,
          such magical talent at such a young age.
        </UserQuote>

        <MainText>
          The way they talk about your niece with such reckless abandon sickens
          you.
        </MainText>
        <Link to={`/to-washington`}>Next</Link>
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
  reactedAngry: state.reactedAngry,
  reactedNod: state.reactedNod,
  playerNameSaved: state.playerNameSaved,
  petTypeInputSaved: state.petTypeInputSaved,
  nieceName: state.nieceName,
  leadPet: state.leadPet,
  petTwo: state.petTwo,
  petThree: state.petThree,
  petFour: state.petFour,
  petNameInputSaved: state.petNameInputSaved
});

export default connect(map)(s4);
