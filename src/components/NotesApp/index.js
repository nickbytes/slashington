import React from "react";

import NotesContainer from "./NotesContainer";
import NotesTopBar from "./NotesTopBar";

const NotesApp = props => (
  <NotesContainer>
    <NotesTopBar>
      <h1>Notes</h1>
    </NotesTopBar>
    <div>
      <ul>
        <li>Research system dynamics</li>
        <li>Review Ethical Investments from Frontier Imaginaries</li>
        <li>Process emulation fever dream, due EOD.</li>
        <li>Military cybernetics?!?!</li>
        <li>4, 8, 15, 16, 23, 42</li>
      </ul>
    </div>
  </NotesContainer>
);

export default NotesApp;
