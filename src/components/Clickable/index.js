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
  background-color: #c1c1c1;
  outline: 0;
`;

const Clickable = ({ clickFn, children }) => (
  <Button onClick={clickFn}>{children}</Button>
);

export default Clickable;
