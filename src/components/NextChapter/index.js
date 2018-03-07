import React from "react";
import styled from "styled-components";

const NextChapterStyled = styled(Link)`
  font-weight: normal;
  font-size: 26px;
  line-height: 26px;
  padding: 20px;
  margin-left: -20px;
  color: #000;
  cursor: pointer;
`;

const NextChapter = ({ to }) => (
  <NextChapterStyled to={to}>☞</NextChapterStyled>
);

export default NextChapter;
