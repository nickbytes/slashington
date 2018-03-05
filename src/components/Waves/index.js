import React from "react";
import styled from "styled-components";

import waves from "../../images/s2/waves.gif";

const Img = styled.img`
  width: 100%;
  max-width: 600px;
  display: block;
  align-self: flex-start;
  margin-bottom: 25px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Waves = () => (
  <Container>
    <Img src={waves} alt="This is relaxing" />
  </Container>
);

export default Waves;
