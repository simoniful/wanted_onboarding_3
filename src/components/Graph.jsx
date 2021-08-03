import React from 'react';
import styled from 'styled-components';

const Graph = () => {
  return (
    <Container>
      <Title>그래프1</Title>
      <Title>그래프2</Title>
      <Title>그래프3</Title>
    </Container>
  );
};

const Container = styled.div``;

const Title = styled.h1`
  width: 100%;
  padding: 16px 0;
`;

export default Graph;
