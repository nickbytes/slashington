import { Input } from "rebass";
import styled from "styled-components";

import { T_FF } from "../../utilities/constants";

const PetFormInput = styled(Input)`
  border: 0;
  font-family: ${T_FF};
  width: 300px;
  font-size: 20px;
  line-height: 20px;
  display: block;
  margin: 0;
  padding: 0 0 45px;
`;

export default PetFormInput;
