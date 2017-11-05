import styled from "styled-components";

const MapCircle = styled.div`
  border-radius: 50%;
  background: rgba(255, 255, 255, 1);
  border: 7px solid rgba(0, 0, 0, 1);
  width: 30px;
  height: 30px;
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
`;

export default MapCircle;
