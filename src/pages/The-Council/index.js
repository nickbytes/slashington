import { Link } from "react-router-dom";
import { connect } from "funcup";
import React, { Component } from "react";

import { easyNod, reactAngrily } from "../../updaters/updaters";
import AnimalQuote from "../../components/AnimalQuote";
import ChapterTitle from "../../components/ChapterTitle";
import CustomContainer from "../../components/CustomContainer";
import InProgress from "../../components/InProgress";
import ItalicMind from "../../components/ItalicMind";
import MainText from "../../components/MainText";
import UserQuote from "../../components/UserQuote";

class TheCouncil extends Component {
  constructor(props) {
    super(props);

    this.state = {
      yea: ""
    };
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
            booth and leads you along a narrow gently winding, stone-lined path.
            As you get closer to the huts, you see their brilliance. They are
            completely smooth, with no imperfections, as if they were always
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
          <ItalicMind>
            {this.props.petNameInputSaved || "Sam"} is talking
          </ItalicMind>
          <ItalicMind>You are in some other place</ItalicMind>
          <ItalicMind>is this a dream</ItalicMind>
          <ItalicMind>why the hell am I still holding this keyboard</ItalicMind>
          <br />
          <InProgress>I think it would be cool to have these flash</InProgress>
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
            hold back tears. "So young, too young, I shouldn't say anymore, but
            I'm worried for..." {this.props.petNameInputSaved || "Sam"} takes a
            deep breath and tries to stay composed.
          </MainText>
        </CustomContainer>

        <CustomContainer>
          <UserQuote>"I'm not young... I don't understand..."</UserQuote>
        </CustomContainer>

        <CustomContainer>
          <MainText>
            {this.props.petNameInputSaved || "Sam"} isn't paying attention,
            engulfed in tears, choking up.
          </MainText>
        </CustomContainer>

        <CustomContainer>
          <UserQuote pl={"300px"}>
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
          <UserQuote pl={"300px"}>
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
          <UserQuote pl={"300px"}>
            "We, as you might know, are The Council."
          </UserQuote>
        </CustomContainer>

        <CustomContainer>
          <MainText>
            <ul>
              {!this.props.easyNod &&
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
                </li>}

              {!this.props.reactAngrily &&
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
                </li>}
            </ul>
          </MainText>
        </CustomContainer>

        {this.props.reactAngrily &&
          <CustomContainer>
            <InProgress>React angrily</InProgress>
            <UserQuote>"What the fuck is going on?!"</UserQuote>
            <AnimalQuote pl={"300px"}>"You have been-"</AnimalQuote>
            <AnimalQuote pl={"150px"}>
              "Must we really explain this again Comrade Igglefort?"
            </AnimalQuote>
            <AnimalQuote pl={"300px"}>
              "Rule 17, Article 405b states that the counselor must explain
              appropriate context for me the-"
            </AnimalQuote>
            <AnimalQuote pl={"150px"}>
              "I know what the article states."
            </AnimalQuote>
            <AnimalQuote pl={"300px"}>
              Then you should also understand it's importance. As I was
              saying...
            </AnimalQuote>
            <AnimalQuote pl={"300px"}>
              You have been selected for a task. But first, some background.
              Magic has been passed down throughout the ages. It used to be
              taught somewhat more openly, and accepted on some level, but rises
              in secular conservatism saw it as a threat. People persecuted
              magicial beings. Now it is hushed, but helps to keep societal
              balance in some ways. Today, magic is only taught to a handful of
              people, usually found in their early teens. These teenagers
              possess abilities in science, computing, mathematics. The best
              magicians are critical thinkers, optimists. A few will go into
              politics, but that can really go awry.
            </AnimalQuote>
            <AnimalQuote pl={"300px"}>
              Ivy League colleges were created to find best and brightest, and
              pump logical, big biz, into their veins, to stamp magic out. It's
              own optimistic ritual, though dangerous. The same faith in trickle
              down morality as in economics. She is a number of a handful. She
              has been learning. It is time for her to learn more, to assert
              more influence.
            </AnimalQuote>
            <UserQuote>"She?"</UserQuote>
            <AnimalQuote pl={"300px"}>
              Why politicians not seek to out magic? Would cause panic. Some of
              them are covert magicians themselves.
            </AnimalQuote>
            <AnimalQuote pl={"300px"}>
              Next bit of her training is the most important, need an easy
              vessel for communication. Your keyboard. Once items made magical,
              hard to detect obviously, looks as though a product of modern
              tech. Last time tried a blender, obvious fluke...
            </AnimalQuote>
            <CustomContainer>
              <MainText>
                Something sounds vaguely familiar about a blender. A moment of
                deja-vu almost, but you cannot piece it together...
              </MainText>
              <UserQuote pl={"150px"}>
                "Comrade Igglefort, may we hear some possible doubts in this
                plan-"
              </UserQuote>
              <MainText>
                another {this.props.petTypeInputSaved || "dog"} says.
              </MainText>
              <UserQuote pl={"300px"}>
                "The Council has decided. There will be no further discussions.
                We are moving forward with the candidate."
              </UserQuote>

              <MainText>
                Some {this.props.petTypeInputSaved || "dog"}s look taken aback,
                or vaguely offended, though none continue to quarrel. You hear
                one of them mutter something like "too exposed."
              </MainText>
            </CustomContainer>
          </CustomContainer>}

        {this.props.easyNod &&
          <CustomContainer>
            <AnimalQuote pl={"300px"}>
              "What else do you know about us?"
            </AnimalQuote>
            <AnimalQuote pl={"150px"}>
              "{this.props.playerNameSaved} knows nothing else, you know that,
              Comrade Igglefort."
            </AnimalQuote>
            <AnimalQuote>
              "Rule 42, Section 7, Line 12 states that a counselor must ask
              whether or not there is any remembrance of encounters prior-"
            </AnimalQuote>
            <AnimalQuote pl={"150px"}>
              "I know what the article states."
            </AnimalQuote>
            <AnimalQuote pl={"300px"}>
              Then you should also understand it's importance. Now that that's
              finished, please allow me to quickly run through protocol and
              update our guest on their task.
            </AnimalQuote>
            <MainText>
              The other {this.props.petTypeInputSaved} nods, and sits back in
              disinterest.
            </MainText>
            <AnimalQuote pl={"300px"}>
              You have been selected for a task. But first, some background. You
              are not in a dream. Magic has been passed down throughout the
              ages. It used to be taught somewhat more openly, and accepted on
              some level, but rises in secular conservatism saw it as a threat.
              People persecuted magicial beings. Now it is hushed, but helps to
              keep societal balance in some ways. Today, magic is only taught to
              a handful of people, usually found in their early teens. These
              teenagers possess abilities in science, computing, mathematics.
              The best magicians are critical thinkers, optimists. A few will go
              into politics, but that can really go awry.
            </AnimalQuote>
            <AnimalQuote pl={"300px"}>
              Ivy League colleges were created to find best and brightest, and
              pump logical, big biz, into their veins, to stamp magic out. It's
              own optimistic ritual, though dangerous. The same faith in trickle
              down morality as in economics. She is a number of a handful. She
              has been learning. It is time for her to learn more, to assert
              more influence.
            </AnimalQuote>
            <UserQuote>"She?"</UserQuote>
            <AnimalQuote pl={"300px"}>
              Why politicians not seek to out magic? Would cause panic. Some of
              them are covert magicians themselves.
            </AnimalQuote>
            <AnimalQuote pl={"300px"}>
              Next bit of her training is the most important, need an easy
              vessel for communication. Your keyboard. Once items made magical,
              hard to detect obviously, looks as though a product of modern
              tech. Last time tried a blender, obvious fluke...
            </AnimalQuote>
            <MainText>
              Something sounds vaguely familiar about a blender. A moment of
              deja-vu almost, but you cannot piece it together...
            </MainText>
            <UserQuote>"How much danger is she in?"</UserQuote>
            <AnimalQuote>We are fully confident in her abilities.</AnimalQuote>
            <UserQuote>"You did not answer my question."</UserQuote>
            <AnimalQuote>
              "She will be more prepared, in less danger, if you can
              successfully get this item to her. She faces no immediate danger,
              but must begin more intensive training to prepare for her future.
              A very important future."
            </AnimalQuote>
          </CustomContainer>}

        {this.props.explanationHeard &&
          <CustomContainer>
            <Link to="/04-Leaving-Slashington">Next</Link>
          </CustomContainer>}
      </div>
    );
  }
}

const map = state => ({
  petNameInputSaved: state.petNameInputSaved,
  petTypeInputSaved: state.petTypeInputSaved,
  playerNameSaved: state.playerNameSaved,
  playerOccupationSaved: state.playerOccupationSaved,
  reactAngrily: state.reactAngrily,
  easyNod: state.easyNod,
  explanationHeard: state.explanationHeard
});

export default connect(map)(TheCouncil);
