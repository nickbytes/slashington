import React from "react";
import styled from "styled-components";
import galaxy from "../../../images/galaxy.png";
import creme from "../../../images/creme.jpg";

const SpaceContainer = styled.div`
  border: 1px dotted rgba(255, 255, 255, 0.5);
  width: 90px;
  height: 90px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SpaceImg = styled.img`
  width: 80px;
  max-width: 100%;
`;

const SpaceText = styled.h1`
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: 0.5rem;
  color: rgba(255, 255, 255, 1);
  text-shadow: 1px 1px 2px black;
  letter-spacing: 1px;
`;

const Container = styled.div`
  position: absolute;
  top: 50px;
  right: 20px;
`;

const Programs = () => (
  <Container>
    <SpaceContainer>
      <SpaceImg src={galaxy} alt={"Space"} />
      <SpaceText>Space</SpaceText>
    </SpaceContainer>

    <SpaceContainer>
      <SpaceImg src={creme} alt={"Creme Soda Blog"} />
      <SpaceText>Creme Soda Blog</SpaceText>
    </SpaceContainer>
  </Container>
);

export default Programs;
