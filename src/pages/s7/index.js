import { Link } from "react-router-dom";
import { connect } from "funcup";
import React from "react";

import { ns } from "../../updaters/ns";
import CustomContainer from "../../components/CustomContainer";
import MainText from "../../components/MainText";
import NextButton from "../../components/NextButton";
import SimpleScene from "../../components/SimpleScene";
import UserQuote from "../../components/UserQuote";
import Waiting from "../../components/Waiting";
import leaves_glitch from "../../images/gifs/leaves_glitch.gif";

const s7 = props => (
  <div>
    <SimpleScene isVisible={props.c1}>
      <CustomContainer>
        <img
          src={leaves_glitch}
          alt={"A nice tree"}
          style={{
            width: "100%",
            maxWidth: "600px",
            marginBottom: "50px"
          }}
        />
        <MainText>
          Wow, you must have dozed off a little bit there... what a week.
        </MainText>
        <MainText>You survey the backyard.</MainText>
        <MainText>
          Teenagers running around, parents chatting, the sublte hum of
          Nickelback. You sit up a little bit in the lawnchair.
        </MainText>
        <NextButton onClick={() => props.update(ns("s7", "c2"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c2}>
      <CustomContainer>
        <UserQuote attrib={`Alex, brother`}>
          Have a bit of a nap there? They've really got you working hard, glad
          you are relaxing.
        </UserQuote>

        <MainText>
          Alex hands you a cold creme soda. Damn, you love creme soda.
        </MainText>
        <NextButton onClick={() => props.update(ns("s7", "c3"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c3}>
      <CustomContainer>
        <UserQuote attrib={`You, ${props.playerNameSaved}`}>
          Thanks. Yea, I guess so.
        </UserQuote>

        <MainText>
          You barely remember sitting down here... You're glad you came to{" "}
          {props.nieceName}'s birthday. This is exactly what you needed.
        </MainText>
        <NextButton onClick={() => props.update(ns("s7", "c4"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c4}>
      <CustomContainer>
        <UserQuote attrib={`Alex, brother`}>
          Oh, and {props.nieceName} just told me about the keyboard. Wow,{" "}
          {props.playerNameSaved}. She was going on about how perfect it is,
          presumably for some new game – it's hard to keep up with them.
        </UserQuote>
        <MainText>
          Alex shakes his head and takes a swig of creme soda.
        </MainText>
        <NextButton onClick={() => props.update(ns("s7", "c5"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c5}>
      <CustomContainer>
        <UserQuote attrib={`Alex, brother`}>
          I did a little research, they're all the rage right now.
        </UserQuote>
        <MainText>
          The words come out effortlessly, almost mechanically.
        </MainText>
        <MainText>
          You feel like you <i>really knew</i> she'd like the keyboard. You
          checked a few forums, watched some reviews online... but where had you
          picked the keyboard up, again? And when did you get it...?
        </MainText>
        <NextButton onClick={() => props.update(ns("s7", "c6"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c6}>
      <CustomContainer>
        <Waiting />
        <Waiting delay={200} />
        <Waiting delay={300} />
        <NextButton onClick={() => props.update(ns("s7", "c7"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c7}>
      <CustomContainer>
        <MainText>
          You can't remember. Geez, a few weeks of hectic work can really do a
          number on you...
        </MainText>
        <MainText>It doesn't matter.</MainText>
        <MainText>
          She loves the gift, you're with family, and you don't have to work
          this weekend for the first time in a long while.
        </MainText>
        <NextButton onClick={() => props.update(ns("s7", "c8"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c8}>
      <CustomContainer>
        <UserQuote attrib={`Alex, brother`}>
          Hey – and can you believe she won backstage passes to the Frailty Stow
          show next month? Quite the birthday. She's excited. I didn't even know
          she entered a contest.
        </UserQuote>
        <NextButton onClick={() => props.update(ns("s7", "c9"))} />
      </CustomContainer>
    </SimpleScene>

    <SimpleScene isVisible={props.c9}>
      <CustomContainer>
        <UserQuote attrib={`You, ${props.playerNameSaved}`}>
          Wow, jealous.
        </UserQuote>
        <Link to={`/credits`}>Next</Link>
      </CustomContainer>
    </SimpleScene>
  </div>
);

const map = state => ({
  c1: state.s7.c1,
  c2: state.s7.c2,
  c3: state.s7.c3,
  c4: state.s7.c4,
  c5: state.s7.c5,
  c6: state.s7.c6,
  c7: state.s7.c7,
  c8: state.s7.c8,
  c9: state.s7.c9,
  playerNameSaved: state.playerNameSaved,
  nieceName: state.nieceName
});

export default connect(map)(s7);
