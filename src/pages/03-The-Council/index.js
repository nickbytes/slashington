import { Link } from "react-router-dom";
import { connect } from "funcup";
import React, { Component } from "react";

import { easyNod, reactAngrily } from "../../updaters/updaters";
import ChapterTitle from "../../components/ChapterTitle";
import CustomContainer from "../../components/CustomContainer";
import InProgress from "../../components/InProgress";
import MainText from "../../components/MainText";
import UserQuote from "../../components/UserQuote";

class TheCouncil extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <CustomContainer>
          <ChapterTitle>The Council</ChapterTitle>
        </CustomContainer>

        <CustomContainer>
          <MainText>
            {this.props.petNameInputSaved || "Sam"} moves out from behind the
            booth and leads you along a small gently winding stone-lined path.
            As you get closer to the huts, you see their brilliance. They are
            completely smooth, as if cut from lasers, as if they were always
            that shape. They look quite solid and dense, though you cannot see
            through the deep darkness and small doorways that would accommodate
            only a creature of {this.props.petNameInputSaved || "Sam"}'s size.
          </MainText>
        </CustomContainer>

        <CustomContainer>
          <MainText>
            You count the buildings. 8, 10, 12. 13. One building, is much larger
            than the other. You can see it along the path, towards the back of
            the grouping of huts. It has a large entrance, large enough for you
            to walk through...
          </MainText>
        </CustomContainer>

        <CustomContainer>
          <MainText>
            You suddenly realize {this.props.petNameInputSaved || "Sam"} has
            been talking the entire time you've been trying to take in the
            surroundings. Everything feels like a blur.
          </MainText>
        </CustomContainer>

        <CustomContainer>
          <MainText>
            {this.props.petNameInputSaved.toUpperCase() ||
              "Sam".toUpperCase()}{" "}
            IS TALKING. YOU ARE IN SOME OTHER PLACE. IS THIS A DREAM. WHY THE
            HELL AM I STILL HOLDING THIS KEYBOARD.
          </MainText>
        </CustomContainer>

        <CustomContainer>
          <MainText>
            Your heart pounds. You hear {this.props.petNameInputSaved || "Sam"}{" "}
            say something about "last time" and "of course its all dangerous but
            it's the only option" but you can barely hear{" "}
            {this.props.petNameInputSaved || "Sam"} over your heart pounding.
          </MainText>
        </CustomContainer>

        <CustomContainer>
          <MainText>
            {this.props.petNameInputSaved || "Sam"} stops at the doorway, a bone
            white door, nearly flush with the outside of the building and turns
            back to you. {this.props.petNameInputSaved || "Sam"} is trying to
            hold back tears as one escapes. "So young, too young, I shouldn't
            say anymore, but I'm worried for..."{" "}
            {this.props.petNameInputSaved || "Sam"} takes a deep breath and
            tries to stay composed.
          </MainText>
        </CustomContainer>

        <CustomContainer>
          <UserQuote>"I'm not young... I don't understand..."</UserQuote>
        </CustomContainer>

        <CustomContainer>
          <MainText>
            {this.props.petNameInputSaved || "Sam"} isn't paying attention,
            engulfed in tears.
          </MainText>
        </CustomContainer>

        <CustomContainer>
          <UserQuote>
            "Go on, they're waiting for you. I'll be out here once you're
            finished. You can leave your bags, but take the keyboard."
          </UserQuote>
        </CustomContainer>

        <CustomContainer>
          <MainText>
            You push the door, which though thick, is incredibly light. You're
            first drawn to the hanging light at the top of the cone roof. A
            circle _orb_ glowly softly, and–
          </MainText>
        </CustomContainer>

        <CustomContainer>
          <UserQuote>
            "Ahhhhh, {this.props.playerNameSaved || "Nick"},{" "}
            {this.props.playerOccupationSaved || "Deputy Robo Sorceress"},
            Earthling of the{" "}
            {this.props.playerCompanySaved || "Louza Depot Corp"} tribe."
          </UserQuote>
        </CustomContainer>

        <CustomContainer>
          <MainText>
            You see the circlular table, surrounded by a group of{" "}
            {this.props.petTypeInputSaved || "dog"}s dressed similarly, though
            more intricate and grandoise, as{" "}
            {this.props.petNameInputSaved || "Sam"}.
          </MainText>
        </CustomContainer>

        <CustomContainer>
          <MainText>"We, as you might know, are The Council."</MainText>
        </CustomContainer>

        <CustomContainer>
          <MainText>
            <ul>
              <li>
                <button
                  style={{
                    fontFamily: "inherit",
                    fontSize: "inherit",
                    lineHeight: "inherit",
                    border: "0",
                    background: "none",
                    cursor: "pointer",
                    borderBottom: "4px dotted",
                    outline: "0"
                  }}
                  onClick={e => this.props.update(reactAngrily)}
                >
                  React angrily
                </button>
              </li>
              <li>
                <button
                  style={{
                    fontFamily: "inherit",
                    fontSize: "inherit",
                    lineHeight: "inherit",
                    border: "0",
                    background: "none",
                    cursor: "pointer",
                    borderBottom: "4px dotted",
                    outline: "0"
                  }}
                  onClick={e => this.props.update(easyNod)}
                >
                  Nod
                </button>
              </li>
            </ul>
          </MainText>
        </CustomContainer>

        <CustomContainer>
          <InProgress>React angrily</InProgress>
          <UserQuote>"What the fuck is going on?!"</UserQuote>
          <UserQuote>"You have been-"</UserQuote>
          <UserQuote>
            "Must we really explain this again Comrade Igglefort?"
          </UserQuote>
          <UserQuote>
            "Rule 17, Article 405b states that the counselor must explain
            appropriate context for me the-"
          </UserQuote>
          <UserQuote>"I know what the article states."</UserQuote>
          <UserQuote>
            Then you should also understand it's importance. As I was saying...
          </UserQuote>
          <UserQuote>
            You have been selected for a task. But first, some background. Magic
            has been passed down throughout the ages. It used to be taught
            somewhat more openly, and accepted on some level, but rises in
            secular conservatism saw it as a threat. People persecuted magicial
            beings. Now it is hushed, but helps to keep societal balance in some
            ways. Today, magic is only taught to a handful of people, usually
            found in their early teens. These teenagers possess abilities in
            science, computing, mathematics. The best magicians are critical
            thinkers, optimists. A few will go into politics, but that can
            really go awry.
          </UserQuote>
          <UserQuote>
            Ivy League colleges were created to find best and brightest, and
            pump logical, big biz, into their veins, to stamp magic out. It's
            own optimistic ritual, though dangerous. The same faith in trickle
            down morality as in economics. She is a number of a handful. She has
            been learning. It is time for her to learn more, to assert more
            influence.
          </UserQuote>
          <UserQuote>"She?"</UserQuote>
          <UserQuote>
            Why politicians not seek to out magic? Would cause panic. Some of
            them are covert magicians themselves.
          </UserQuote>
          <UserQuote>
            Next bit of her training is the most important, need an easy vessel
            for communication. Your keyboard. Once items made magical, hard to
            detect obviously, looks as though a product of modern tech. Last
            time tried a blender, obvious fluke...
          </UserQuote>
        </CustomContainer>

        <CustomContainer>
          <MainText>
            Something sounds vaguely familiar about a blender. A moment of
            deja-vu almost, but you cannot piece it together...
          </MainText>
        </CustomContainer>

        <CustomContainer>
          <InProgress>Nodding</InProgress>
        </CustomContainer>

        <CustomContainer>
          <UserQuote>
            "Comrade Igglefort, may we get back to the matter at hand"
          </UserQuote>
          <MainText>
            another {this.props.petTypeInputSaved || "dog"} says.
          </MainText>
        </CustomContainer>

        <CustomContainer>
          <UserQuote>
            "The Council has decided. There will be no further discussions-"
          </UserQuote>

          <MainText>
            Some {this.props.petTypeInputSaved || "dog"}s look taken aback, or
            vaguely offended, though none continue to quarrel.{" "}
          </MainText>
        </CustomContainer>

        <CustomContainer>
          <Link to="/04-Leaving-Slashington">Next</Link>
        </CustomContainer>
      </div>
    );
  }
}

const map = state => ({
  petNameInputSaved: state.petNameInputSaved,
  petTypeInputSaved: state.petTypeInputSaved,
  playerNameSaved: state.playerNameSaved,
  playerOccupationSaved: state.playerOccupationSaved
});

export default connect(map)(TheCouncil);
