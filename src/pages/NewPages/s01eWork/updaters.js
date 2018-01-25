import { createTitle } from "../../../components/JobSelectionComponent/jobGenerator";

export const showReceptionist = state => ({
  initialBlock: false,
  receptionistVisible: true
});

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

export const showNameQuestion = state => ({
  receptionistVisible: false,
  nameQuestionVisible: true
});

export const showPlayerNameField = state => ({
  nameQuestionVisible: false,
  nameFormVisible: true
});

// saves currently inputted name value to global object
// this is temporary within the form
export const setNewPlayerName = value => state => ({ playerNameInput: value });

// sets the player name
// this is actually your name in the game state
export const addPlayerName = state => ({
  playerNameSaved: state.playerNameInput,
  // but also now hide the form and show the next bit
  nameFormVisible: false,
  nameAnswerVisible: true
});

export const showPlayerJobQuestion = state => ({
  nameAnswerVisible: false,
  positionQuestionVisible: true
});

export const showPositionForm = state => ({
  positionQuestionVisible: false,
  positionFormVisible: true
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
  positionFormVisible: false,
  playerOccupationFinished: true
});

export const showReceptionistSecurityAsk = state => ({
  playerOccupationFinished: false,
  occupationAnswerCompleted: true
});

export const showNearlySpit = state => ({
  occupationAnswerCompleted: false,
  nearlySpit: true
});

export const showQuestionAskForm = state => ({
  nearlySpit: false,
  questionAskForm: true
});

export const showSecurityForm = state => ({
  questionAskForm: false,
  securityFormShowing: true
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

export const showAskForPhoto = state => ({
  occupationAnswerCompleted: false,
  askForPhoto: true
});

export const showWebcam = state => ({
  askForPhoto: false,
  webcamVisible: true
});

export const hideBadge = state => ({
  webcamVisible: false,
  arrivedAtDesk: true
});

export const showFirstWorkspace = state => ({
  arrivedAtDesk: false,
  firstWorkspace: true
});

export const showGrabCoffee = state => ({
  firstWorkspace: false,
  grabCoffee: true
});

export const showPhone = state => ({
  grabCoffee: false,
  phoneVisible: true
});

export const showPhoneCallOver = state => ({
  phoneVisible: false,
  phoneCallOver: true
});

export const feelDreamlike = state => ({
  phoneCallOver: false,
  showFeelsDreamlike: true
});

export const showSecondWorkspace = state => ({
  showFeelsDreamlike: false,
  secondWorkspace: true
});

export const showBrokenText = state => ({
  secondWorkspace: false,
  computerBroken: true
});

export const showScott = state => ({
  computerBroken: false,
  scottShowing: true
});

export const describeScott = state => ({
  scottShowing: false,
  scottDescribed: true
});

export const explainYourself = state => ({
  scottDescribed: false,
  nOrB: true
});

export const saySameThing = state => ({
  nOrB: false,
  sameThing: true
});

export const sayBirthday = state => ({
  sameThing: false,
  herBirthday: true
});

export const sayCoincidence = state => ({
  herBirthday: false,
  coincidence: true
});
