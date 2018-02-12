import styled from "styled-components";

import { T_FF_SYS } from "../../utilities/constants";

const WorkspaceContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  margin: 0;

  & > * {
    font-family: ${T_FF_SYS};
  }
`;

export default WorkspaceContainer;
