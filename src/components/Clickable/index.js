import React from "react";
import styled from "styled-components";

import { T_FF } from "../../utilities/constants";

const Button = styled.button`
  font-family: ${T_FF};
  font-weight: inherit;
  font-size: inherit;
  line-height: inherit;
  cursor: pointer;
  border: none;
  background-color: ${props =>
    props.bgColor ? `${props.bgColor}` : "#c1c1c1"};
  outline: 0;
  padding-left: ${props => (props.px ? `${props.px}px` : "0")};
  padding-right: ${props => (props.px ? `${props.px}px` : "0")};
  padding-top: ${props => (props.py ? `${props.py}px` : "0")};
  padding-bottom: ${props => (props.py ? `${props.py}px` : "0")};

  &:active {
    color: inherit;
  }
`;

const Clickable = ({ clickFn, children, py, px, bgColor }) => (
  <Button py={py} px={px} onClick={clickFn} bgColor={bgColor}>
    {children}
  </Button>
);

export default Clickable;
