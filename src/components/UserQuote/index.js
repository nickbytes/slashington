import { Blockquote } from "rebass";
import React from "react";
import styled from "styled-components";

import { T_FF, T_FF_SYS } from "../../utilities/constants";

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

  code {
    background-color: #000;
    text-transform: uppercase;
    font-family: ${T_FF_SYS};
    color: #fff;
    padding: 11px;
    border-radius: 4px;
    font-size: 13px;
    line-height: 13px;
    display: inline-block;
    height: 14px;
    width: 14px;
    text-align: center;
  }
`;

const UserQuote = ({ attrib, children, paragraph }) => (
  <UserQuoteContainer>
    {paragraph ? null : <AttribStyle>{attrib ? attrib : "Person"}</AttribStyle>}
    <TextStyle>{children}</TextStyle>
  </UserQuoteContainer>
);

export default UserQuote;
