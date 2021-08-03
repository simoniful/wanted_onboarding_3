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

const Title = styled.div`
  width: 100%;
  height: 100px;
  border-radius: 6px;
  background-color: #ececec;
  margin-bottom: 10px;
`;

export default Graph;
