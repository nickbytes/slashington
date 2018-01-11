import React from "react";

import MainText from "../../../components/MainText";
import PlainButton from "../../../components/PlainButton";
import SimpleScene from "../../../components/SimpleScene";
import UserQuote from "../../../components/UserQuote";

const s04eTheCouncil = props => (
  <div>
    <SimpleScene>
      <MainText>You stand inside an empty waiting room.</MainText>
      <MainText>
        You look up and see the digital train schedule board whizzing
        uncontrollably.
      </MainText>
    </SimpleScene>
    <SimpleScene>
      <MainText>Weird.</MainText>
    </SimpleScene>
    <SimpleScene>
      <UserQuote attrib="Unknown Voice, to your right">
        Ahhhhh, {props.playerNameSaved}, {props.playerOccupationSaved},
        Earthling of the Bauzort tribe.
      </UserQuote>
      <MainText>
        You nearly jump at the sound of a voice. When you turn, you see inside
        the small train station cafe, amongst a number of small empty tables, a
        table full of... {props.petTypeInputSaved}.
      </MainText>

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
    </SimpleScene>

    <SimpleScene>"We, as you might know, are The Council."</SimpleScene>

    <SimpleScene>
      <PlainButton onClick={() => console.log("something!")}>
        React Angrily
      </PlainButton>
      <PlainButton onClick={() => console.log("something!")}>Nod</PlainButton>
    </SimpleScene>

    <SimpleScene>
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

      <UserQuote attrib="Comrade Igglefort">
        Then you should also understand it's importance. As I was saying...{" "}
        <br />You, NAME, have been selected for a task. First, we should give
        you a little background on The Council and our Mission.<br />Magic has
        been passed down throughout the ages. It used to be taught somewhat more
        openly, and accepted on some level, but rises in secular conservatism
        saw it as a threat. People persecuted magicial beings. Now it is hushed,
        but helps to keep societal balance in some ways. Today, magic is only
        taught to a handful of people, usually found in their early teens,
        though in some cases, later. These teenagers possess abilities and
        interests a number of fields including science, computing, mathematics,
        humanities, history, languages – you get the gist. The best magicians
        are critical thinkers. A few will go into politics, but that can really
        go awry.
      </UserQuote>

      <UserQuote attrib="Comrade Barringzen">
        Our mission, on the whole, is to increase the quality of life for all
        beings. We see this manifested itself through world peace and acceptance
        of all lifestyles, peoples, and creatures. A bit lofty, but a
        reasonability we take quite seriously. Of course, we have opposition.
        Yes, other magical beings.
      </UserQuote>

      <UserQuote attrib="Comrade Igglefort">
        Some believe they, too, are working towards this goal – though they care
        only to do it for their magical faction. Yes, we magical beings are
        quite fractured. Others of course are thieves, swindlers, cons – but
        they too hold certain amounts of power and benefit from a level of
        chaos. It's... complicated. Rest assured... you are helping the 'good
        ones'...
      </UserQuote>

      <MainText>
        You feel uneasy about this. It doesn't really make sense. The lead{" "}
        {props.petTypeInputSaved}, apparently named Comrade Igglefort,
        continues.
      </MainText>

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

      <UserQuote>
        "We have bound your keyboard to one of our own though a complicated
        series of spellwork, network protocols are too easily monitored, this
        connection is unhackable. Messages about the mission delivered to the
        keyboard will be viewable on the computer from a program called... vim."
      </UserQuote>

      <UserQuote>You think to yourself. What kind of name is that?</UserQuote>

      <UserQuote>"What mission?"</UserQuote>

      <MainText>
        There is quiet. PETs start to look around at each other. Comrade
        Igglefort shuffles some papers in front of him.
      </MainText>

      <UserQuote>It is not important––</UserQuote>

      <MainText>
        Before Comrade Igglefort can finish, he's interrupted by another PET.
      </MainText>

      <UserQuote>
        Comrade Igglefort, may we hear some possible doubts in this plan-
      </UserQuote>

      <UserQuote>
        The Council has decided. There will be no further discussions. We are
        moving forward with the candidate.
      </UserQuote>

      <MainText>
        Some Parrots look taken aback, or vaguely offended, though none continue
        to quarrel. You hear one of them mutter something like "too exposed."
      </MainText>

      <UserQuote>
        Look if I'm going to be ... too exposed ... I want to know what im
        getting myself into.
      </UserQuote>

      <UserQuote>There is almost no danger to you.</UserQuote>

      <UserQuote>But, they just said...</UserQuote>

      <UserQuote>
        Yes, the plan is quite dangerous. But you are only a messenger. You will
        deliver this keyboard to your niece tonight as a gift for her 13th
        birthday.
      </UserQuote>

      <MainText>
        Again you feel your legs shake. Emma?!? She's involved in this.
      </MainText>
    </SimpleScene>

    <SimpleScene>
      <PlainButton onClick={() => console.log("plz fill me in")}>
        Demand to know the plan
      </PlainButton>
      <PlainButton onClick={() => console.log("plz fill me in")}>
        Say nothing
      </PlainButton>
    </SimpleScene>

    <SimpleScene>
      <UserQuote>
        TELL ME THE MISSION NOW. You're not going to put her at risk without
        telling me what's going on here.
      </UserQuote>

      <UserQuote>
        Your niece is going to place a curse on Frailty Stow.
      </UserQuote>

      <UserQuote>... Frailty Stow... the... the pop singer...?</UserQuote>

      <UserQuote>It's technically country pop.</UserQuote>

      <UserQuote>Yes, the pop singer.</UserQuote>

      <UserQuote>How..? Why..!?!</UserQuote>

      <UserQuote>
        Frailty Stow has become a sort of figurehead for one of the larger
        opposition factions. We've set it up so that Emma has won backstage
        passes and a meet and greet with Frailty next weekend. Once there, she
        will have approximately three minutes to place a curse upon Frailty
        before she goes on stage to perform. Frailty is being looked after quite
        closely, after another faction attempted to curse her.
      </UserQuote>

      <UserQuote>And what happened to them? How were they caught?</UserQuote>

      <UserQuote>
        It doesn't matter how they were caught _and killed_, our plan is better.
        They will not suspect such a young child. And fear not, she will be in
        no harm. They will not harm such a young talented child, this would be a
        gift to them really, such magical talent at such a young age
      </UserQuote>
    </SimpleScene>
  </div>
);

export default s04eTheCouncil;
