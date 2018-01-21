import { Link } from "react-router-dom";
import React from "react";

import styled from "styled-components";

const container = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: rgba(225, 88, 70, 0.5);
  border: 1px solid rgba(225, 88, 70, 1);
`;

const DemoMode = () => (
  <div>
    <Link to={`/s01eWork`}>s01eWork</Link>
    <Link to={`/s02eTrain`}>s02eTrain</Link>
    <Link to={`/s03eSlashington`}>s03eSlashington</Link>
    <Link to={`/s04eTheCouncil`}>s04eTheCouncil</Link>
    <Link to={`/s05eSlashing2Washington`}>s05eSlashing2Washington</Link>
    <Link to={`/s06eBirthdayParty`}>s06eBirthdayParty</Link>
    <Link to={`/s07eGoodMessenger`}>s07eGoodMessenger</Link>
  </div>
);

export default DemoMode;
