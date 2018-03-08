import { connect } from "funcup";
import React from "react";

import {
  AbsoluteBlack,
  ChapterNext,
  ChapterNum,
  ChapterTitle
} from "../../components/ChapterUtils";
import { List, ListItem } from "../../components/ListUtils";
import { fine, giveKeys, takeTask, toldHer } from "./updaters";
import { ns } from "../../updaters/ns";
import CustomContainer from "../../components/CustomContainer";
import Echo from "../../components/Echo";
import MainText from "../../components/MainText";
import NextButton from "../../components/NextButton";
import OliveWorkspace from "../../components/OliveWorkspace";
import PlainButton from "../../components/PlainButton";
import SimpleScene from "../../components/SimpleScene";
import UserQuote from "../../components/UserQuote";

const s6 = props => (
  <div>
    <SimpleScene isVisible={props.c0}>
      <AbsoluteBlack />
      <CustomContainer>
        <ChapterNum>Chapter 6</ChapterNum>
        <ChapterTitle>
          A Birthday Party To <i>Remember</i>
        </ChapterTitle>
        <ChapterNext onClick={() => props.update(ns("s6", "c1"))} />
      </CustomContainer>
    </SimpleScene>
    <SimpleScene isVisible={props.c1}>
      <CustomContainer>
        <UserQuote attrib={`Alex, brother`}>
          I'll take your stuff up to the guest room. Go relax, say hello to{" "}
          {props.nieceName} and {props.inLawName}.
        </UserQuote>
        <MainText>
          You walk into the kitchen, dodging teenagers scurrying about the
          house, past parents chatting.
        </MainText>
        <NextButton onClick={() => props.update(ns("s6", "c2"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c2}>
      <CustomContainer>
        <UserQuote attrib={`${props.inLawName}, sister-in-law`}>
          {props.playerNameSaved}!
        </UserQuote>
        <MainText>
          {props.inLawName} shouts at your from the other side of the kitchen.
          She leaves a group of adults and walks over to give you a hug.
        </MainText>

        <MainText>
          You think about how good it feels to be hugged right now.
        </MainText>

        <UserQuote attrib={`You, ${props.playerNameSaved}`}>
          {props.inLawName}, thanks so much for having me.
        </UserQuote>
        <NextButton onClick={() => props.update(ns("s6", "c3"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c3}>
      <CustomContainer>
        <UserQuote attrib={`${props.inLawName}, sister-in-law`}>
          Of course. We're all glad to see you, Alex tells me you're spending
          far too much time at the office. {props.nieceName} missed you.
        </UserQuote>

        <MainText>
          {props.inLawName} holds your arms and looks you over.
        </MainText>

        <UserQuote attrib={`${props.inLawName}, sister-in-law`}>
          Is everything alright?
        </UserQuote>
        <NextButton onClick={() => props.update(ns("s6", "c4"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c4}>
      <CustomContainer>
        <MainText>Does she know anything?</MainText>

        <MainText>
          Does she know about what {props.nieceName} <i>is</i>? Does she know
          what you're doing?
        </MainText>

        <MainText>
          You feel like it's written across your forehead. Your hands are
          clammy. You're sweating.
        </MainText>
        <NextButton onClick={() => props.update(ns("s6", "c5"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c5}>
      <CustomContainer>
        <List>
          <ListItem>
            <PlainButton onClick={() => props.update(toldHer())}>
              Tell her
            </PlainButton>
          </ListItem>
          <ListItem>
            <PlainButton onClick={() => props.update(fine())}>
              Fine, I'm great.
            </PlainButton>
          </ListItem>
        </List>
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c6}>
      <CustomContainer>
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
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c7}>
      <CustomContainer>
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
              nearby, as {props.nieceName} embraces you in a hug.
            </MainText>
            <NextButton onClick={() => props.update(ns("s6", "c8"))} />
          </div>
        )}

        {props.bFine && (
          <div>
            <MainText>
              You walk out the back door. {props.nieceName} and her group of
              friends are doing group <i>Slipknot karaoke</i>. How nice.
            </MainText>

            <UserQuote attrib={`${props.nieceName}, niece`}>
              {props.playerNameSaved}!
            </UserQuote>

            <MainText>She runs over and gives you a hug.</MainText>
            <NextButton onClick={() => props.update(ns("s6", "c8"))} />
          </div>
        )}
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c8}>
      <CustomContainer>
        <UserQuote attrib={`You, ${props.playerNameSaved}`}>
          Happy Birthday!
        </UserQuote>
        <MainText>You try and hide the worry in your voice.</MainText>
        <NextButton onClick={() => props.update(ns("s6", "c9"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c9}>
      <CustomContainer>
        <UserQuote attrib={`${props.nieceName}, niece`}>
          Thanks {props.playerNameSaved}! I was worried you weren't going to be
          able to make it.
        </UserQuote>
        <NextButton onClick={() => props.update(ns("s6", "c10"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c10}>
      <CustomContainer>
        <UserQuote attrib={`You, ${props.playerNameSaved}`}>
          I didn't think I was going to make it either!
        </UserQuote>
        <MainText>
          The small joke and hug feels like a slight relief from the pressure
          building in your chest.
        </MainText>
        <NextButton onClick={() => props.update(ns("s6", "c11"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c11}>
      <CustomContainer>
        <MainText>
          With all of her friends around, you don't dare mention anything about
          your trip to Slashington.
        </MainText>
        <UserQuote attrib={`${props.nieceName}, niece`}>
          It's my turn for karaoke. I want to show you my computer later, okay?
        </UserQuote>
        <NextButton onClick={() => props.update(ns("s6", "c12"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c12}>
      <CustomContainer>
        <UserQuote attrib={`You, ${props.playerNameSaved}`}>Sure!</UserQuote>
        <MainText>
          {props.nieceName} turns and runs back to her friends and the karaoke
          machine. You listen for a moment, then walk back inside.
        </MainText>
        <MainText>
          Seeing {props.nieceName}, Alex, {props.inLawName} – it's making you
          reconsider the whole thing. Why would you put them in danger. Maybe
          you should wait, give her the keyboard when she is older...
        </MainText>
        <MainText>
          You can't help but feel more curious about the keyboard.
        </MainText>
        <NextButton onClick={() => props.update(ns("s6", "c13"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c13}>
      <CustomContainer>
        <MainText>
          You turn right at the top of the stairs and open the door to the guest
          room. You feel drawn to the duffle bag, and the keyboard inside.
        </MainText>
        <MainText>
          You remember the warmth it emits. The way it made you feel like
          anything was recklessly possible.
        </MainText>
        <NextButton onClick={() => props.update(ns("s6", "c14"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c14}>
      <CustomContainer>
        <MainText>A knock at the door.</MainText>
        <NextButton onClick={() => props.update(ns("s6", "c15"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c15}>
      <CustomContainer>
        <UserQuote attrib={`Alex, brother`}>Everything okay in here?</UserQuote>
        <NextButton onClick={() => props.update(ns("s6", "c16"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c16}>
      <CustomContainer>
        <UserQuote attrib={`You, ${props.playerNameSaved}`}>
          Yeah, fine. <i>Fine</i>.
        </UserQuote>
        <MainText>You try to sound innocent and whimsical.</MainText>
        <NextButton onClick={() => props.update(ns("s6", "c17"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c17}>
      <CustomContainer>
        <UserQuote attrib={`Alex, brother`}>
          Going to go put the keyboard in her room? Wow, she'll love the
          surprise.
        </UserQuote>
        <MainText>
          He holds the door and nods down the small hallway. Damn him...
        </MainText>
        <NextButton onClick={() => props.update(ns("s6", "c18"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c18}>
      <CustomContainer>
        <UserQuote attrib={`You, ${props.playerNameSaved}`}>
          Right, yeah.
        </UserQuote>
        <MainText>
          You put on a fake smile and nod. Careful not to touch the keys, you
          walk past him, down the hall, and turn into Olive's room.
        </MainText>
        <NextButton onClick={() => props.update(ns("s6", "c19"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c19}>
      <CustomContainer>
        <MainText>You quietly close the door behind you.</MainText>
        <MainText>
          In the corner of the room, you see the computer that you and{" "}
          {props.nieceName} used to play computer games on when she was younger.
        </MainText>
        <MainText>
          At the same time, you feel the keyboard pulsate with warmth and
          energy.
        </MainText>
        <NextButton onClick={() => props.update(ns("s6", "c20"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c20}>
      <CustomContainer>
        <MainText>
          Your chest tightens, fingers begin to shake and fidget. How can you
          just leave the keyboard here? Will she know what to do with it? Does
          she understand the risks she is facing?
        </MainText>

        <MainText>
          Your thoughts swim within a pool of possible morbid outcomes. You
          think about how you could hold on to the keyboard a little while,
          maybe until she's 18...
        </MainText>
        <NextButton onClick={() => props.update(ns("s6", "c21"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c21}>
      <CustomContainer>
        <UserQuote attrib={`${props.nieceName}, niece`}>
          {props.playerNameSaved}, what are you doing in here?
        </UserQuote>
        <NextButton onClick={() => props.update(ns("s6", "c22"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c22}>
      <CustomContainer>
        <List>
          <ListItem>
            <PlainButton onClick={() => props.update(giveKeys())}>
              Give her the keyboard. You know it's not yours to keep.
            </PlainButton>
          </ListItem>
          <ListItem>
            <PlainButton onClick={() => props.update(takeTask())}>
              Keep the keyboard. You can give it to her <i>later</i>. Plus, you
              might get to explore it a little more.
            </PlainButton>
          </ListItem>
        </List>
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c23}>
      <CustomContainer>
        {props.roleFulfilled && (
          <div>
            <UserQuote attrib={`You, ${props.playerNameSaved}`}>
              Iwasjustdroppingoffthekeyboardidon'tknowwhatisgoingon
            </UserQuote>
            <UserQuote attrib={`${props.nieceName}, niece`}>
              It's okay {props.playerNameSaved}. It's okay.
            </UserQuote>
            <UserQuote attrib={`You, ${props.playerNameSaved}`}>
              It is?
            </UserQuote>
            <MainText>You attempt to hold back tears.</MainText>

            <NextButton onClick={() => props.update(ns("s6", "c24"))} />
          </div>
        )}

        {props.taskTaken && (
          <div>
            <MainText>
              Your pulse races as you look for an explanation of why you've
              snuck into her room.
            </MainText>
            <UserQuote attrib={`You, ${props.playerNameSaved}`}>
              Just wanted to see if you still had my old computer with all those
              great games on it.
            </UserQuote>
            <UserQuote attrib={`${props.nieceName}, niece`}>
              Oh yea, it's over here.
            </UserQuote>
            <MainText>
              She points to the section of computers and hardware in the corner.
            </MainText>
            <NextButton onClick={() => props.update(ns("s6", "c24"))} />
          </div>
        )}
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c24}>
      <CustomContainer>
        {props.roleFulfilled && (
          <div>
            <UserQuote attrib={`You, ${props.playerNameSaved}`}>
              I don't understand what is happening...
            </UserQuote>
            <MainText>
              She guides you over towards the chair at her computer.
            </MainText>

            <NextButton onClick={() => props.update(ns("s6", "c25"))} />
          </div>
        )}

        {props.taskTaken && (
          <div>
            <UserQuote attrib={`You, ${props.playerNameSaved}`}>
              Commander Keen, The Sims, Baldur's Gate, Counter Strike...
            </UserQuote>

            <MainText>
              You're mumbling and fumbling the names of all the games you can
              remember as you try to hide the keyboard behind your back.
            </MainText>
            <NextButton onClick={() => props.update(ns("s6", "c25"))} />
          </div>
        )}
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c25}>
      <CustomContainer>
        <UserQuote attrib={`${props.nieceName}, niece`}>
          Still works like a charm, added a new graphics card a year ago.
        </UserQuote>
        <MainText>
          You smile as she walks you through all the software and hardware
          changes she's made to the computer. You feel proud.
        </MainText>

        <NextButton onClick={() => props.update(ns("s6", "c26"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c26}>
      <CustomContainer>
        <UserQuote attrib={`${props.nieceName}, niece`}>
          Thanks, there's only one piece left.
        </UserQuote>
        <NextButton onClick={() => props.update(ns("s6", "c27"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c27}>
      <CustomContainer>
        {props.roleFulfilled && (
          <div>
            <UserQuote attrib={`${props.nieceName}, niece`}>
              It's okay, {props.playerNameSaved}. I can take it from here.
            </UserQuote>
            <MainText>
              Her voice is so reassuring. So confident. She takes the keyboard
              from your hands.
            </MainText>
            <NextButton onClick={() => props.update(ns("s6", "c28"))} />
          </div>
        )}

        {props.taskTaken && (
          <div>
            <UserQuote attrib={`${props.nieceName}, niece`}>
              Oh {props.playerNameSaved}, I was hoping we were past it this
              time.
            </UserQuote>
            <MainText>
              <Echo>What is she talking about?</Echo>
            </MainText>
            <NextButton onClick={() => props.update(ns("s6", "c28"))} />
          </div>
        )}
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c28}>
      <CustomContainer>
        {props.roleFulfilled && (
          <div>
            <UserQuote attrib={`${props.nieceName}, niece`}>
              You seem a little more relaxed <i>this time</i>.
            </UserQuote>
            <MainText>
              She takes the keyboard from you and plugs it into the computer.
            </MainText>
            <NextButton onClick={() => props.update(ns("s6", "c29"))} />
          </div>
        )}

        {props.taskTaken && (
          <div>
            <UserQuote attrib={`${props.nieceName}, niece`}>
              You look exhausted, you're taking this all especially hard{" "}
              <i>this time</i>.
            </UserQuote>
            <MainText>
              Looking slightly disappointed, she slowly reaches for the
              keyboard, and you hand it over to her.
            </MainText>
            <MainText>She plugs the keyboard into the computer.</MainText>
            <NextButton onClick={() => props.update(ns("s6", "c29"))} />
          </div>
        )}
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c29}>
      <CustomContainer>
        <MainText>
          You see the keys glow that familiar mesmerizing warmth, and you watch
          as {props.nieceName} navigates through some commands in a black
          terminal window.
        </MainText>
        <MainText>
          You're suddenly reminded of instructions The Council has told you to
          give {props.nieceName}.
        </MainText>
        <NextButton onClick={() => props.update(ns("s6", "c30"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c30}>
      <CustomContainer>
        <UserQuote attrib={`You, ${props.playerNameSaved}`}>
          They... The Council... they wanted me to tell you something. They said
          it was absolutely necessary...
        </UserQuote>
        <NextButton onClick={() => props.update(ns("s6", "c31"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c31}>
      <CustomContainer>
        <MainText>{props.nieceName} stares at you inquisitively.</MainText>
        <UserQuote attrib={`${props.nieceName}, niece`}>What's that?</UserQuote>
        <NextButton onClick={() => props.update(ns("s6", "c32"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c32}>
      <CustomContainer>
        <UserQuote attrib={`You, ${props.playerNameSaved}`}>
          Escape. Colon. Q.
        </UserQuote>
        <NextButton onClick={() => props.update(ns("s6", "c33"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c33}>
      <CustomContainer>
        <UserQuote attrib={`You, ${props.playerNameSaved}`}>
          I don't know what it means though... do you? Is it some <i>code</i>?
        </UserQuote>
        <MainText>She laughs.</MainText>
        <NextButton onClick={() => props.update(ns("s6", "c34"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c34}>
      <CustomContainer>
        <UserQuote attrib={`${props.nieceName}, niece`}>
          Of course, of course. Vim. Right. No one would ever think of using it,
          it'll be the perfect place to hide instructions. Is that all{" "}
          {props.playerNameSaved}?
        </UserQuote>
        <NextButton onClick={() => props.update(ns("s6", "c35"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c35}>
      <CustomContainer>
        <UserQuote attrib={`${props.nieceName}, niece`}>
          Thanks {props.playerNameSaved}. I think it's time then.
        </UserQuote>
        <NextButton onClick={() => props.update(ns("s6", "c36"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c36}>
      <CustomContainer>
        <UserQuote attrib={`You, ${props.playerNameSaved}`}>
          To head back down to the party?
        </UserQuote>
        <MainText>
          You feel a slight twinge of relief. You're not crazy, this is
          happening.
        </MainText>
        <NextButton onClick={() => props.update(ns("s6", "c37"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c37}>
      <CustomContainer>
        <UserQuote attrib={`${props.nieceName}, niece`}>
          Yes, but first, could you take a look at something on my computer...
        </UserQuote>
        <UserQuote attrib={`You, ${props.playerNameSaved}`}>
          Well, I don't know how much I can help you now...You'll know more
          about it than me... But, of course...{" "}
        </UserQuote>
        <NextButton onClick={() => props.update(ns("s6", "c38"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c38}>
      <CustomContainer>
        <UserQuote attrib={`${props.nieceName}, niece`}>
          Right here... this line...
        </UserQuote>

        <UserQuote attrib={`You, ${props.playerNameSaved}`}>
          Okay. It says
        </UserQuote>
        <NextButton onClick={() => props.update(ns("s6", "c39"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c39}>
      <CustomContainer>
        <OliveWorkspace {...props} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c40}>
      <CustomContainer>
        <MainText>
          You feel lightheaded, but you cannot stop looking at the screen. You
          attempt to mumble some words to {props.nieceName}, but they do not
          completely form.
        </MainText>
        <UserQuote attrib={`You, ${props.playerNameSaved}`}>
          Wazzuiitttmeeaan? Wazzzuittt?
        </UserQuote>
        <NextButton onClick={() => props.update(ns("s6", "c41"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c41}>
      <CustomContainer>
        <MainText>
          The screen shakes, and colors swim into your vision.
        </MainText>
        <NextButton onClick={() => props.update(ns("s6", "c42"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c42}>
      <CustomContainer>
        <OliveWorkspace haywire {...props} />
      </CustomContainer>
    </SimpleScene>
  </div>
);

const map = state => ({
  c0: state.s6.c0,
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
  c20: state.s6.c20,
  c21: state.s6.c21,
  c22: state.s6.c22,
  c23: state.s6.c23,
  c24: state.s6.c24,
  c25: state.s6.c25,
  c26: state.s6.c26,
  c27: state.s6.c27,
  c28: state.s6.c28,
  c29: state.s6.c29,
  c30: state.s6.c30,
  c31: state.s6.c31,
  c32: state.s6.c32,
  c33: state.s6.c33,
  c34: state.s6.c34,
  c35: state.s6.c35,
  c36: state.s6.c36,
  c37: state.s6.c37,
  c38: state.s6.c38,
  c39: state.s6.c39,
  c40: state.s6.c40,
  c41: state.s6.c41,
  c42: state.s6.c42,
  taskTaken: state.taskTaken,
  roleFulfilled: state.roleFulfilled,
  bToldHer: state.bToldHer,
  bFine: state.bFine,
  nieceName: state.nieceName,
  inLawName: state.inLawName,
  playerNameSaved: state.playerNameSaved,
  playerOccupationSaved: state.playerOccupationSaved,
  petTypeInputSaved: state.petTypeInputSaved,
  petNameInputSaved: state.petNameInputSaved
});

export default connect(map)(s6);
