import { Link } from "react-router-dom";
import { connect } from "funcup";
import React from "react";

import { angryReaction, nodReaction } from "./updaters";
import { ns } from "../../updaters/ns";
import DemoMode from "../../components/DemoMode";
import MainText from "../../components/MainText";
import NextButton from "../../components/NextButton";
import PlainButton from "../../components/PlainButton";
import SimpleScene from "../../components/SimpleScene";
import UserQuote from "../../components/UserQuote";

const s4 = props => (
  <div>
    <DemoMode />
    <SimpleScene isVisible={props.c1}>
      <MainText>You stand inside an empty waiting room.</MainText>
      <MainText>
        You look up and see the digital train schedule board whizzing
        uncontrollably.
      </MainText>
      <NextButton onClick={() => props.update(ns("s4", "c2"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c2}>
      <h1>Digital board whizzing accept one place says a train is arriving</h1>
      <NextButton onClick={() => props.update(ns("s4", "c3"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c3}>
      <MainText>Weird.</MainText>
      <NextButton onClick={() => props.update(ns("s4", "c4"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c4}>
      <UserQuote attrib="Unknown Voice, to your right">
        Ahhhhh, {props.playerNameSaved || "Nick"},{" "}
        {props.playerOccupationSaved || "Digital Archivist"}. Welcome.
      </UserQuote>
      <MainText>
        You nearly jump at the sound of a voice. When you turn, you see inside
        the small train station cafe, amongst a number of small empty tables, a
        table full of... {props.petTypeInputSaved}.
      </MainText>
      <NextButton onClick={() => props.update(ns("s4", "c5"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c5}>
      <MainText>
        All of them are dressed similarly to {props.petNameInputSaved}, but more
        grandiose and intricate, like some weird game of thrones cosplay mixed
        with a model train fanatic.
      </MainText>

      <UserQuote
        attrib={`${props.petTypeInputSaved}, sitting at head of table`}
      >
        Have a seat.
      </UserQuote>
      <MainText>
        The {props.petTypeInputSaved} nods towards an empty seat at their table.
        Your feet seem to walk without you telling them to do so.
      </MainText>
      <NextButton onClick={() => props.update(ns("s4", "c6"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c6}>
      <UserQuote>We, as you might know, are The Council.</UserQuote>
      <NextButton onClick={() => props.update(ns("s4", "c7"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c7}>
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
    </SimpleScene>

    <SimpleScene isVisible={props.c8}>
      {props.reactedAngry && (
        <div>
          <UserQuote>What the fuck is going on?</UserQuote>
          <UserQuote>
            Such a temper... are they even fit for this task?
          </UserQuote>
          <UserQuote>
            This is a valid question. Look at them... dishevled, mad... how can
            we know they'll fulfill the task and not...
          </UserQuote>
          <MainText>
            All around the table, eyes look over every inch of you.
          </MainText>
          <NextButton onClick={() => props.update(ns("s4", "c9"))} />
        </div>
      )}

      {props.reactedNod && (
        <div>
          <UserQuote>Did you already know that...?</UserQuote>
          <MainText>
            Glancing around the table, one {props.petTypeInputSaved} mutters to
            another
          </MainText>
          <UserQuote>
            Are they okay? They look like they might faint...
          </UserQuote>

          <MainText>They are talking about you...</MainText>
          <UserQuote>
            {props.petNameInputSaved}... {props.petNameInputSaved} told me.
          </UserQuote>
          <NextButton onClick={() => props.update(ns("s4", "c9"))} />
        </div>
      )}
    </SimpleScene>

    <SimpleScene isVisible={props.c9}>
      {props.reactedAngry && (
        <div>
          <UserQuote>
            Completely normal response. You all saw the week{" "}
            {props.playerNameSaved} had. All fine. fine.
          </UserQuote>
          <MainText>
            Some of the {props.petTypeInputSaved}s whisper to each other, as the{" "}
            {props.petTypeInputSaved} tries to reassure them of your reaction.
          </MainText>
          <UserQuote>You have been--</UserQuote>
          <NextButton onClick={() => props.update(ns("s4", "c10"))} />
        </div>
      )}
      {props.reactedNod && (
        <div>
          <UserQuote>Well, good. Good, good. Okay, then.</UserQuote>
          <MainText>
            Some tension seems to have been released from the group. There is
            nodding.
          </MainText>
          <UserQuote>You have been--</UserQuote>
          <NextButton onClick={() => props.update(ns("s4", "c10"))} />
        </div>
      )}
    </SimpleScene>

    <SimpleScene isVisible={props.c10}>
      {props.reactedAngry && (
        <div>
          <UserQuote>
            Must we really explain this each time Comrade Igglefort?
          </UserQuote>
          <NextButton onClick={() => props.update(ns("s4", "c11"))} />
        </div>
      )}
      {props.reactedNod && (
        <div>
          <UserQuote>
            Is it... hmm... pertinent to give such details now Comrade
            Igglefort? Look at the state of them...
          </UserQuote>
          <NextButton onClick={() => props.update(ns("s4", "c11"))} />
        </div>
      )}
    </SimpleScene>

    <SimpleScene isVisible={props.c11}>
      <UserQuote attrib="Comrade Igglefort">
        Rule 17, Article 405b states that the counselor must explain appropriate
        context for me the-
      </UserQuote>

      <UserQuote attrib="Comrade Najj">
        I know what the article states.
      </UserQuote>

      <MainText>
        You look around the table as the two {props.petTypeInputSaved} bicker.
        Some are rolling their eyes, some nodding in approval, one solemnly
        stirs it's coffee, paying little attention.
      </MainText>
      <NextButton onClick={() => props.update(ns("s4", "c12"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c12}>
      <UserQuote attrib="Comrade Igglefort">
        <UserQuote paragraph>
          Then you should also understand it's importance. As I was saying...
        </UserQuote>

        <UserQuote paragraph>
          You, {props.playerNameSaved}, have been selected for a task. First, we
          should give you a little background on The Council and our Mission.
        </UserQuote>
      </UserQuote>
      <NextButton onClick={() => props.update(ns("s4", "c13"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c13}>
      <UserQuote attrib="Comrade Igglefort">
        <UserQuote paragraph>
          Magic has been passed down throughout the ages. It used to be taught
          somewhat more openly, and accepted on some level. The rise secular
          conservatism saw magic not as a threat, but as a living manifestion of
          sainthood. Many magicians themselves agreed, and turned to religion to
          answer why they were given power.
        </UserQuote>
        <UserQuote paragraph>
          The problem became when animals revealed themselves as magicians as
          well. The first were snakes. Christians saw this as a direct
          correlation to the Garden of Eden. They were terrified. They believed
          these animals were not saints, but demons, regardless of what forms
          they appeared in afterwards.
        </UserQuote>
        <UserQuote paragraph>
          Today, magic is only taught to a handful of people and creatures,
          usually found in their adolescence, though in some cases, later. These
          "teenagers" possess abilities and interests a number of fields
          including science, computing, mathematics, humanities, history,
          languages – you get the gist. Animals possess similar talents, though
          more suited to their species.
        </UserQuote>
        <UserQuote paragraph>
          The best magicians are critical thinkers. A few will go into politics,
          but that can really go awry...
        </UserQuote>
      </UserQuote>
      <NextButton onClick={() => props.update(ns("s4", "c14"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c14}>
      <UserQuote attrib="Comrade Barringzen">
        Our mission, on the whole, is to unify magicians to live in harmony
        amongst non-magical beings. Accept all forms of magic, whether you
        believe it to be a divine gift or not.
      </UserQuote>

      <UserQuote>
        We do this through science and research in our origins. Philosophical
        discussions. Opening minds.
      </UserQuote>

      <MainText>
        You feel uneasy about this. It doesn't really make sense. The lead{" "}
        {props.petTypeInputSaved}, apparently named Comrade Igglefort,
        continues.
      </MainText>
      <NextButton onClick={() => props.update(ns("s4", "c15"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c15}>
      <UserQuote attrib="Comrade Igglefort">
        Next bit of training is the most important. We need an easy vessel for
        communication. Your keyboard, of course. Once items are made magical
        we'll be able to communicate. Items like this will be hard to detect
        obviously, looks as though a product of modern tech. Last time tried a
        blender, obvious fluke...
      </UserQuote>

      <MainText>
        Something sounds vaguely familiar about a blender. A moment of deja-vu
        almost...
      </MainText>
      <NextButton onClick={() => props.update(ns("s4", "c16"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c16}>
      <UserQuote>
        We have bound your keyboard to one of our own though a complicated
        series of spellwork, network protocols are too easily monitored, this
        connection is unhackable. Messages about the mission delivered to the
        keyboard will be viewable on the computer from a program called... vim.
      </UserQuote>

      <UserQuote>You think to yourself. What kind of name is that?</UserQuote>

      <UserQuote>What mission?</UserQuote>
      <NextButton onClick={() => props.update(ns("s4", "c17"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c17}>
      <MainText>
        There is quiet. {props.petTypeInputSaved}s start to look around at each
        other. Comrade Igglefort shuffles some papers in front of him.
      </MainText>

      <UserQuote>It is not important––</UserQuote>

      <MainText>
        Before Comrade Igglefort can finish, he's interrupted by another{" "}
        {props.petTypeInputSaved}.
      </MainText>
      <NextButton onClick={() => props.update(ns("s4", "c18"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c18}>
      <UserQuote>
        Comrade Igglefort, may we hear some possible doubts in this plan-
      </UserQuote>

      <UserQuote>
        The Council has decided. There will be no further discussions. We are
        moving forward with the candidate.
      </UserQuote>

      <MainText>
        Some {props.petTypeInputSaved}s look taken aback, or vaguely offended,
        though none continue to quarrel. You hear one of them mutter something
        like "too exposed."
      </MainText>
      <NextButton onClick={() => props.update(ns("s4", "c19"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c19}>
      <UserQuote>
        Look if I'm going to be ... too exposed ... I want to know what im
        getting myself into.
      </UserQuote>

      <UserQuote>There is almost no danger to you.</UserQuote>

      <UserQuote>But, they just said...</UserQuote>

      <UserQuote>
        Yes, the plan is quite dangerous. But you are only a messenger. You will
        deliver this keyboard to your niece tonight as a gift for her 16th
        birthday.
      </UserQuote>

      <MainText>
        Again you feel your legs shake. {props.nieceName}?!? She's involved in
        this.
      </MainText>
      <NextButton onClick={() => props.update(ns("s4", "c20"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c20}>
      <UserQuote>What's going on here...?</UserQuote>
    </SimpleScene>

    <SimpleScene isVisible={props.c21}>
      <UserQuote>
        Your niece is going to place a curse on Frailty Stow.
      </UserQuote>
      <NextButton onClick={() => props.update(ns("s4", "c22"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c22}>
      <UserQuote>... Frailty Stow... the... the pop singer...?</UserQuote>

      <UserQuote>It's technically country pop.</UserQuote>

      <UserQuote>Yes, the pop singer.</UserQuote>

      <UserQuote>How..? Why..!?!</UserQuote>
      <NextButton onClick={() => props.update(ns("s4", "c23"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c23}>
      <UserQuote>
        Frailty Stow has become a sort of figurehead for one of the larger
        opposition factions. We've set it up so that Emma has won backstage
        passes and a meet and greet with Frailty next weekend. Once there, she
        will have approximately three minutes to place a curse upon Frailty
        before she goes on stage to perform. Frailty is being looked after quite
        closely, after another faction attempted to curse her.
      </UserQuote>
      <NextButton onClick={() => props.update(ns("s4", "c24"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c24}>
      <UserQuote>And what happened to them? How were they caught?</UserQuote>

      <UserQuote>
        It doesn't matter how they were caught _and killed_, our plan is better.
        They will not suspect such a young child. And fear not, she will be in
        no harm. They will not harm such a young talented child, this would be a
        gift to them really, such magical talent at such a young age
      </UserQuote>
      <Link to={`/to-washington`}>Next</Link>
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
  reactedAngry: state.s4reactedAngry,
  reactedNod: state.s4reactedNod,
  playerNameSaved: state.playerNameSaved,
  petTypeInputSaved: state.petTypeInputSaved,
  nieceName: state.nieceName
});

export default connect(map)(s4);
