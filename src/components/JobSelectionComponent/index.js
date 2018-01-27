import { Radio } from "rebass";
import { connect } from "funcup";
import React from "react";

import {
  addPlayerOccupation,
  newJobs,
  setNewPlayerOccupation
} from "../../pages/s01eWork/updaters";
import JobButton from "./JobButton";
import JobLabel from "./JobLabel";

const JobSelectionComponent = props => (
  <form
    onSubmit={e => {
      e.preventDefault();
      props.update(addPlayerOccupation);
    }}
  >
    <radiogroup>
      {props.jobItems.map(jobItem => (
        <JobLabel key={jobItem.id}>
          <Radio
            name="radio"
            value={jobItem.title}
            checked={jobItem.title === props.playerOccupationRadio}
            onChange={e => props.update(setNewPlayerOccupation(e.target.value))}
          />
          {jobItem.title}
        </JobLabel>
      ))}
    </radiogroup>
    <JobButton
      onClick={e => {
        e.preventDefault();
        props.update(newJobs);
      }}
    >
      Regenerate Jobs
    </JobButton>
    <JobButton>Save</JobButton>
  </form>
);

const map = state => ({
  playerOccupationRadio: state.playerOccupationRadio,
  jobItems: state.jobItems
});

export default connect(map)(JobSelectionComponent);
