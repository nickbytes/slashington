import { Label, Radio } from "rebass";
import { connect } from "funcup";
import React from "react";

import {
  addPlayerOccupation,
  setNewPlayerOccupation
} from "../../updaters/updaters";

const JobSelectionComponent = props =>
  <form
    onSubmit={e => {
      e.preventDefault();
      props.update(addPlayerOccupation);
    }}
  >
    <radiogroup>
      <Label>
        <Radio
          name="radio"
          value={"Hello"}
          checked={"Hello" === props.playerOccupationRadio}
          onChange={e => props.update(setNewPlayerOccupation(e.target.value))}
        />
        Hello
      </Label>
      <Label>
        <Radio
          name="radio"
          value={"Beep"}
          checked={"Beep" === props.playerOccupationRadio}
          onChange={e => props.update(setNewPlayerOccupation(e.target.value))}
        />
        Beep
      </Label>
      <Label>
        <Radio
          name="radio"
          value={"Boop"}
          checked={"Boop" === props.playerOccupationRadio}
          onChange={e => props.update(setNewPlayerOccupation(e.target.value))}
        />
        Boop
      </Label>
    </radiogroup>
    <button>Save</button>
  </form>;

const map = state => ({
  playerOccupationRadio: state.playerOccupationRadio
});

export default connect(map)(JobSelectionComponent);
