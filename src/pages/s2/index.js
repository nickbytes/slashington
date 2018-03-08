import { connect } from "funcup";
import React from "react";

import {
  AbsoluteBlack,
  ChapterNext,
  ChapterNum,
  ChapterTitle
} from "../../components/ChapterUtils";
import { List, ListItem } from "../../components/ListUtils";
import { ns } from "../../updaters/ns";
import Clickable from "../../components/Clickable";
import CustomContainer from "../../components/CustomContainer";
import Echo from "../../components/Echo";
import EchoInline from "../../components/EchoInline";
import MainText from "../../components/MainText";
import NextButton from "../../components/NextButton";
import NextChapter from "../../components/NextChapter";
import SimpleScene from "../../components/SimpleScene";
import UserQuote from "../../components/UserQuote";
import Waiting from "../../components/Waiting";
import Waves from "../../components/Waves";
import onboard_glitch from "../../images/gifs/onboard_glitch.gif";
import trainmoving_glitch from "../../images/gifs/trainmoving_glitch.gif";

const scene = "s2";

const s2 = props => (
  <div>
    <SimpleScene isVisible={props.c0}>
      <AbsoluteBlack />
      <CustomContainer>
        <ChapterNum>Chapter 2</ChapterNum>
        <ChapterTitle>Train Ride</ChapterTitle>
        <ChapterNext onClick={() => props.update(ns("s2", "c1"))} />
      </CustomContainer>
    </SimpleScene>
    <SimpleScene isVisible={props.c1}>
      <CustomContainer>
        <MainText>
          You board the train, duffle bag slung over one shoulder, keyboard in
          the other hand.
        </MainText>
        <MainText>
          You find a seat near the middle of the train and unwind. You've made
          it. The end of a long week.
        </MainText>
        <MainText>
          Relief washes over you like a series gentle{" "}
          <Clickable clickFn={e => props.update(ns(scene, "c2"))}>
            waves.
          </Clickable>
        </MainText>
      </CustomContainer>
    </SimpleScene>
    <SimpleScene isVisible={props.c2}>
      <CustomContainer>
        <Waves />
        <NextButton onClick={() => props.update(ns("s2", "c3"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c3}>
      <CustomContainer>
        <MainText>
          The train nudges forward, and begins rolling out of the station.
        </MainText>
        <MainText>
          <img
            src={trainmoving_glitch}
            alt={"Leaving the station"}
            style={{
              width: "100%",
              maxWidth: "600px"
            }}
          />
        </MainText>
        <MainText>
          You lean against the window as city lights slowly give in to the
          darkness of the outer edges of the city.
        </MainText>
        <MainText>
          The train has begun its slow wind along the coast. It lulls you to{" "}
          <Clickable clickFn={() => props.update(ns("s2", "c4"))}>
            sleep.
          </Clickable>
        </MainText>
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c4}>
      <CustomContainer>
        <NextButton onClick={() => props.update(ns("s2", "c5"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c4}>
      <CustomContainer>
        <Waiting />
        <Waiting delay={200} />
        <Waiting delay={300} />
        <NextButton onClick={() => props.update(ns("s2", "c5"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c5}>
      <CustomContainer>
        <MainText>
          Half awake, you hear the sounds of the doors opening.
        </MainText>
        <MainText>
          You squirm in your seat, trying to get comfortable, holding on to the
          precious sleep that has eluded you most of the week.
        </MainText>

        <MainText>
          You hear the subtle whirrrrrr of the train engines at rest.
        </MainText>
        <NextButton onClick={() => props.update(ns("s2", "c6"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c6}>
      <CustomContainer>
        <MainText>
          Opening your eyes for a split second, you see you are still alone in
          the train cabin.
        </MainText>
        <MainText>
          <img
            src={onboard_glitch}
            alt="No one here."
            style={{
              width: "100%",
              maxWidth: "600px"
            }}
          />
        </MainText>
        <MainText>
          The sky was still dark. There are no blue hues fading into black sky
          yet. You must be somewhere between Baltimore and Washington, D.C.
        </MainText>
        <MainText>
          You feel the keyboard and bag, still on the seat next to you.
        </MainText>

        <MainText>
          Soon, the conductor will announce the next stop, advise passengers to{" "}
          <i>Stand Clear Of The Closing Doors</i>, accompanied by the soft{" "}
          <i>ding dong ding dong</i>, and the train will continue onward.
        </MainText>

        <MainText>You wait for the announcement.</MainText>
        <NextButton onClick={() => props.update(ns("s2", "c7"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c7}>
      <CustomContainer>
        <Waiting />
        <Waiting delay={200} />
        <Waiting delay={300} />
        <NextButton onClick={() => props.update(ns("s2", "c8"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c8}>
      <CustomContainer>
        <MainText>
          There must be some hold up. Possibly waiting for another train for
          people to transfer, someone asking the conductor about directions...
        </MainText>
        <NextButton onClick={() => props.update(ns("s2", "c9"))} />
      </CustomContainer>
    </SimpleScene>
    <SimpleScene isVisible={props.c9}>
      <CustomContainer>
        <Waiting />
        <Waiting delay={200} />
        <Waiting delay={300} />
        <NextButton onClick={() => props.update(ns("s2", "c10"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c10}>
      <CustomContainer>
        <MainText>
          The car is quiet. You steal another glance, and twist your neck to see
          if anyone else in the car is awake and noticing the stop, but you are
          the only one in the car.
        </MainText>

        <MainText>You sit up straight and glance out at the station.</MainText>

        <MainText>Which station is this?</MainText>
        <NextButton onClick={() => props.update(ns("s2", "c11"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c11}>
      <CustomContainer>
        <MainText>
          You look for a sign, but do not immediately see one.
        </MainText>

        <MainText>
          It looks like any other medium sized station along this corridor.
        </MainText>

        <MainText>Each follow a similar layout:</MainText>
        <NextButton onClick={() => props.update(ns("s2", "c12"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c12}>
      <CustomContainer>
        <List>
          <ListItem>
            <MainText>1. a small parking lot</MainText>
          </ListItem>
          <ListItem>
            <MainText>
              2. a variety of weathered vending machines inside and out, usually
              out-of-order and/or stock
            </MainText>
          </ListItem>
          <ListItem>
            <MainText>3. a waiting room, in case of inclimate weather</MainText>
          </ListItem>
          <ListItem>
            <MainText>
              4. a small snack bar/cafe selling tar black coffee, breakfast
              pastries wrapped in Saran Wrap, fruit snacks, magazines, energy
              drinks, beer, wine coolers, chips, candy, gum
            </MainText>
          </ListItem>
          <ListItem>
            <MainText>5. a sadly restroom</MainText>
          </ListItem>
          <ListItem>
            <MainText>
              6. and a plastic wall mount distributing pamphlets for
              attractions, restaurants, golf courses, hay rides, swimming poles,
              lawn care, tax services, and public parks
            </MainText>
          </ListItem>
        </List>
        <NextButton onClick={() => props.update(ns("s2", "c13"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c13}>
      <CustomContainer>
        <MainText>This station is no different.</MainText>
        <NextButton onClick={() => props.update(ns("s2", "c14"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c14}>
      <CustomContainer>
        <MainText>
          Lights illuminate the platform, though no one is standing outside.
        </MainText>
        <NextButton onClick={() => props.update(ns("s2", "c15"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c15}>
      <CustomContainer>
        <MainText>
          Something catches your eye, further along the platform.
        </MainText>
        <NextButton onClick={() => props.update(ns("s2", "c16"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c16}>
      <CustomContainer>
        <MainText>Sitting on one of the benches outside...</MainText>
        <NextButton onClick={() => props.update(ns("s2", "c17"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c17}>
      <CustomContainer>
        <Waiting />
        <Waiting delay={200} />
        <Waiting delay={300} />
        <NextButton onClick={() => props.update(ns("s2", "c18"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c18}>
      <CustomContainer>
        <MainText>Is... that ...?</MainText>
        <NextButton onClick={() => props.update(ns("s2", "c19"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c19}>
      <CustomContainer>
        <MainText>
          Your eyes must be deceiving you. For a second, you thought you saw...
          no, no... surely not.
        </MainText>
        <MainText>
          Lack of sleep, exhaustion... work has you all out of wack.
        </MainText>
        <NextButton onClick={() => props.update(ns("s2", "c20"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c20}>
      <CustomContainer>
        <MainText>
          You rub your eyes, and look out onto the platform again.
        </MainText>

        <MainText>
          Is it a child waving at you? You try and convince yourself otherwise,
          but the thought rises up anyway...
        </MainText>
        <NextButton onClick={() => props.update(ns("s2", "c21"))} />
      </CustomContainer>
    </SimpleScene>
    <SimpleScene isVisible={props.c21}>
      <CustomContainer>
        <MainText>... is that a {props.petTypeInputSaved}?</MainText>
        <NextButton onClick={() => props.update(ns("s2", "c22"))} />
      </CustomContainer>
    </SimpleScene>
    <SimpleScene isVisible={props.c22}>
      <CustomContainer>
        <MainText>
          You stand, face pressed against the glass, peering wildly across the
          platform.
        </MainText>
        <MainText>... is it... waving at you?!?!</MainText>
        <NextButton onClick={() => props.update(ns("s2", "c23"))} />
      </CustomContainer>
    </SimpleScene>
    <SimpleScene isVisible={props.c23}>
      <CustomContainer>
        <MainText>
          You turn back to and look around the train car, but there is still no
          one there.
        </MainText>
        <MainText>Dishelved, you sit back down in your seat.</MainText>
        <NextButton onClick={() => props.update(ns("s2", "c24"))} />
      </CustomContainer>
    </SimpleScene>
    <SimpleScene isVisible={props.c24}>
      <CustomContainer>
        <List>
          <ListItem>
            <Echo>What is happening?</Echo>
          </ListItem>
          <ListItem>
            <Echo>Is this a dream?</Echo>
          </ListItem>
          <ListItem>
            <Echo>This must be a dream, {props.playerNameSaved}.</Echo>
          </ListItem>
          <ListItem>
            <Echo>Of course.</Echo>
          </ListItem>
        </List>

        <NextButton onClick={() => props.update(ns("s2", "c25"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c25}>
      <CustomContainer>
        <MainText>
          You've got to go see... You stand and begin walking through the aisle,
          leaving your belongings, peering wildly out on to the platform.
        </MainText>
        <MainText>You are nearly at a jog.</MainText>
        <NextButton onClick={() => props.update(ns("s2", "c26"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c26}>
      <CustomContainer>
        <MainText>
          Through the doors and down the platform on a bench a few paces away is
          a small {props.petTypeInputSaved}.
        </MainText>
        <MainText>Not just any {props.petTypeInputSaved}...</MainText>
        <NextButton onClick={() => props.update(ns("s2", "c27"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c27}>
      <CustomContainer>
        <UserQuote attrib={`You, ${props.playerNameSaved}`}>
          <Clickable clickFn={() => props.update(ns("s2", "c28"))}>
            {props.petNameInputSaved}?!?!?!?!
          </Clickable>
        </UserQuote>
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c28}>
      <CustomContainer>
        <UserQuote attrib={props.petNameInputSaved}>
          Good morning, {props.playerNameSaved}! A little late, but it should be
          fine.
        </UserQuote>
        <MainText>
          There, standing in front of you, is {props.petNameInputSaved}.
        </MainText>
        <MainText>
          Not only that, but {props.petNameInputSaved} is wearing a small,
          shabby train conductors outfit...
        </MainText>
        <NextButton onClick={() => props.update(ns("s2", "c29"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c29}>
      <CustomContainer>
        <UserQuote attrib={`You, ${props.playerNameSaved}`}>
          You can speak! What in the hell is going on? Where are we.. What is
          The Council...
        </UserQuote>

        <MainText>
          You feel your legs start to <EchoInline>wobble</EchoInline>.
        </MainText>
        <UserQuote attrib={props.petNameInputSaved}>
          Oh yes, I always seem to forget this part...The Council will explain
          it to you.
        </UserQuote>

        <NextChapter to="/slashington" />
      </CustomContainer>
    </SimpleScene>
  </div>
);

const map = state => ({
  c0: state.s2.c0,
  c1: state.s2.c1,
  c2: state.s2.c2,
  c3: state.s2.c3,
  c4: state.s2.c4,
  c5: state.s2.c5,
  c6: state.s2.c6,
  c7: state.s2.c7,
  c8: state.s2.c8,
  c9: state.s2.c9,
  c10: state.s2.c10,
  c11: state.s2.c11,
  c12: state.s2.c12,
  c13: state.s2.c13,
  c14: state.s2.c14,
  c15: state.s2.c15,
  c16: state.s2.c16,
  c17: state.s2.c17,
  c18: state.s2.c18,
  c19: state.s2.c19,
  c20: state.s2.c20,
  c21: state.s2.c21,
  c22: state.s2.c22,
  c23: state.s2.c23,
  c24: state.s2.c24,
  c25: state.s2.c25,
  c26: state.s2.c26,
  c27: state.s2.c27,
  c28: state.s2.c28,
  c29: state.s2.c29,
  petTypeInputSaved: state.petTypeInputSaved,
  playerNameSaved: state.playerNameSaved,
  petNameInputSaved: state.petNameInputSaved
});

export default connect(map)(s2);
