import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

const NextChapterStyled = styled(Link)`
  font-weight: normal;
  font-size: 38px;
  line-height: 38px;
  padding: 20px;
  margin-left: -20px;
  color: ${props => (props.white ? "#fff" : "#000")};
  cursor: pointer;
  text-decoration: none;
  font-style: normal;
`;

const NextChapter = ({ to, white }) => (
  <NextChapterStyled white={white} to={to}>
    ☞
  </NextChapterStyled>
);

export default NextChapter;
