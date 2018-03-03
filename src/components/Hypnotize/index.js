import React from "react";

import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #000;
`;

const PinkContainer = styled.div`
  border: 3px double #fff;
  width: 300px;
  height: 400px;
  background-color: #fe4d87;
  border-radius: 6px;
  position: absolute;
  left: 10%;
  top: 10%;
  padding: 25px;
`;

const PoemText = styled.p`
  color: #fff;
  font-style: italic;
  margin: 0 0 15px;
`;

const Hypnotize = () => (
  <Container>
    <div>
      <h1>Something</h1>
    </div>

    <PinkContainer>
      <PoemText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </PoemText>
      <PoemText>
        Duis aute irure dolor in reprehenderit in voluptate velit
      </PoemText>
    </PinkContainer>
  </Container>
);

export default Hypnotize;
