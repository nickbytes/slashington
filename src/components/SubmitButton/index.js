import React from "react";
import styled from "styled-components";

import { T_FF } from "../../utilities/constants";

const Button = styled.button`
  border: none;
  background-color: transparent;
  font-family: ${T_FF};
  font-size: 22px;
  line-height: 26px;
`;

const SubmitButton = () => <Button>Submit</Button>;

export default SubmitButton;
