import { Blockquote } from "rebass";
import React from "react";
import styled from "styled-components";

const UserQuoteContainer = styled(Blockquote)`
  font-family: "Source Code Pro", monospace;
  max-width: 700px;
  margin-bottom: 44px;
`;

const AttribStyle = styled.h5`
  margin: 0 0 2px;
  font-size: 11px;
  line-height: 11px;
  color: blue;
  font-weight: normal;
`;

const UserQuote = ({ attrib, children }) => (
  <UserQuoteContainer>
    <AttribStyle>{attrib ? attrib : "Person"}</AttribStyle>
    <div>{children}</div>
  </UserQuoteContainer>
);

export default UserQuote;
