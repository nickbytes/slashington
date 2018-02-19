import React from "react";
import styled from "styled-components";

import wavesss from "../../images/wavesss.gif";
import waves2 from "../../images/waves2.gif";

const Img = styled.img`
  width: 100%;
  max-width: 500px;
  display: block;
  align-self: flex-start;
`;

const Img2 = styled.img`
  width: 100%;
  max-width: 500px;
  display: block;
  align-self: flex-end;
  transform: translateY(-50px) translateX(-200px);
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Waves = () => (
  <Container>
    <Img
      src={wavesss}
      alt="This is relaxing"
      style={{ width: "100%", maxWidth: "500px" }}
    />

    <Img2
      src={waves2}
      alt="This is relaxing"
      style={{ width: "100%", maxWidth: "500px" }}
    />
  </Container>
);

export default Waves;
