import styled from "styled-components";

const PlainButton = styled.button`
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  border: none;
  border-bottom: 2px solid black;
  background-color: transparent;
  cursor: pointer;
  padding: 0 1px;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(0, 127, 233, 0.5);
  }
`;

export default PlainButton;
