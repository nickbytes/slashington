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

const EchoContainer = styled.span`
  font-family: ${T_FF};
  font-weight: normal;
  font-size: 22px;
  line-height: 26px;
  max-width: 600px;
  animation: ${shake} 0.1s linear infinite;
`;

const EchoInline = ({ children }) => <EchoContainer>{children}</EchoContainer>;

export default EchoInline;
