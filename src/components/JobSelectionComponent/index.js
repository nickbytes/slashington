import { Label, Radio } from "rebass";
import { connect } from "funcup";
import React from "react";

import {
  addPlayerOccupation,
  setNewPlayerOccupation
} from "../../updaters/updaters";
import { createTitle } from "./jobGenerator";

// TODO refactor
const job1 = createTitle();
const job2 = createTitle();
const job3 = createTitle();

const JobSelectionComponent = props =>
  <form
    onSubmit={e => {
      e.preventDefault();
      props.update(addPlayerOccupation);
    }}
  >
    <radiogroup>
      <Label
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: "900",
          fontStyle: "italic",
          fontSize: "3rem"
        }}
      >
        <Radio
          name="radio"
          value={job1}
          checked={job1 === props.playerOccupationRadio}
          onChange={e => props.update(setNewPlayerOccupation(e.target.value))}
        />
        {job1}
      </Label>
      <Label
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: "900",
          fontStyle: "italic",
          fontSize: "3rem"
        }}
      >
        <Radio
          name="radio"
          value={job2}
          checked={job2 === props.playerOccupationRadio}
          onChange={e => props.update(setNewPlayerOccupation(e.target.value))}
        />
        {job2}
      </Label>
      <Label
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: "900",
          fontStyle: "italic",
          fontSize: "3rem"
        }}
      >
        <Radio
          name="radio"
          value={job3}
          checked={job3 === props.playerOccupationRadio}
          onChange={e => props.update(setNewPlayerOccupation(e.target.value))}
        />
        {job3}
      </Label>
    </radiogroup>
    <button>Save</button>
  </form>;

const map = state => ({
  playerOccupationRadio: state.playerOccupationRadio
});

export default connect(map)(JobSelectionComponent);
