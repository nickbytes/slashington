import React from "react";
import styled from "styled-components";

const SimpleContainer = styled.div`
  border: 1px solid black;
  margin: 40px;
  /* below is doing nothing currently */
  transition: all 0.2s ease;
`;

const SimpleScene = ({ isVisible, children }) => (
  <div>{isVisible && <SimpleContainer>{children}</SimpleContainer>}</div>
);

export default SimpleScene;
