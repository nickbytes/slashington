import styled, { keyframes } from "styled-components";

const fadeAnimation = keyframes`
	from {
		opacity: 1;
		display: flex;
		visibility: visible;
	}

	to {
		opacity: 0;
		visibility: hidden;
		display: none;
	}
`;

const ModalContainer = styled.div`
  animation: ${fadeAnimation} 3.5s;
  animation-delay: 2s;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 20;
  background-color: rgb(41, 41, 41);
  color: rgb(255, 255, 231);

  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default ModalContainer;
