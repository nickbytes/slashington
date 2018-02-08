import { Link } from "react-router-dom";
import { connect } from "funcup";
import React from "react";

import { fine, giveKeys, takeTask, toldHer } from "./updaters";
import { ns } from "../../updaters/ns";
import DemoMode from "../../components/DemoMode";
import MainText from "../../components/MainText";
import NextButton from "../../components/NextButton";
import PlainButton from "../../components/PlainButton";
import PosterAnimation from "../../components/PosterAnimation";
import SimpleScene from "../../components/SimpleScene";
import UserQuote from "../../components/UserQuote";

const s6 = props => (
  <div>
    <DemoMode />
    <SimpleScene isVisible={props.c1}>
      <UserQuote attrib={`Alex, brother`}>
        I'll take your stuff up to the guest room. You go relax and say hello to{" "}
        {props.nieceName} and {props.inLawName}.
      </UserQuote>
      <MainText>
        You walk into the kitchen, dodging teenagers scurrying about the house,
        past parents chatting.
      </MainText>
      <NextButton onClick={() => props.update(ns("s6", "c2"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c2}>
      <UserQuote attrib={`${props.inLawName}, sister-in-law`}>
        {props.playerNameSaved}!
      </UserQuote>
      <MainText>
        {props.inLawName} shouts at your from the other side of the kitchen. She
        leaves a group of adults and walks over to give you a hug.
      </MainText>

      <MainText>
        You think about how good it feels to be hugged right now.
      </MainText>

      <UserQuote attrib={`You, ${props.playerNameSaved}`}>
        {props.inLawName}, thanks so much for having me.
      </UserQuote>
      <NextButton onClick={() => props.update(ns("s6", "c3"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c3}>
      <UserQuote attrib={`${props.inLawName}, sister-in-law`}>
        Of course. We're all glad to see you, Alex tells me you're spending far
        too much time at the office. {props.nieceName} missed you. She's in the
        backyard with her friends.
      </UserQuote>

      <MainText>{props.inLawName} holds your arms and looks you over.</MainText>

      <UserQuote attrib={`${props.inLawName}, sister-in-law`}>
        Is everything alright?
      </UserQuote>
      <NextButton onClick={() => props.update(ns("s6", "c4"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c4}>
      <MainText>
        Does she know anything? Does she know about what {props.nieceName} is?
        Does she know what you're doing?
      </MainText>

      <MainText>
        You feel like it's written across your forehead. Your hands are clammy.
        You're sweating.
      </MainText>
      <NextButton onClick={() => props.update(ns("s6", "c5"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c5}>
      <ul>
        <li>
          <PlainButton onClick={() => props.update(toldHer())}>
            Tell her
          </PlainButton>
        </li>
        <li>
          <PlainButton onClick={() => props.update(fine())}>
            Fine, I'm great.
          </PlainButton>
        </li>
      </ul>
    </SimpleScene>

    <SimpleScene isVisible={props.c6}>
      {props.bToldHer && (
        <div>
          <UserQuote attrib={`You, ${props.playerNameSaved}`}>
            Can we talk outside?
          </UserQuote>
          <MainText>
            You say as you lead {props.inLawName} out the backdoor.
          </MainText>
          <UserQuote attrib={`${props.inLawName}, sister-in-law`}>
            What is it?
          </UserQuote>
          <MainText>
            You wipe the sweat from your forehead, where do you start?
          </MainText>

          <NextButton onClick={() => props.update(ns("s6", "c7"))} />
        </div>
      )}

      {props.bFine && (
        <div>
          <UserQuote>
            Fine. I'm fine. Great, really. It's great to be here.
          </UserQuote>
          <UserQuote attrib={`${props.inLawName}, sister-in-law`}>
            Okay, well {props.nieceName} is in the backyard with some friends,
            I'm sure she's dying to see you.
          </UserQuote>
          <NextButton onClick={() => props.update(ns("s6", "c7"))} />
        </div>
      )}
    </SimpleScene>

    <SimpleScene isVisible={props.c7}>
      {props.bToldHer && (
        <div>
          <UserQuote attrib={`You, ${props.playerNameSaved}`}>
            I know this is going to sound crazy, but there's something about{" "}
            {props.nieceName} I need to tell you.
          </UserQuote>
          <UserQuote attrib={`${props.inLawName}, sister-in-law`}>
            What is it?
          </UserQuote>
          <UserQuote attrib={`${props.nieceName}, niece`}>
            {props.playerNameSaved}!
          </UserQuote>
          <MainText>
            {props.nieceName} runs towards you from across the yard.
          </MainText>
          <UserQuote attrib={`${props.inLawName}, sister-in-law`}>
            I'm sure it's something we can talk about later. I'll let you and{" "}
            {props.nieceName} catch up.
          </UserQuote>
          <MainText>
            {props.inLawName} strolls over towards a group of parents chatting
            nearby.
          </MainText>
          <NextButton onClick={() => props.update(ns("s6", "c8"))} />
        </div>
      )}

      {props.bFine && (
        <div>
          <MainText>
            You walk out the back door. {props.nieceName} and her group of
            friends are doing group _Slipknot karaoke_. How nice.
          </MainText>

          <UserQuote attrib={`${props.nieceName}, niece`}>
            {props.playerNameSaved}!
          </UserQuote>

          <MainText>
            She runs over and gives you a hug. At that exact moment The
            Council's words bounce through your head. Why must such great risk
            be put on such a young girl? Such a burden. What will this task do
            to her childhood...?
          </MainText>

          <MainText>TK TK, councils words bouncing through your head.</MainText>
          <NextButton onClick={() => props.update(ns("s6", "c8"))} />
        </div>
      )}
    </SimpleScene>

    <SimpleScene isVisible={props.c8}>
      {/* This is where words should echo in head */}
      <MainText>Are you considering taking on this task yourself?</MainText>
      <NextButton onClick={() => props.update(ns("s6", "c9"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c9}>
      <MainText>
        You could offer her help... The Council never said anything about you
        helping her. Or maybe, you <span>should</span> take the task yourself...
      </MainText>
      <NextButton onClick={() => props.update(ns("s6", "c10"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c10}>
      <MainText>
        You slide away from the parents and children, and make your way
        upstairs. At the end of the hallway, you see {props.nieceName}'s room,
        mostly because of the posters on the door.
      </MainText>
      <NextButton onClick={() => props.update(ns("s6", "c11"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c11}>
      <PosterAnimation />
      <NextButton onClick={() => props.update(ns("s6", "c12"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c12}>
      <MainText>
        You open the door quietly, and quickly close it behind you.
      </MainText>
      <NextButton onClick={() => props.update(ns("s6", "c13"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c13}>
      <MainText>
        Your chest tightens, fingers begin to shake and fidget. How can you just
        leave the keyboard here? Will she know what to do with it? Does she
        understand the risks she is facing?
      </MainText>

      <MainText>
        Your thoughts swim within a pool of possible morbid outcomes.
      </MainText>
      <NextButton onClick={() => props.update(ns("s6", "c14"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c14}>
      <UserQuote attrib={`${props.nieceName}, niece`}>
        {props.playerNameSaved}, what are you doing in here?
      </UserQuote>
      <NextButton onClick={() => props.update(ns("s6", "c15"))} />
    </SimpleScene>

    <SimpleScene isVisible={props.c15}>
      <ul>
        <li>
          <PlainButton onClick={() => console.log(props.update(giveKeys()))}>
            Give her the keyboard.
          </PlainButton>
        </li>
        <li>
          <PlainButton onClick={() => console.log(props.update(takeTask()))}>
            Take the task yourself. Hide the keyboard behind your back.
          </PlainButton>
        </li>
      </ul>
    </SimpleScene>

    <SimpleScene isVisible={props.c16}>
      {props.roleFulfilled && (
        <div>
          <UserQuote attrib={`You, ${props.playerNameSaved}`}>
            Iwasjustdroppingoffthekeyboardidon'tknowwhatisgoingon
          </UserQuote>
          <UserQuote attrib={`${props.nieceName}, niece`}>
            It's okay {props.playerNameSaved}. It's okay.
          </UserQuote>
          <UserQuote attrib={`You, ${props.playerNameSaved}`}>It is?</UserQuote>
          <MainText>You attempt to hold back tears.</MainText>
          <UserQuote attrib={`You, ${props.playerNameSaved}`}>
            but i dont understand why. I don't understand what is happening
          </UserQuote>
          <MainText>
            She guides you over towards the chair at her computer.
          </MainText>

          <NextButton onClick={() => props.update(ns("s6", "c17"))} />
        </div>
      )}

      {props.taskTaken && (
        <div>
          <MainText>
            Your pulse races as you look for an explanation of why you've snuck
            into her room.
          </MainText>
          <UserQuote attrib={`You, ${props.playerNameSaved}`}>
            Just wanted to see if you still had my old computer with all those
            great games on it.
          </UserQuote>
          <UserQuote attrib={`${props.nieceName}, niece`}>
            Oh yea, it's over here.
          </UserQuote>
          <MainText>
            She points to the section of computers and hardware in the corner,
            then leads you over.
          </MainText>
        </div>
      )}
    </SimpleScene>

    <SimpleScene isVisible={props.c17}>
      {props.roleFulfilled && (
        <div>
          <UserQuote attrib={`You, ${props.playerNameSaved}`}>It is?</UserQuote>
          <MainText>You attempt to hold back tears.</MainText>
          <UserQuote attrib={`You, ${props.playerNameSaved}`}>
            But i dont understand why. I don't understand what is happening...
          </UserQuote>
          <MainText>
            She guides you over towards the chair at her computer.
          </MainText>

          <NextButton onClick={() => props.update(ns("s6", "c17"))} />
        </div>
      )}

      {props.taskTaken && (
        <div>
          <UserQuote attrib={`${props.nieceName}, niece`}>
            Still works like a charm, added a new graphics card a year ago.
          </UserQuote>
          <MainText>
            You smile as she walks you through the changes she's made to the
            computer, and though you taught her some of the basics, her
            knowledge greatly surpassing yours at this point, and you feel
            proud.
          </MainText>
          <UserQuote attrib={`You, ${props.playerNameSaved}`}>
            That's amazing, you've taken the shell of an entirely old PC and
            turned it into a powerful computing machine."
          </UserQuote>
          <UserQuote attrib={`${props.nieceName}, niece`}>
            Thanks, theres only one piece left.
          </UserQuote>
          <UserQuote attrib={`You, ${props.playerNameSaved}`}>
            What's that?
          </UserQuote>
          <NextButton onClick={() => props.update(ns("s6", "c18"))} />
        </div>
      )}
    </SimpleScene>

    <SimpleScene isVisible={props.c18}>
      {props.roleFulfilled && (
        <div>
          <UserQuote attrib={`${props.nieceName}, niece`}>
            I know, {props.playerNameSaved}.
          </UserQuote>

          <UserQuote attrib={`You, ${props.playerNameSaved}`}>
            I'm worried for you {props.nieceName}. I don't know if you should be
            doing this – I don't know if they can be trusted – why you? – I
            don't understand anything – I feel like, this is a dream – a wild
            dream, hapenning so fast – but... it ... reminds me of your last
            birthday – ugh – this is confusing –––– look I can help though... ––
          </UserQuote>

          <UserQuote attrib={`${props.nieceName}, niece`}>
            I can take it from here.
          </UserQuote>

          <NextButton onClick={() => props.update(ns("s6", "c19"))} />
        </div>
      )}

      {props.taskTaken && (
        <div>
          <MainText>
            You can feel your palms sweating as you hold the keyboard.
          </MainText>
          <UserQuote attrib={`${props.nieceName}, niece`}>
            Oh {props.playerNameSaved}, I thought we were passed this...
          </UserQuote>
          <MainText>What does she know?</MainText>
          <UserQuote attrib={`${props.nieceName}, niece`}>
            {props.petNameInputSaved} passed info through the neighbors{" "}
            {props.petNameInputSaved}. They said you were taking it especially
            rough this time...
          </UserQuote>
          <MainText>
            How does she know? She reaches for your bag and removes it from your
            clutches.
          </MainText>
          <NextButton onClick={() => props.update(ns("s6", "c19"))} />
        </div>
      )}
    </SimpleScene>

    <SimpleScene isVisible={props.c19}>
      <MainText>She looks striaght into your eyes. So confident.</MainText>
      <UserQuote>
        Are you sure...? I wouldn't tell anyone. Whatever you need.
      </UserQuote>
      <MainText>She smiles.</MainText>
      <UserQuote>
        And they told me to tell you something. They said it'd be extremely
        important.
      </UserQuote>
      <UserQuote>What's that?</UserQuote>
    </SimpleScene>

    <SimpleScene>
      <UserQuote>They said to tell you...</UserQuote>
      <NextButton onClick={() => props.update(ns("s6", "c"))} />
    </SimpleScene>

    <SimpleScene>{`ESC + : + q`}</SimpleScene>

    <SimpleScene>
      <UserQuote>I don't know what it means though... do you?</UserQuote>
      <MainText>She laughs.</MainText>
      <UserQuote>
        Of course, of course. Vim. Right. No one would ever think of using it,
        it'll be the perfect place to hide instructions. Is that all{" "}
        {props.playerNameSaved}?
      </UserQuote>
      <UserQuote>Yes.</UserQuote>
    </SimpleScene>

    <SimpleScene>
      <UserQuote> Then I think it's time.</UserQuote>
      <UserQuote>To head back down to the party?</UserQuote>
      <MainText>
        You feel a slight twinge of relief. You're not crazy, this is happening.
      </MainText>
    </SimpleScene>

    <SimpleScene>
      <UserQuote>
        Yes, but first, could you take a look at something on my computer...
      </UserQuote>
      <UserQuote>
        Well, I don't know how much I can help you now...You'll know more about
        it than me... But, of course...{" "}
      </UserQuote>
      <MainText>
        She plugs in the keyboard, quickly, and in a matter of seconds, brings
        up a terminal screen. She fires away command after command, you can't
        even keep up with what she's doing. And then she stops, and steps away.
      </MainText>
    </SimpleScene>

    <SimpleScene>
      <UserQuote>Right here... this line...</UserQuote>

      <UserQuote>Okay. It says POEM RIGHT HERE</UserQuote>
    </SimpleScene>

    <SimpleScene>
      <MainText>
        You feel lightheaded, but you cannot stop looking at the screen. You
        attempt to mumble some words to {props.nieceName}, but they do not
        completely form.
      </MainText>
      <UserQuote>Wazzuiitttmeeaan</UserQuote>
    </SimpleScene>

    <SimpleScene>
      <MainText>The screen shakes, and colors swim into your vision.</MainText>
      <Link to={`/good-messenger`}>Next</Link>
    </SimpleScene>
  </div>
);

const map = state => ({
  c1: state.s6.c1,
  c2: state.s6.c2,
  c3: state.s6.c3,
  c4: state.s6.c4,
  c5: state.s6.c5,
  c6: state.s6.c6,
  c7: state.s6.c7,
  c8: state.s6.c8,
  c9: state.s6.c9,
  c10: state.s6.c10,
  c11: state.s6.c11,
  c12: state.s6.c12,
  c13: state.s6.c13,
  c14: state.s6.c14,
  c15: state.s6.c15,
  c16: state.s6.c16,
  c17: state.s6.c17,
  c18: state.s6.c18,
  c19: state.s6.c19,
  taskTaken: state.s6.taskTaken,
  roleFulfilled: state.s6.roleFulfilled
});

export default connect(map)(s6);
