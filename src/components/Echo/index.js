import { T_FF } from "../../utilities/constants";

import React from "react";
import styled, { keyframes } from "styled-components";

const shake = keyframes`
  from {
    transform: translate(-1px, 0px);
  }

  to {
    transform: translate(1px, 0px);
  }
`;

const EchoContainer = styled.h3`
  font-family: ${T_FF};
  font-weight: normal;
  font-size: 22px;
  line-height: 26px;
  animation: ${shake} 0.1s linear infinite;
`;

const Echo = ({ children }) => <EchoContainer>{children}</EchoContainer>;

export default Echo;
