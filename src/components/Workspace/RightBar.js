import React from "react";
import styled from "styled-components";

import { nsHelper } from "../../pages/s1/updaters";

const Container = styled.div`
  padding-right: 15px;
  display: flex;
  align-items: center;
`;

const NoButton = styled.button`
  font-weight: inherit;
  font-size: inherit;
  line-height: inherit;
  border: none;
  background: none;
  cursor: pointer;
  outline: 0;
  padding: 0;
  margin: 0;
`;

const Time = styled.time`
  font-weight: 700px;
  margin: 0;
  padding: 0;
  color: #fff;
  font-size: 14px;
  line-height: 14px;
  opacity: 0.7;
`;

const RightBar = props => (
  <Container>
    <span
      style={{
        paddingRight: "10px"
      }}
    >
      {props.coffee && (
        <NoButton onClick={e => props.update(nsHelper)}>
          <span role="img" aria-label="coffee">
            ☕️
          </span>
        </NoButton>
      )}
    </span>
    <span
      style={{
        paddingRight: "10px"
      }}
    >
      <span role="img" aria-label="seedling">
        🌱
      </span>
    </span>
    <Time>12:34</Time>
  </Container>
);

export default RightBar;
