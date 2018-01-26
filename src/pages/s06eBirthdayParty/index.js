import { Link } from "react-router-dom";
import { connect } from "funcup";
import React from "react";

import InProgress from "../../components/InProgress";
import MainText from "../../components/MainText";
import PlainButton from "../../components/PlainButton";
import PosterAnimation from "../../components/PosterAnimation";
import SimpleScene from "../../components/SimpleScene";
import UserQuote from "../../components/UserQuote";

const s06eBirthdayParty = props => (
  <div>
    <SimpleScene isVisible={props.b}>
      <UserQuote>
        I'll take your stuff up to the guest room. You go relax and say hello to{" "}
        {props.nieceName} and {props.inLawName}.
      </UserQuote>
    </SimpleScene>

    <SimpleScene isVisible={props.b}>
      <MainText>
        You walk into the kitchen, dodging teenagers scurrying about the house,
        past parents chatting.
      </MainText>
    </SimpleScene>

    <SimpleScene isVisible={props.b}>
      <UserQuote>{props.playerNameSaved}!</UserQuote>
      <MainText>
        {props.inLawName} shouts at your from the other side of the kitchen. She
        leaves a group of adults and walks over to give you a hug.
      </MainText>

      <MainText>
        You think about how good it feels to be hugged right now.
      </MainText>

      <UserQuote>{props.inLawName}, thanks so much for having me.</UserQuote>
    </SimpleScene>

    <SimpleScene isVisible={props.b}>
      <UserQuote>
        Of course. We're all glad to see you, Alex tells me you're spending far
        too much time at the office. {props.nieceName} missed you. She's in the
        backyard with her friends.
      </UserQuote>

      <MainText>{props.inLawName} holds your arms and looks you over.</MainText>

      <UserQuote>Is everything alright?</UserQuote>
    </SimpleScene>

    <SimpleScene>
      <MainText>
        Does she know anything? Does she know about what {props.nieceName} is?
        Does she know what you're doing?
      </MainText>

      <MainText>
        You feel like it's written across your forehead. Your hands are clammy.
        You're sweating.
      </MainText>
    </SimpleScene>

    <SimpleScene>
      <PlainButton onClick={() => console.log("attempt to tell her")}>
        Tell her
      </PlainButton>
      <PlainButton onClick={() => console.log("everything is fine")}>
        Fine, I'm great.
      </PlainButton>
    </SimpleScene>

    <SimpleScene>
      {props.bToldHer && (
        <div>
          <UserQuote>Can we talk outside?</UserQuote>
          <MainText>
            You say as you lead {props.inLawName} out the backdoor.
          </MainText>
          <UserQuote>What is it?</UserQuote>
          <MainText>
            You wipe the sweat from your forehead, where do you start?
          </MainText>

          <PlainButton>
            I know this is going to sound crazy, but there's something about{" "}
            {props.nieceName} I need to tell you.
          </PlainButton>
          <PlainButton>
            I think {props.nieceName} could possibly be in danger.
          </PlainButton>
        </div>
      )}

      {props.bFine && (
        <div>
          <UserQuote>
            Fine. I'm fine. Great, really. It's great to be here.
          </UserQuote>
          <UserQuote>
            Okay, well {props.nieceName} is in the backyard with some friends,
            I'm sure she's dying to see you.
          </UserQuote>
        </div>
      )}
    </SimpleScene>

    <SimpleScene>
      {props.bToldHer && (
        <div>
          <UserQuote>
            I know this is going to sound crazy, but there's something about{" "}
            {props.nieceName} I need to tell you.
          </UserQuote>
          <UserQuote>What is it?</UserQuote>
          <UserQuote>{props.playerNameSaved}!</UserQuote>
          <MainText>
            {props.nieceName} runs towards you from across the yard.
          </MainText>
          <UserQuote>
            I'm sure it's something we can talk about later. I'll let you and{" "}
            {props.nieceName} catch up.
          </UserQuote>
          <MainText>
            {props.inLawName} strolls over towards a group of parents chatting
            nearby.
          </MainText>
        </div>
      )}

      {props.bFine && (
        <div>
          <MainText>
            You walk out the back door. {props.nieceName} and her group of
            friends are doing group _Slipknot karaoke_. How nice.
          </MainText>

          <UserQuote>{props.playerNameSaved}!</UserQuote>

          <MainText>
            She runs over and gives you a hug. At that exact moment The
            Council's words bounce through your head. Why must such great risk
            be put on such a young girl? Such a burden. What will this task do
            to her childhood...?
          </MainText>

          <MainText>TK TK, councils words bouncing through your head.</MainText>
        </div>
      )}
    </SimpleScene>

    <SimpleScene isVisible={props.b}>
      <MainText>Are you considering taking on this task yourself?</MainText>
    </SimpleScene>

    <SimpleScene isVisible={props.b}>
      <MainText>
        You could offer her help. The council never said anything about you
        helping her. Or maybe, you could take the task yourself.
      </MainText>
    </SimpleScene>

    <SimpleScene isVisible={props.b}>
      <MainText>
        You slide away from the parents and children, and make your way
        upstairs. At the end of the hallway, you see {props.nieceName}'s room,
        mostly because of the posters on the door.
      </MainText>
    </SimpleScene>

    <SimpleScene isVisible={props.b}>
      <PosterAnimation />
    </SimpleScene>

    <SimpleScene isVisible={props.b}>
      <MainText>
        You open the door quietly, and quickly close it behind you.
      </MainText>
    </SimpleScene>

    <SimpleScene isVisible={props.b}>
      <MainText>
        Your chest tightens, fingers begin to shake and fidget. How can you just
        leave the keyboard here? Will she know what to do with it? Does she
        understand the risks she is facing?
      </MainText>

      <MainText>
        Your thoughts swim within a pool of possible morbid outcomes.
      </MainText>
      <MainText>
        Need animation here, maybe skulls and other emojis floating and bouncing
      </MainText>
    </SimpleScene>

    <SimpleScene isVisible={props.b}>
      <UserQuote>
        "{props.preferredTitle} {props.playerNameSaved}, what are you doing in
        here?"
      </UserQuote>
    </SimpleScene>

    <SimpleScene isVisible={props.b}>
      <MainText>Fulfill your role - You set down the item</MainText>
      <MainText>
        Take on the task yourself - hide the item behind your back.
      </MainText>
    </SimpleScene>

    <SimpleScene isVisible={props.b}>
      {props.roleFulfilled && (
        <div>
          <UserQuote>
            Iwasjustdroppingoffthegiftidon'tknowwhatisgoingon
          </UserQuote>
          <UserQuote>
            It's okay {props.preferredTitle} {props.playerNameSaved}.
          </UserQuote>
          <UserQuote>it is?</UserQuote>
          <MainText>You attempt to hold back tears.</MainText>
          <UserQuote>
            but i dont understand why. I don't understand what is happening
          </UserQuote>
          <MainText>
            She guides you over towards the chair at her computer.
          </MainText>
          <InProgress>Memory wipe ending :scream: </InProgress>
        </div>
      )}

      {props.taskTaken && (
        <div>
          <MainText>
            Your pulse races as you look for an explanation of why you've snuck
            into her room.
          </MainText>
          <UserQuote>
            "Just wanted to see if you still had my old computer with all those
            great games on it."
          </UserQuote>
          <UserQuote>"Oh yea, it's over here."</UserQuote>
          <MainText>
            She points to the section of computers and hardware in the corner,
            then leads you over.
          </MainText>
          <UserQuote>
            "Still works like a charm, added a new graphics card a year ago"
          </UserQuote>
          <MainText>
            You smile as she walks you through the changes she's made to the
            computer, and though you taught her some of the basics, her
            knowledge greatly surpassing yours at this point, and you feel
            proud.
          </MainText>
          <UserQuote>
            "that's amazing, you've taken the shell of an entirely old PC and
            turned it into a powerful computing machine."
          </UserQuote>
          <UserQuote>"thanks, theres only one piece left."</UserQuote>
          <UserQuote>"whats that"</UserQuote>
          <MainText>you ask, as your palms becoming sweaty.</MainText>
          <UserQuote>
            "oh {props.preferredTitle} {props.playerNameSaved}, i thought we'd
            passed this..."
          </UserQuote>
          <MainText>
            you're confused. what does she know. how could she?
          </MainText>
          <UserQuote>
            {props.petNameInputSaved} passed info said you were taking it
            especially rough this time...
          </UserQuote>
          <MainText>
            How does she know? She reaches for you bag and removes it from your
            clutches.
          </MainText>
          <InProgress>Choice again to resist or give in.</InProgress>
          <InProgress>Resist: uses cords to subdue you with magic</InProgress>
          <InProgress>
            Give in: easy, offer help, she appreciates, memory wipe still
          </InProgress>
        </div>
      )}
    </SimpleScene>

    <SimpleScene isVisible={props.b}>
      <Link to={`/s07eGoodMessenger`}>Next</Link>
    </SimpleScene>
  </div>
);

const map = state => ({
  b: state.b
});

export default connect(map)(s06eBirthdayParty);
