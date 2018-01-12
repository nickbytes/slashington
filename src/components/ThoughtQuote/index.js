import { Blockquote } from "rebass";
import React from "react";
import styled from "styled-components";

const UserQuoteContainer = styled(Blockquote)`
  font-family: "Source Code Pro", monospace;
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
