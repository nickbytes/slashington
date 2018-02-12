import React from "react";
import styled from "styled-components";

const IconText = styled.span`
  color: rgba(255, 255, 255, 0.7);
  padding-left: 20px;
  line-height: 1rem;
`;

const LeftBar = () => (
  <div>
    <span role="img" aria-label="crystal ball">
      🔮
    </span>
    <IconText>Computer</IconText>
  </div>
);

export default LeftBar;
