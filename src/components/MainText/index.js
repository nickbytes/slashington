import { Text } from "rebass";
import styled from "styled-components";

import { T_FF } from "../../utilities/constants";

const MainText = styled(Text)`
  font-family: ${T_FF};
  font-size: 19px;
  line-height: 23px;
  max-width: 600px;
  margin-bottom: 44px;
`;

export default MainText;
