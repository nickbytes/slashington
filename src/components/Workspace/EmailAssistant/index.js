import React from "react";
import styled from "styled-components";

import FlexContainer from "react-styled-flexbox";

const Container = styled.div`
  width: 600px;
  height: 450px;
  background-color: #fff;
  border: 4px double #295ac5;
  border-radius: 6px;
`;

const HeaderText = styled.h2`
  margin: 0;
  position: relative;
  border-bottom: 4px double #295ac5;
  padding: 10px 25px 10px 26px;
  font-size: 19px;
  line-height: 19px;
  font-weight: normal;

  &::before {
    content: "";
    position: absolute;
    left: 10px;
    top: 13px;
    width: 12px;
    height: 12px;
    border-radius: 100%;
    background-color: #c43a31;
  }
`;

const Sender = styled.h1`
  margin: 0;
  font-size: 15px;
  line-height: 15px;
  font-weight: normal;
  flex-basis: 175px;
`;

const Subject = styled.h2`
  margin: 0;
  font-size: 15px;
  line-height: 15px;
  font-weight: normal;
`;

const EachEmail = styled(FlexContainer)`
  border-bottom: 1px solid #abb2bf;
  padding: 10px 0 10px 35px;
  background-color: rgba(171, 178, 191, 0.2);
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 9px;
    left: 10px;
    width: 15px;
    height: 15px;
    border: 1px solid #abb2bf;
  }
`;

const EmailCount = styled.span`
  font-size: 12px;
  line-height: 12px;
  font-weight: normal;
  opacity: 0.75;
`;

const data = [
  {
    id: 1,
    sender: "Carl, HR",
    subject: "Have you ever heard the song Fast Car?"
  },
  {
    id: 2,
    sender: "Annette",
    subject: "Cybernetics in the Board Room"
  },
  {
    id: 3,
    sender: "Jerald",
    subject: "WIP we're going to need to redo this entire thing"
  },
  {
    id: 4,
    sender: "Carl, HR",
    subject: "You fucked up something on your tax forms."
  },
  {
    id: 5,
    sender: "Frank",
    subject: "Center For Consulting Therapy Open House"
  }
];

const EmailAssistant = () => (
  <Container>
    <div>
      <HeaderText>
        EmailAssistant <EmailCount>({data.length} new emails)</EmailCount>
      </HeaderText>
    </div>
    {data.map(email => (
      <EachEmail key={email.id} itemsCenter>
        <Sender>{email.sender}</Sender>
        <Subject>{email.subject}</Subject>
      </EachEmail>
    ))}
  </Container>
);

export default EmailAssistant;
