import { Divider } from "rebass";
import { Link } from "react-router-dom";
import { connect } from "funcup";
import React from "react";

import ChapterTitle from "../../components/ChapterTitle";
import CustomContainer from "../../components/CustomContainer";
import MainText from "../../components/MainText";
import ThoughtQuote from "../../components/ThoughtQuote";
import UserQuote from "../../components/UserQuote";
import buttonStyle from "../../utilities/buttonStyle";

const LeavingSlashington = props => (
  <div>
    <CustomContainer>
      <ChapterTitle>Leaving Slashington</ChapterTitle>
    </CustomContainer>

    <CustomContainer>
      <MainText>You sit down again in the same seat on the train.</MainText>
    </CustomContainer>

    <CustomContainer>
      <MainText>
        You watch outside, as {this.props.petNameInputSaved} waves to you. And
        you feel the familiar jolt of the train as it begins to move forward.
        After some time, the train gains speed and you can no longer seen the
        small village of Slashington, only the barren landscape. One hour
        passes. A small red, ice capped mountain appears in the distance. Closer
        and closer it comes over the next hour, and the train appears to be
        preparing to go through a tunnel at the base.
      </MainText>
    </CustomContainer>

    <CustomContainer>
      <MainText>
        You look back towards Slashington, though it is now disappeared in the
        distance. The sun is beginning to peak from the horizon to your left. As
        you enter the tunnel,{" "}
        <button style={buttonStyle}>darkness engulfs your car</button>.
      </MainText>
    </CustomContainer>

    <CustomContainer>
      <MainText>
        Three or four seconds. Suddenly the car{" "}
        <button style={buttonStyle}>bursts</button> with light, you grimace and
        squint in the stark contrast. When you open your eyes, the train car is
        again packed with people, regular people. People reading their tablets,
        morning papers, talking on cell phones, glancing out the window as you
        pass through Baltimore.
      </MainText>
    </CustomContainer>

    <CustomContainer>
      <Divider />
    </CustomContainer>

    {props.dividerClicked && (
      <div>
        <CustomContainer>
          <MainText>
            Alex greets you at the station. You load your bags and keyboard into
            the trunk of his car.
          </MainText>
        </CustomContainer>
        <CustomContainer>
          <UserQuote>"What's with the keyboard?"</UserQuote>
          <MainText>hes asks, somewhat concerned.</MainText>
        </CustomContainer>
        <CustomContainer>
          <UserQuote>"A gift for Sam."</UserQuote>
        </CustomContainer>
        <CustomContainer>
          <MainText>
            He goes on chatting about work, neighbors, Jill's job, only do you
            take notice when he mentions the exception grades Emma has been
            getting.
          </MainText>
        </CustomContainer>

        <CustomContainer>
          <UserQuote>"That's great, real great."</UserQuote>
        </CustomContainer>
        <CustomContainer>
          <MainText>
            The words of The Council <button style={buttonStyle}>
              echo
            </button>{" "}
            in your head.
          </MainText>
        </CustomContainer>
      </div>
    )}

    {props.wordsEcho && (
      <div>
        <CustomContainer>
          <ThoughtQuote>
            The burden is too great for one so young. Surely some adult can take
            on responsibility.
          </ThoughtQuote>
        </CustomContainer>

        <CustomContainer>
          <ThoughtQuote>
            It must be her. Weve gone over this. She is uniquely talented, and
            her path will cross appropriately.
          </ThoughtQuote>
          <ThoughtQuote>
            But she may not be able to do it. She may die.
          </ThoughtQuote>
          <ThoughtQuote> It is the only way..</ThoughtQuote>
        </CustomContainer>
        <CustomContainer>
          <UserQuote>
            'Hey, anyway, were glad to have you here. You look like you could
            use a little break from the office for a weekend.'
          </UserQuote>
        </CustomContainer>
        <CustomContainer>
          <UserQuote>"Yeah, definitely."</UserQuote>
        </CustomContainer>

        <CustomContainer>
          <Link to="/Birthday">Next</Link>
        </CustomContainer>
      </div>
    )}
  </div>
);

const map = state => ({
  darknessEngulfs: state.darknessEngulfs,
  lightBursts: state.lightBursts,
  wordsEcho: state.wordsEcho,
  dividerClicked: state.dividerClicked
});

export default connect(map)(LeavingSlashington);
