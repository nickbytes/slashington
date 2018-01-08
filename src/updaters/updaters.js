// eslint-disable-next-line
/* global party */

import { createTitle } from "../components/JobSelectionComponent/jobGenerator";

// export const showPlayerNameField = state => ({ playerNameVisible: true });
//
// export const hidePlayerNameField = state => ({ playerNameVisible: false });
//
// export const showPlayerOccupationField = state => ({
//   playerOccupationVisible: true
// });
//
// export const hidePlayerOccupationField = state => ({
//   playerOccupationVisible: false
// });

// export const startBurning = state => {
//   // probably a bad idea
//   if (state.startBurning === true) {
//     const blowTrees = Math.floor(Math.random() * 100) + 20;
//     window.party.addsmoke(550, 400, blowTrees);
//     return;
//   }
//   return {
//     startBurning: true
//   };
// };

// saves currently inputted name value to global object
// this is temporary within the form
// export const setNewPlayerName = value => state => ({ playerNameInput: value });

// sets the player name
// this is actually your name in the game state
// export const addPlayerName = state => ({
//   playerNameSaved: state.playerNameInput
// });

// saves currently selected radio group to global object
// this is temporary within the form
// export const setNewPlayerOccupation = value => state => ({
//   playerOccupationRadio: value
// });
//
// // sets player occupation
// // this is actually your occuptation in game state
// export const addPlayerOccupation = state => ({
//   playerOccupationSaved: state.playerOccupationRadio,
//   playerOccupationFinished: true
// });

export const turnOnComputer = state => ({
  workspaceVisible: true
});

// export const setNewPetOwner = value => state => ({ petOwnerInput: value });
// export const setNewPetType = value => state => ({ petTypeInput: value });
// export const setNewPetName = value => state => ({ petNameInput: value });
//
// export const addSecurityAnswers = state => ({
//   petOwnerInputSaved: state.petOwnerInput,
//   petTypeInputSaved: state.petTypeInput,
//   petNameInputSaved: state.petNameInput,
//   securityQuestionsAnswered: true
// });

export const receiveBadge = state => ({
  newBadgeReceived: true
});

export const reactAngrily = state => ({ reactAngrily: true });
export const easyNod = state => ({ easyNod: true });
export const coffeeClicked = state => ({
  coffeeClicked: true,
  workspaceVisible: false
});

// export const newJobs = state => ({
//   jobItems: [
//     {
//       id: 1,
//       title: createTitle()
//     },
//     {
//       id: 2,
//       title: createTitle()
//     },
//     {
//       id: 3,
//       title: createTitle()
//     }
//   ]
// });

export const showWaves = state => ({
  wavesVisible: true
});

export const showPhone = state => ({
  phoneVisible: true
});

export const hidePhone = state => ({
  phoneVisible: false,
  voicemailDone: true
});

export const restartWork = state => ({
  restartingWork: true
});

export const scottArrives = state => ({
  scottAtDesk: true,
  restartingWork: false
});

// testing
// testing
export const testingFun = state => ({
  somethingFun: true
});

export const testingSmaller = state => ({
  somethingElse: true
});

export const testingNext = state => ({
  somethingFun: false,
  somethingMore: true
});
