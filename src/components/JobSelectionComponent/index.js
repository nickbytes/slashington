import { Label, Radio } from "rebass";
import { connect } from "funcup";
import React from "react";

import {
  addPlayerOccupation,
  newJobs,
  setNewPlayerOccupation
} from "../../pages/s01eWork/updaters";

const JobSelectionComponent = props => (
  <form
    onSubmit={e => {
      e.preventDefault();
      props.update(addPlayerOccupation);
    }}
  >
    <radiogroup>
      {props.jobItems.map(jobItem => (
        <Label
          key={jobItem.id}
          style={{
            fontFamily: "'Source Code Pro', monospace",
            fontWeight: "700",
            fontSize: "20px"
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
      ))}
    </radiogroup>
    <button
      onClick={e => {
        e.preventDefault();
        props.update(newJobs);
      }}
      style={{
        fontFamily: "'Source Code Pro', monospace",
        fontSize: "17px",
        marginRight: "10px",
        marginTop: "10px",
        background: "none",
        border: "1px solid rgb(27, 29, 35)"
      }}
    >
      Regenerate Jobs
    </button>
    <button
      style={{
        fontFamily: "'Source Code Pro', monospace",
        fontSize: "17px",
        marginTop: "10px",
        background: "none",
        border: "1px solid rgb(27, 29, 35)"
      }}
    >
      Save
    </button>
  </form>
);

const map = state => ({
  playerOccupationRadio: state.playerOccupationRadio,
  jobItems: state.jobItems
});

export default connect(map)(JobSelectionComponent);
