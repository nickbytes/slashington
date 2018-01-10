import React from "react";

import MainText from "../../../components/MainText";
import SimpleScene from "../../../components/SimpleScene";
import UserQuote from "../../../components/UserQuote";

const s04eTheCouncil = props => (
  <div>
    <SimpleScene>
      <MainText>You stand inside an empty waiting room.</MainText>
      <MainText>
        You look up and see the digital train schedule board whizzing
        uncontrollably.
      </MainText>
    </SimpleScene>
    <SimpleScene>
      <MainText>Weird.</MainText>
    </SimpleScene>
    <SimpleScene>
      <UserQuote attrib="Unknown Voice, to your right">
        Ahhhhh, {props.playerNameSaved}, {props.playerOccupationSaved},
        Earthling of the Bauzort tribe.
      </UserQuote>
      <MainText>You nearly jump at the sound of a voice.</MainText>

      <MainText>
        When you turn, you see inside the small train station cafe, amongst a
        number of small empty tables, a table full of...{" "}
        {props.petTypeInputSaved}.
      </MainText>

      <MainText>
        All of them are dressed similarly to {props.petNameInputSaved}, but more
        grandiose and intricate, like some weird game of thrones cosplay mixed
        with a model train fanatic.
      </MainText>

      <UserQuote
        attrib={`${props.petTypeInputSaved}, sitting at head of table`}
      >
        Have a seat.
      </UserQuote>
      <MainText>
        The {props.petTypeInputSaved} nods towards an empty seat at their table.
        Your feet seem to walk without you telling them to do so.
      </MainText>
    </SimpleScene>

    <SimpleScene>"We, as you might know, are The Council."</SimpleScene>
  </div>
);

export default s04eTheCouncil;
