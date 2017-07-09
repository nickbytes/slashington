import { Blockquote, Container, Divider, Text } from "rebass";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import styled from "styled-components";

import CustomContainer from "../../components/CustomContainer";

class LeavingSlashington extends Component {
  render() {
    return (
      <div>
        <CustomContainer>
          <h1>Leaving Slashington</h1>
        </CustomContainer>

        <CustomContainer>
          <Text>You sit down again in the same seat on the train.</Text>
        </CustomContainer>

        <CustomContainer>
          <Text>
            You watch outside, as _George_ waves to you. And you feel the
            familiar
            jolt of the train as it begins to move forward. After some time, the
            train gains speed and you can no longer seen the small village of
            Slashington, only the barren landscape. One hour passes. A small
            red,
            ice capped mountain appears in the distance. Closer and closer it
            comes
            over the next hour, and the train appears to be preparing to go
            through
            a tunnel at the base.
          </Text>
        </CustomContainer>

        <CustomContainer>
          <Text>
            You look back towards Slashington, though it is now disappeared in
            the
            distance. The sun is beginning to peak from the horizon to your
            left. As
            you enter the tunnel, darkness engulfs your car.
          </Text>
        </CustomContainer>

        <CustomContainer>
          <Text>
            Three or four seconds. Suddenly the car bursts with morning light,
            you
            grimace and squint in the stark contrast. When you open your eyes,
            the
            train car is again packed with people, regular people. People
            reading
            their tablets, morning papers, talking on cell phones, glancing out
            the
            window as you pass through Baltimore.
          </Text>
        </CustomContainer>

        <CustomContainer>
          <Divider />
        </CustomContainer>

        <CustomContainer>
          <Text>
            Alex greets you at the station. You load your bags and [item ]
            into the trunk of his car.
          </Text>
        </CustomContainer>

        <CustomContainer>
          <Blockquote>"What's with the [item]?"</Blockquote>
          <Text>hes asks, somewhat concerned.</Text>
        </CustomContainer>

        <CustomContainer>
          <Blockquote>
            "Oh. Something I was getting fixed. No big deal."
          </Blockquote>
        </CustomContainer>

        <CustomContainer>
          <Text>
            He goes on chatting about work, neighbors, _____ s job, only do you
            take notice when he mentions the exception grades Emma has been
            getting.
          </Text>
        </CustomContainer>

        <CustomContainer>
          <Blockquote>"That's great, real great."</Blockquote>
        </CustomContainer>

        <CustomContainer>
          <Text>The words of The Council echo in your head.</Text>
        </CustomContainer>

        <CustomContainer>
          <Blockquote>
            > The burden is too great for one so young. Surely some adult can
            take
            on responsibility.
          </Blockquote>
        </CustomContainer>

        <CustomContainer>
          <Blockquote>
            > It must be her. Weve gone over this. She is uniquely talented, and
            her path will cross appropriately.
          </Blockquote>
          <Blockquote>
            > But she may not be able to do it. She may die.
          </Blockquote>
          <Blockquote>> It is the only way..</Blockquote>
        </CustomContainer>

        <CustomContainer>
          <Blockquote>
            'Hey, anyway, were glad to have you here. You look like you could
            use a
            little break from the office for a weekend.'
          </Blockquote>
        </CustomContainer>

        <CustomContainer>
          <Blockquote>"Yeah, definitely."</Blockquote>
        </CustomContainer>

        <CustomContainer>
          <Link to="/05-Birthday">Next</Link>
        </CustomContainer>

      </div>
    );
  }
}

export default LeavingSlashington;
