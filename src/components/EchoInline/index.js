import { T_FF } from "../../utilities/constants";

import React from "react";
import styled, { keyframes } from "styled-components";

const shake = keyframes`
  from {
    transform: translate(-2px, 0px);
  }

  to {
    transform: translate(2px, 0px);
  }
`;

const EchoContainer = styled.span`
  font-family: ${T_FF};
  font-weight: normal;
  font-size: inherit;
  line-height: inherit;
  max-width: 600px;
  display: inline-block;
  animation: ${shake} 0.5s linear infinite alternate;
`;

const EchoInline = ({ children }) => <EchoContainer>{children}</EchoContainer>;

export default EchoInline;
