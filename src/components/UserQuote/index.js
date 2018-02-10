import { Blockquote } from "rebass";
import React from "react";
import styled from "styled-components";

import { T_FF } from "../../utilities/constants";

const UserQuoteContainer = styled(Blockquote)`
  font-family: ${T_FF};
  max-width: 600px;
  margin-bottom: 44px;
`;

const AttribStyle = styled.h5`
  margin: 0 0 2px;
  font-size: 16px;
  line-height: 16px;
  color: #000;
  font-weight: normal;
`;

const TextStyle = styled.h3`
  font-family: ${T_FF};
  font-size: 25px;
  line-height: 29px;
  font-weight: normal;
  margin: 0;
`;

const UserQuote = ({ attrib, children, paragraph }) => (
  <UserQuoteContainer>
    {paragraph ? null : <AttribStyle>{attrib ? attrib : "Person"}</AttribStyle>}
    <TextStyle>{children}</TextStyle>
  </UserQuoteContainer>
);

export default UserQuote;
