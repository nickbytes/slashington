import React from "react";
import styled from "styled-components";

const NextButtonStyle = styled.button`
  border: none;
  background-color: transparent;
`;

const NextButton = props => (
  <NextButtonStyle onClick={props.onClick}>→</NextButtonStyle>
);

export default NextButton;
