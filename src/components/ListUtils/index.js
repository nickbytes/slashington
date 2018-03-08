import styled, { css } from "styled-components";

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const complexMixin = css`
  transform: ${props =>
    props.tug
      ? `rotateZ(${props.rotate}deg) translateX(${props.tug}px)`
      : `rotate(${props.rotate}deg)`};
`;

export const ListItem = styled.li`
  margin: 0 0 15px;
  padding: 0;

  ${props => (props.rotate ? complexMixin : "")};
`;
