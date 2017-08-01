import { Heading } from "rebass";
import React, { Component } from "react";
import { Link } from "react-router-dom";

import ChapterTitle from "../../components/ChapterTitle";
import CustomContainer from "../../components/CustomContainer";
import InProgress from "../../components/InProgress";
import MainText from "../../components/MainText";
import UserQuote from "../../components/UserQuote";

class Birthday extends Component {
  render() {
    return (
      <div>
        <CustomContainer>
          <ChapterTitle>Birthday</ChapterTitle>
        </CustomContainer>

        <CustomContainer>
          <UserQuote>
            "Hey, ill take your stuff up to the guest room. You go relax and say
            hello to Emma and Jill."
          </UserQuote>
        </CustomContainer>

        <CustomContainer>
          <MainText>
            You walk into the kitchen, dodging teenagers scurrying about the
            house, past parents chatting.
          </MainText>
        </CustomContainer>

        <CustomContainer>
          <UserQuote>
            "{this.props.playerNameSaved || "Nick"}!"
          </UserQuote>
          <MainText>you're met with a hug.</MainText>
        </CustomContainer>

        <CustomContainer>
          <UserQuote>"Jill, thanks so much for having me"</UserQuote>
        </CustomContainer>

        <CustomContainer>
          <UserQuote>
            "Of course. We're all glad to see you, Alex tells me you're spending
            far too much time at the office. Sam missed you. She's in the
            backyard with her friends."
          </UserQuote>
        </CustomContainer>

        <CustomContainer>
          <InProgress>Is this a garbage component? Maybe.</InProgress>
          Grab a can of fizzoda. - Keep your mind right Grab a can of Burrrrrr
          Beer. - Need this shit right about now.
        </CustomContainer>

        <CustomContainer>
          <MainText>
            You walk out the back door. Sam and her group of friends are doing
            group _Slipknot karaoke_. It's adorable and hardcore as fuck. She's
            learned so well.
          </MainText>
        </CustomContainer>

        <CustomContainer>
          <UserQuote>
            "Comrade {this.props.playerNameSaved}!"
          </UserQuote>
        </CustomContainer>

        <CustomContainer>
          <MainText>
            She runs over and gives you a hug. At that exact moment The
            Council's words bounce through your head. Why must such great risk
            be put on such a young girl? Such a burden. What will this task do
            to her childhood...?
          </MainText>
        </CustomContainer>

        <CustomContainer>
          <MainText>...</MainText>
        </CustomContainer>

        <CustomContainer>
          <MainText>should you take on whatever the task is...?</MainText>
        </CustomContainer>

        <CustomContainer>
          <Heading>:: footsteps ::</Heading>
        </CustomContainer>

        <CustomContainer>
          <MainText>
            You slide away from the parents and children, and make your way
            upstairs. At the end of the hallway, you see _Emma's_ room, mostly
            because of the _Wow_ posters on the door.
          </MainText>
        </CustomContainer>

        <CustomContainer>
          <MainText>
            You open the door quietly, and quickly close it behind you.
          </MainText>
        </CustomContainer>

        <CustomContainer>
          <MainText>
            Your chest tightens, fingers begin to shake and fidget. How can you
            just leave the keyboard here? Will she know what to do with it? Does
            she understand the risks she is facing?
          </MainText>
        </CustomContainer>

        <CustomContainer>
          <MainText>
            Your thoughts swim within a pool of possible morbid outcomes.
          </MainText>
        </CustomContainer>

        <CustomContainer>
          <MainText>:: animation of skull ::</MainText>
        </CustomContainer>

        <CustomContainer>
          <UserQuote>
            "{"Comrade"} {this.props.playerNameSaved}, what are you doing in
            here?"
          </UserQuote>
        </CustomContainer>

        <CustomContainer>
          <MainText>
            - Fulfill your role - You set down the item.
            _Iwasjustdroppingoffthegiftidon'tknowwhatisgoingon_ - it's okay
            Uncle Nick. - it is? You attempt to hold back tears. but i dont
            understand why. I don't understand what is happening She guides you
            over towards the chair at her computer.
          </MainText>
        </CustomContainer>

        <CustomContainer>
          <MainText>
            - Take on the task yourself - You put the item back into your bag. -
            Your pulse races as you look for an explanation of why you've snuck
            into her room. - "Just wanted to see if you still had my old
            computer with all those great games on it." - "Oh yea, it's over
            here." She points to the section of computers and hardware in the
            corner, then leads you over. "Still works like a charm, added a new
            graphics card a year ago" - You smile as she walks you through the
            changes she's made to the computer, and though you taught her some
            of the basics, her knowledge greatly surpassing yours at this point,
            and you feel proud. - "that's amazing, you've taken the shell of an
            entirely old PC and turned it into a powerful computing machine." -
            "thanks, theres only one piece left." - "whats that" you ask, as
            your palms becoming sweaty. - "oh _Uncle Nick_, i thought we'd
            passed this..." - you're confused. what does she know. how could
            she? - Dog passed info said you were taking it especially rough this
            time - How does she know - She reaches for you bag and removes it
            from your clutches.
          </MainText>
        </CustomContainer>

        {this.props.endReady &&
          <div>
            <Link to={"/end"}>End</Link>
          </div>}
      </div>
    );
  }
}

export default Birthday;
