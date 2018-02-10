import { Blockquote } from "rebass";
import React from "react";
import styled from "styled-components";

import { T_FF } from "../../utilities/constants";

const UserQuoteContainer = styled(Blockquote)`
  font-family: ${T_FF};
  max-width: 700px;
  margin-bottom: 44px;
`;

const Text = styled.h3`
  font-size: 36px;
  line-height: 36px;
`;

const ThoughtQuote = ({ children }) => (
  <UserQuoteContainer>
    <Text>{children}</Text>
  </UserQuoteContainer>
);

export default ThoughtQuote;
