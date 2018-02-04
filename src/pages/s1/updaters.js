import { createTitle } from "../../components/JobSelectionComponent/jobGenerator";

export const startBurning = state => {
  // probably a bad idea
  if (state.startBurning === true) {
    const blowTrees = Math.floor(Math.random() * 100) + 20;
    window.party.addsmoke(550, 400, blowTrees);
    return;
  }
  return {
    startBurning: true
  };
};

// saves currently inputted name value to global object
// this is temporary within the form
export const setNewPlayerName = value => state => ({ playerNameInput: value });

// sets the player name
// this is actually your name in the game state
export const addPlayerName = state => ({
  playerNameSaved: state.playerNameInput,
  // but also now hide the form and show the next bit
  s1: {
    c4: false,
    c5: true
  }
});

export const newJobs = state => ({
  jobItems: [
    {
      id: 1,
      title: createTitle()
    },
    {
      id: 2,
      title: createTitle()
    },
    {
      id: 3,
      title: createTitle()
    }
  ]
});

// saves currently selected radio group to global object
// this is temporary within the form
export const setNewPlayerOccupation = value => state => ({
  playerOccupationRadio: value
});

// sets player occupation
// this is actually your occuptation in game state
export const addPlayerOccupation = state => ({
  playerOccupationSaved: state.playerOccupationRadio,
  s1: {
    c7: false,
    c8: true
  }
});

export const nsHelper = state => ({
  s1: {
    c16: false,
    c17: true
  }
});

export const setNewPetOwner = value => state => ({ petOwnerInput: value });
export const setNewPetType = value => state => ({ petTypeInput: value });
export const setNewPetName = value => state => ({ petNameInput: value });

export const addSecurityAnswers = state => ({
  petOwnerInputSaved: state.petOwnerInput,
  petTypeInputSaved: state.petTypeInput,
  petNameInputSaved: state.petNameInput,
  securityFormShowing: false,
  askForPhoto: true
});
