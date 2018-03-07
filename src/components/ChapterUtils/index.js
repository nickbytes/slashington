import React from "react";
import styled from "styled-components";

import { T_FF } from "../../utilities/constants";

export const AbsoluteBlack = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #000;
  z-index: -1;
`;

export const ChapterNum = styled.h1`
  color: #fff;
  font-size: 19px;
  line-height: 23px;
  margin: 0 0 5px;
  font-weight: normal;
`;

export const ChapterTitle = styled.h1`
  color: #fff;
  font-size: 80px;
  line-height: 92px;
  margin: 0 0 55px;
`;

const NextButtonStyle = styled.button`
  border: none;
  background-color: transparent;
  font-family: ${T_FF};
  color: #fff;
  font-weight: normal;
  font-size: 26px;
  line-height: 26px;
  padding: 20px;
  margin-left: -20px;
  cursor: pointer;
  outline: 0;
`;

export const ChapterNext = props => (
  <NextButtonStyle onClick={props.onClick}>☞</NextButtonStyle>
);
