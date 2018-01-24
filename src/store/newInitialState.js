import { createTitle } from "../components/JobSelectionComponent/jobGenerator";

const newInitialState = {
  // s01eWork
  initialBlock: true,
  startBurning: false,
  receptionistVisible: false,
  nameQuestionVisible: false,
  playerNameInput: "",
  playerNameSaved: "",
  nameFormVisible: false,
  nameAnswerVisible: false,
  positionQuestionVisible: false,
  positionFormVisible: false,
  playerOccupationSaved: "",
  playerOccupationFinished: false,
  playerOccupationRadio: "",
  occupationAnswerCompleted: false,
  nearlySpit: false,
  questionAskForm: false,
  securityFormShowing: false,
  petOwnerInput: "",
  petTypeInput: "",
  petNameInput: "",
  petOwnerInputSaved: "",
  petTypeInputSaved: "",
  petNameInputSaved: "",
  askForPhoto: false,
  webcamVisible: false,
  arrivedAtDesk: false,
  firstWorkspace: false,
  grabCoffee: false,
  phoneVisible: false,
  phoneCallOver: false,
  showFeelsDreamlike: false,
  secondWorkspace: false,
  computerBroken: false,

  // s02e

  // s03e

  // s04e

  // s05e

  // s06e

  // global
  nieceName: "Emma",
  inLawName: "Jill",
  preferredTitle: "",
  coworkerName: "Scott",

  // global jobItems
  jobItems: [
    { id: 1, title: createTitle() },
    { id: 2, title: createTitle() },
    { id: 3, title: createTitle() }
  ]
};

export default newInitialState;
