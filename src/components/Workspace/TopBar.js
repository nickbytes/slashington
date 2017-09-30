import styled from "styled-components";

const TopBar = styled.div`
  width: 100%;
  height: 27px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid black;
  z-index: 1;
  position: absolute;
  top: 0;
`;

export default TopBar;
