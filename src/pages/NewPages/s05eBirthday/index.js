import { Heading } from "rebass";
import React from "react";

import CustomContainer from "../../../components/CustomContainer";
import InProgress from "../../../components/InProgress";
import MainText from "../../../components/MainText";
import PosterAnimation from "../../../components/PosterAnimation";
import UserQuote from "../../../components/UserQuote";
import ThoughtQuote from "../../../components/ThoughtQuote";
import buttonStyle from "../../../utilities/buttonStyle";
import SimpleScene from "../../../components/SimpleScene";

const s05eBirthday = props => (
  <div>
    <SimpleScene>
      <MainText>You sit down again in the same seat on the train.</MainText>
    </SimpleScene>

    <SimpleScene>
      <MainText>
        You watch outside, as {props.petNameInputSaved} waves to you.
      </MainText>

      <MainText>
        You feel the familiar jolt of the train as it begins to move forward.
        There are no passengers in sight. The train slowly pulls away from the
        station.
      </MainText>
    </SimpleScene>

    <SimpleScene>
      <MainText>
        The landscape is familiar. Rolling hills, small forests, and tributaries
        pass along side the train. The sun is about to peek out from behind the
        horizon.
      </MainText>

      <MainText>Would like a gif graphic here.</MainText>
    </SimpleScene>

    <SimpleScene>
      <MainText>
        The Council's words begin to reverberate through you head. What had they
        said about the person who was caught by Frailty Stow's guards...?
      </MainText>
    </SimpleScene>

    <SimpleScene>
      <ThoughtQuote>We are unaware of where the magician is now.</ThoughtQuote>
      <ThoughtQuote>They may have had their memory erased.</ThoughtQuote>
    </SimpleScene>

    <SimpleScene>
      <MainText>
        Three or four seconds. Suddenly the car{" "}
        <button style={buttonStyle}>bursts</button> with light, you grimace and
        squint in the stark contrast. When you open your eyes, the train car is
        again packed with people, regular people. People reading their tablets,
        morning papers, talking on cell phones, glancing out the window as you
        pass through Baltimore.
      </MainText>
    </SimpleScene>

    <SimpleScene>
      <MainText>
        Alex greets you at the station. You load your bags and keyboard into the
        trunk of his car.
      </MainText>

      <UserQuote>What's with the keyboard?</UserQuote>

      <MainText>
        You hear the concern in his voice. He thinks you brought it to complete
        some work this weekend. If only...
      </MainText>
    </SimpleScene>

    <SimpleScene>
      <UserQuote>A gift for Sam.</UserQuote>
    </SimpleScene>

    <SimpleScene>
      <MainText>
        He goes on chatting about work, neighbors, Jill's job, only do you take
        notice when he mentions the exception grades Emma has been getting.
      </MainText>
    </SimpleScene>

    <SimpleScene>
      <UserQuote>"That's great, real great."</UserQuote>
    </SimpleScene>
  </div>

  // {props.wordsEcho && (
  //   <div>
  //     <CustomContainer>
  //       <ThoughtQuote>
  //         The burden is too great for one so young. Surely some adult can take
  //         on responsibility.
  //       </ThoughtQuote>
  //     </CustomContainer>

  //     <CustomContainer>
  //       <ThoughtQuote>
  //         It must be her. Weve gone over this. She is uniquely talented, and
  //         her path will cross appropriately.
  //       </ThoughtQuote>
  //       <ThoughtQuote>
  //         But she may not be able to do it. She may die.
  //       </ThoughtQuote>
  //       <ThoughtQuote> It is the only way..</ThoughtQuote>
  //     </CustomContainer>
  //     <CustomContainer>
  //       <UserQuote>
  //         'Hey, anyway, were glad to have you here. You look like you could
  //         use a little break from the office for a weekend.'
  //       </UserQuote>
  //     </CustomContainer>
  //     <CustomContainer>
  //       <UserQuote>"Yeah, definitely."</UserQuote>
  //     </CustomContainer>
  // <CustomContainer>
  //   <UserQuote>
  //     "Hey, ill take your stuff up to the guest room. You go relax and say
  //     hello to {props.nieceName} and {props.inLawName}."
  //   </UserQuote>
  // </CustomContainer>

  // <CustomContainer>
  //   <MainText>
  //     You walk into the kitchen, dodging teenagers scurrying about the house,
  //     past parents chatting.
  //   </MainText>
  // </CustomContainer>

  // <CustomContainer>
  //   <UserQuote>"{props.playerNameSaved || "Nick"}!"</UserQuote>
  //   <MainText>you're met with a hug.</MainText>
  // </CustomContainer>

  // <CustomContainer>
  //   <UserQuote>"{props.inLawName}, thanks so much for having me."</UserQuote>
  // </CustomContainer>

  // <CustomContainer>
  //   <UserQuote>
  //     "Of course. We're all glad to see you, Alex tells me you're spending far
  //     too much time at the office. {props.nieceName} missed you. She's in the
  //     backyard with her friends."
  //   </UserQuote>
  // </CustomContainer>

  // <CustomContainer>
  //   <InProgress>Is this a garbage component? Maybe.</InProgress>
  //   Grab a can of fizzoda. - Keep your mind right Grab a can of Burrrrrr Beer.
  //   - Need this shit right about now.
  // </CustomContainer>

  // <CustomContainer>
  //   <MainText>
  //     You walk out the back door. {props.nieceName} and her group of friends
  //     are doing group _Slipknot karaoke_. It's adorable and hardcore as fuck.
  //     She's learned so well.
  //   </MainText>
  // </CustomContainer>

  // <CustomContainer>
  //   <UserQuote>"Comrade {props.playerNameSaved}!"</UserQuote>
  // </CustomContainer>

  // <CustomContainer>
  //   <MainText>
  //     She runs over and gives you a hug. At that exact moment The Council's
  //     words bounce through your head. Why must such great risk be put on such
  //     a young girl? Such a burden. What will this task do to her childhood...?
  //   </MainText>
  // </CustomContainer>

  // <CustomContainer>
  //   <MainText>...</MainText>
  // </CustomContainer>

  // <CustomContainer>
  //   <MainText>should you take on whatever the task is...?</MainText>
  // </CustomContainer>

  // <CustomContainer>
  //   <Heading>:: footsteps ::</Heading>
  // </CustomContainer>

  // <CustomContainer>
  //   <MainText>
  //     You slide away from the parents and children, and make your way
  //     upstairs. At the end of the hallway, you see {props.nieceName}'s room,
  //     mostly because of the posters on the door.
  //   </MainText>
  // </CustomContainer>

  // <CustomContainer>
  //   <PosterAnimation />
  // </CustomContainer>

  // <CustomContainer>
  //   <MainText>
  //     You open the door quietly, and quickly close it behind you.
  //   </MainText>
  // </CustomContainer>

  // <CustomContainer>
  //   <MainText>
  //     Your chest tightens, fingers begin to shake and fidget. How can you just
  //     leave the keyboard here? Will she know what to do with it? Does she
  //     understand the risks she is facing?
  //   </MainText>
  // </CustomContainer>

  // <CustomContainer>
  //   <MainText>
  //     Your thoughts swim within a pool of possible morbid outcomes.
  //   </MainText>
  // </CustomContainer>

  // <CustomContainer>
  //   <MainText>:: animation of skull ::</MainText>
  // </CustomContainer>

  // <CustomContainer>
  //   <UserQuote>
  //     "{props.preferredTitle} {props.playerNameSaved}, what are you doing in
  //     here?"
  //   </UserQuote>
  // </CustomContainer>

  // <CustomContainer>
  //   <ul>
  //     <li>
  //       <button style={buttonStyle}>
  //         Fulfill your role - You set down the item
  //       </button>
  //     </li>
  //     <li>
  //       <button style={buttonStyle}>
  //         - Take on the task yourself - hide the item behind your back.
  //       </button>
  //     </li>
  //   </ul>
  // </CustomContainer>

  // {props.roleFulfilled && (
  //   <CustomContainer>
  //     <UserQuote>Iwasjustdroppingoffthegiftidon'tknowwhatisgoingon</UserQuote>
  //     <UserQuote>
  //       It's okay {props.preferredTitle} {props.playerNameSaved}.
  //     </UserQuote>
  //     <UserQuote>it is?</UserQuote>
  //     <MainText>You attempt to hold back tears.</MainText>
  //     <UserQuote>
  //       but i dont understand why. I don't understand what is happening
  //     </UserQuote>
  //     <MainText>
  //       She guides you over towards the chair at her computer.
  //     </MainText>
  //     <InProgress>Memory wipe ending :scream: </InProgress>
  //   </CustomContainer>
  // )}

  // {props.taskTaken && (
  //   <CustomContainer>
  //     <MainText>
  //       Your pulse races as you look for an explanation of why you've snuck
  //       into her room.
  //     </MainText>
  //     <UserQuote>
  //       "Just wanted to see if you still had my old computer with all those
  //       great games on it."
  //     </UserQuote>
  //     <UserQuote>"Oh yea, it's over here."</UserQuote>
  //     <MainText>
  //       She points to the section of computers and hardware in the corner,
  //       then leads you over.
  //     </MainText>
  //     <UserQuote>
  //       "Still works like a charm, added a new graphics card a year ago"
  //     </UserQuote>
  //     <MainText>
  //       You smile as she walks you through the changes she's made to the
  //       computer, and though you taught her some of the basics, her knowledge
  //       greatly surpassing yours at this point, and you feel proud.
  //     </MainText>
  //     <UserQuote>
  //       "that's amazing, you've taken the shell of an entirely old PC and
  //       turned it into a powerful computing machine."
  //     </UserQuote>
  //     <UserQuote>"thanks, theres only one piece left."</UserQuote>
  //     <UserQuote>"whats that"</UserQuote>
  //     <MainText>you ask, as your palms becoming sweaty.</MainText>
  //     <UserQuote>
  //       "oh {props.preferredTitle} {props.playerNameSaved}, i thought we'd
  //       passed this..."
  //     </UserQuote>
  //     <MainText>you're confused. what does she know. how could she?</MainText>
  //     <UserQuote>
  //       {props.petNameInputSaved} passed info said you were taking it
  //       especially rough this time...
  //     </UserQuote>
  //     <MainText>
  //       How does she know? She reaches for you bag and removes it from your
  //       clutches.
  //     </MainText>
  //     <InProgress>Choice again to resist or give in.</InProgress>
  //     <InProgress>Resist: uses cords to subdue you with magic</InProgress>
  //     <InProgress>
  //       Give in: easy, offer help, she appreciates, memory wipe still
  //     </InProgress>
  //     <InProgress>Memory wipe ending :scream: </InProgress>
  //     </CustomContainer>
  //   )}
  // </div>
);

export default s05eBirthday;
