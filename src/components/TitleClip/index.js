import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #000;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Chapter = styled.h2`
  color: #fff;
  font-size: 22px;
  line-height: 26px;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 62px;
  line-height: 72px;
`;

const TitleClip = ({ title, ch, children }) => (
  <Container>
    <Chapter>{ch}</Chapter>
    <Title>{title}</Title>
    {children}
  </Container>
);

export default TitleClip;
