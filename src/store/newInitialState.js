import { createTitle } from "../components/JobSelectionComponent/jobGenerator";

const newInitialState = {
  // s1
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
  scottShowing: false,
  scottDescribed: false,
  nOrB: false,
  sameThing: false,
  herBirthday: false,
  coincidence: false,

  // s2
  s2: {
    c1: true,
    c2: false,
    c3: false,
    c4: false,
    c5: false,
    c6: false,
    c7: false,
    c8: false,
    c9: false,
    c10: false,
    c11: false,
    c12: false,
    c13: false,
    c14: false,
    c15: false
  },

  // s3
  s3: {
    c1: true,
    c2: false,
    c3: false,
    c4: false,
    c5: false
  },

  // s4
  s4: {
    c1: true,
    c2: false,
    c3: false,
    c4: false,
    c5: false,
    c6: false,
    c7: false,
    c8: false,
    c9: false,
    c10: false,
    c11: false,
    c12: false,
    c13: false
  },

  // s5
  s5: {
    c1: true,
    c2: false,
    c3: false,
    c4: false,
    c5: false,
    c6: false,
    c7: false,
    c8: false,
    c9: false,
    c10: false,
    c11: false,
    c12: false
  },

  // s6
  s6: {
    c1: true,
    c2: false,
    c3: false,
    c4: false,
    c5: false,
    c6: false,
    c7: false,
    c8: false,
    c9: false,
    c10: false,
    c11: false,
    c12: false,
    c13: false,
    c14: false,
    c15: false,
    c16: false,
    c17: false
  },

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
