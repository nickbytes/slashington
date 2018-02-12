import React from "react";
import styled from "styled-components";

import { nsHelper } from "../../pages/s1/updaters";

const Container = styled.div`
  padding-right: 15px;
`;

const NoButton = styled.button`
  font-weight: inherit;
  font-size: inherit;
  line-height: inherit;
  border: none;
  background: none;
  cursor: pointer;
  outline: 0;
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
    <time style={{ color: "white" }}>12:34</time>
  </Container>
);

export default RightBar;
