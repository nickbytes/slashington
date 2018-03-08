import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

const NextChapterStyled = styled(Link)`
  font-weight: normal;
  font-size: 38px;
  line-height: 38px;
  padding: 20px;
  margin-left: -20px;
  color: #000;
  cursor: pointer;
  text-decoration: none;
`;

const NextChapter = ({ to }) => (
  <NextChapterStyled to={to}>☞</NextChapterStyled>
);

export default NextChapter;
