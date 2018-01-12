import React from "react";
import styled from "styled-components";

const SimpleContainer = styled.div`
  margin: 40px;
`;

//TODO this probalby should be wrapped with a scrollToTop component...?
// rather than the actual route, which are no longer long
const SimpleScene = ({ isVisible, children }) => (
  <div>{isVisible && <SimpleContainer>{children}</SimpleContainer>}</div>
);

export default SimpleScene;
