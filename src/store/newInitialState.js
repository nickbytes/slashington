import { createTitle } from "../components/JobSelectionComponent/jobGenerator";

const newInitialState = {
  // s1
  s1: {
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
    c17: false,
    c18: false
  },

  startBurning: false,
  playerNameInput: "",
  playerNameSaved: "",
  playerOccupationSaved: "",
  playerOccupationRadio: "",
  petOwnerInput: "",
  petTypeInput: "",
  petNameInput: "",
  petOwnerInputSaved: "",
  petTypeInputSaved: "",
  petNameInputSaved: "",
  newBadgeReceived: false,

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
    c15: false,
    c16: false,
    c17: false,
    c18: false,
    c19: false,
    c20: false,
    c21: false,
    c22: false,
    c23: false,
    c24: false,
    c25: false,
    c26: false,
    c27: false,
    c28: false
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
  reactedAngry: false,
  reactedNod: false,

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
    c17: false,
    c18: false,
    c19: false,
    c20: false
  },
  taskTaken: false,
  roleFulfilled: false,

  // global
  nieceName: "Emma",
  inLawName: "Jill",
  coworkerName: "Dempsey",
  leadPet: "Igglefort",
  petTwo: "Najj",
  petThree: "Barringzen",
  petFour: "Tapien",

  // global jobItems
  jobItems: [
    { id: 1, title: createTitle() },
    { id: 2, title: createTitle() },
    { id: 3, title: createTitle() }
  ]
};

export default newInitialState;
