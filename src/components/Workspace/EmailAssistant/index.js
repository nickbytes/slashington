import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 400px;
  height: 450px;
  background-color: #fff;
  border: 1px solid #abaea0;
`;

const HeaderText = styled.h2`
  margin: 0;
  position: relative;
  padding-left: 25px;
  border-bottom: 1px solid #abaea0;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 5px;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: #c43a31;
  }
`;

const EmailAssistant = () => (
  <Container>
    <div>
      <HeaderText>EmailAssistant</HeaderText>
    </div>
    <div>
      <h1>Something car</h1>
      <p>Have you ever heard the song fast car?</p>
    </div>
  </Container>
);

export default EmailAssistant;
