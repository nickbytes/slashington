import React from "react";
import styled from "styled-components";

const SimpleContainer = styled.div`
  margin: 40px;
`;

const SimpleScene = ({ isVisible, children }) => (
  <div>{isVisible && <SimpleContainer>{children}</SimpleContainer>}</div>
);

export default SimpleScene;
