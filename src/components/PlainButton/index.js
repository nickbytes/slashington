import styled from "styled-components";

import { T_FF } from "../../utilities/constants";

const PlainButton = styled.button`
  font-family: ${T_FF};
  font-weight: normal;
  font-size: 19px;
  line-height: 23px;
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
