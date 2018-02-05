import React from "react";
import styled from "styled-components";

const NextButtonStyle = styled.button`
  border: none;
  background-color: transparent;
  font-size: 64px;
  line-height: 64px;
  padding: 20px;
  margin-left: -20px;
  cursor: pointer;
`;

const NextButton = props => (
  <NextButtonStyle onClick={props.onClick}>→</NextButtonStyle>
);

export default NextButton;
