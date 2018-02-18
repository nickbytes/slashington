import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 0 0 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const IconText = styled.span`
  color: rgba(255, 255, 255, 0.7);
  padding-left: 10px;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
`;

const LeftBar = () => (
  <Container>
    <span role="img" aria-label="crystal ball">
      🔮
    </span>
    <IconText>Computer</IconText>
  </Container>
);

export default LeftBar;
