import React from "react";

import MainText from '../../../components/MainText';
import PosterAnimation from '../../../components/PosterAnimation';
import SimpleScene from "../../../components/SimpleScene";
import UserQuote from '../../../components/UserQuote';

const s06eBirthdayParty = props => (
  <div>
    <SimpleScene>
      <UserQuote>
        Hey, ill take your stuff up to the guest room. You go relax and say //
        hello to {props.nieceName} and {props.inLawName}.
      </UserQuote>
    </SimpleScene>

    <SimpleScene>
      <MainText>
        You walk into the kitchen, dodging teenagers scurrying about the house,
        past parents chatting.
      </MainText>
    </SimpleScene>

    <SimpleScene>
      <UserQuote>"{props.playerNameSaved || "Nick"}!"</UserQuote>
      <MainText>you're met with a hug.</MainText>

      <UserQuote>{props.inLawName}, thanks so much for having me.</UserQuote>
    </SimpleScene>

    <SimpleScene>
      <UserQuote>
        Of course. We're all glad to see you, Alex tells me you're spending far
        too much time at the office. {props.nieceName} missed you. She's in the
        backyard with her friends.
      </UserQuote>
    </SimpleScene>

    <SimpleScene>
      <MainText>
        You walk out the back door. {props.nieceName} and her group of friends
        are doing group _Slipknot karaoke_. How nice.
      </MainText>
    </SimpleScene>

    <SimpleScene>
      <UserQuote>"Comrade {props.playerNameSaved}!"</UserQuote>
    </SimpleScene>

    <SimpleScene>
      <MainText>
        She runs over and gives you a hug. At that exact moment The Council's
        words bounce through your head. Why must such great risk be put on such
        a young girl? Such a burden. What will this task do to her childhood...?
      </MainText>
    </SimpleScene>

    <SimpleScene>
      <MainText>Are you considering taking on this task yourself?</MainText>
    </SimpleScene>

    <SimpleScene>
      <MainText>
        Talk here about leaving her to hang out with her friends, and then
        footsteps to take the keyboard.
      </MainText>
    </SimpleScene>

    <SimpleScene>
       <MainText>
         You slide away from the parents and children, and make your way
         upstairs. At the end of the hallway, you see {props.nieceName}'s room,
         mostly because of the posters on the door.
       </MainText>
    </SimpleScene>

    <SimpleScene>
      <PosterAnimation />
    </SimpleScene>

    <SimpleScene>
      <MainText>
        You open the door quietly, and quickly close it behind you.
      </MainText>
    </SimpleScene>

    <SimpleScene>
      <MainText>
        Your chest tightens, fingers begin to shake and fidget. How can you just
        leave the keyboard here? Will she know what to do with it? Does she
        understand the risks she is facing?
      </MainText>

      <MainText>Your thoughts swim within a pool of possible morbid outcomes.</MainText>
      <MainText>Need animation here, maybe skulls and other emojis floating and bouncing</MainText>
    </SimpleScene>

    <SimpleScene>
      <UserQuote>
        "{props.preferredTitle} {props.playerNameSaved}, what are you doing in
        here?"
      </UserQuote>
    </SimpleScene>

    <SimpleScene>
      <MainText>
        Fulfill your role - You set down the item
      </MainText>
      <MainText>
        Take on the task yourself - hide the item behind your back.
      </MainText>
    </SimpleScene>

    <SimpleScene>
      {
        props.roleFulfilled
        && (
          <div>
            <UserQuote>Iwasjustdroppingoffthegiftidon'tknowwhatisgoingon</UserQuote>
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
        )
      }

      {
        props.taskTaken && (
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
              computer, and though you taught her some of the basics, her knowledge
              greatly surpassing yours at this point, and you feel proud.
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
            <MainText>you're confused. what does she know. how could she?</MainText>
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
        )
      }
    </SimpleScene>
  </div>
);

export default s06eBirthdayParty;
