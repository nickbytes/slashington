import styled, { keyframes } from "styled-components";

const blinkAnimation = keyframes`
	50% { opacity: 0; }
`;

const Blinking = styled.span`
  display: inline-block;
  animation: ${blinkAnimation} 1s infinite;
  width: 1px;
  height: 18px;
  margin-bottom: -2px;
  background-color: black;
`;

export default Blinking;
