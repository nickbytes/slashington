import { Input } from "rebass";
import styled from "styled-components";

import { T_FF } from "../../utilities/constants";

const NewInput = styled(Input)`
  border: 0;
  border-bottom: 1px solid #000;
  font-family: ${T_FF};
  width: 300px;
  font-size: 22px;
  line-height: 26px;
  margin-bottom: 40px;
  display: block;
  border-radius: 0;
`;

export default NewInput;
