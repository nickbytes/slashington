import { Link } from "react-router-dom";
import React from "react";

import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: rgba(225, 88, 70, 0.5);
  border: 1px solid rgba(225, 88, 70, 1);
  width: 175px;
  padding: 3px;
`;

const DevLink = styled(Link)`
  display: block;
`;

const DevTitle = styled.h1`
  font-size: 10px;
  line-height: 10px;
  margin: 0;
`;

const DemoMode = () => (
  <Container>
    <DevTitle>devtool</DevTitle>
    <DevLink to={`/the-office`}>The Office</DevLink>
    <DevLink to={`/train-ride`}>Train Ride</DevLink>
    <DevLink to={`/slashington`}>Slashington</DevLink>
    <DevLink to={`/the-council`}>The Council</DevLink>
    <DevLink to={`/to-washington`}>To Washington</DevLink>
    <DevLink to={`/birthday-party`}>Birthday Party</DevLink>
    <DevLink to={`/good-messenger`}>Good Messenger</DevLink>
  </Container>
);

export default DemoMode;
