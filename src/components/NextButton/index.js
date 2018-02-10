import React from "react";
import styled from "styled-components";

import { T_FF } from "../../utilities/constants";

const NextButtonStyle = styled.button`
  border: none;
  background-color: transparent;
  font-family: ${T_FF};
  color: #000;
  font-weight: normal;
  font-size: 26px;
  line-height: 26px;
  padding: 20px;
  margin-left: -20px;
  cursor: pointer;
  outline: 0;
`;

const NextButton = props => (
  <NextButtonStyle onClick={props.onClick}>☞</NextButtonStyle>
);

export default NextButton;
