import "vhs/css/vhs.min.css";

import React from "react";

import ChapterNumber from "./ChapterNumber";
import ChapterTitle from "./ChapterTitle";
import ModalContainer from "./ModalContainer";

const TitleModal = props => (
  <ModalContainer>
    <ChapterNumber className="vhs-flicker">{props.chapterNumber}</ChapterNumber>
    <ChapterTitle className="vhs-flicker">{props.chapterTitle}</ChapterTitle>
  </ModalContainer>
);

export default TitleModal;
