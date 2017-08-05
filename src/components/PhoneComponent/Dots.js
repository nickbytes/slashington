import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
	from {
		transform: rotate(0deg);
    top: ${props => props.top};
    left: ${props => props.left};
	}

	to {
		transform: rotate(360deg);
    top: ${props => props.animationTop};
    left: ${props => props.animationLeft};
	}
`;

const Dots = styled.span`
  top: ${props => props.top};
  left: ${props => props.left};
  animation: ${rotate360} 2s linear infinite alternate;
  width: 4px;
  height: 4px;
  background-color: rgb(215, 218, 224);
`;

export default Dots;
