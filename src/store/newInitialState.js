import { createTitle } from "../components/JobSelectionComponent/jobGenerator";

const newInitialState = {
  // s01eWork
  initialBlock: true,
  receptionistVisible: false,
  nameQuestionVisible: false,
  nameFormVisible: false,
  nameAnswerVisible: false,
  positionQuestionVisible: false,
  positionFormVisible: false,
  occupationAnswerCompleted: false,

  // s02e

  // s03e

  // s04e

  // s05e

  // s06e

  // global
  nieceName: "Emma",
  inLawName: "Jill",
  preferredTitle: "",

  // global jobItems
  jobItems: [
    { id: 1, title: createTitle() },
    { id: 2, title: createTitle() },
    { id: 3, title: createTitle() }
  ]
};

export default newInitialState;
