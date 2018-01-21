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
    <DevLink to={`/s01eWork`}>s01eWork</DevLink>
    <DevLink to={`/s02eTrain`}>s02eTrain</DevLink>
    <DevLink to={`/s03eSlashington`}>s03eSlashington</DevLink>
    <DevLink to={`/s04eTheCouncil`}>s04eTheCouncil</DevLink>
    <DevLink to={`/s05eSlashing2Washington`}>s05eSlashing2Washington</DevLink>
    <DevLink to={`/s06eBirthdayParty`}>s06eBirthdayParty</DevLink>
    <DevLink to={`/s07eGoodMessenger`}>s07eGoodMessenger</DevLink>
  </Container>
);

export default DemoMode;
