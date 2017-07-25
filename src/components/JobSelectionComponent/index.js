import { Label, Radio } from "rebass";
import { connect } from "funcup";
import React from "react";

import {
  addPlayerOccupation,
  newJobs,
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
      {props.jobItems.map(jobItem =>
        <Label
          key={jobItem.id}
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: "900",
            fontStyle: "italic",
            fontSize: "3rem"
          }}
        >
          <Radio
            name="radio"
            value={jobItem.title}
            checked={jobItem.title === props.playerOccupationRadio}
            onChange={e => props.update(setNewPlayerOccupation(e.target.value))}
          />
          {jobItem.title}
        </Label>
      )}
    </radiogroup>
    <button
      onClick={e => {
        e.preventDefault();
        props.update(newJobs);
      }}
    >
      Regenerate Jobs
    </button>
    <button>Save</button>
  </form>;

const map = state => ({
  playerOccupationRadio: state.playerOccupationRadio,
  jobItems: state.jobItems
});

export default connect(map)(JobSelectionComponent);
