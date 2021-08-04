import React from 'react';
import styled from 'styled-components';
import BarGraph from './grpah/BarGraph';
import { color } from '../styles/styles';

const Graph = () => {
  return (
    <Container>
      {/* <Line data={data} legend={legend} options={options} /> */}

      <GraphContainer>
        <GraphTitle>권한 분포</GraphTitle>
        <BarGraph />
      </GraphContainer>
      <GraphContainer>
        <GraphTitle>나이 분포</GraphTitle>
      </GraphContainer>
      <GraphContainer>
        <GraphTitle>주소 분포</GraphTitle>
      </GraphContainer>
    </Container>
  );
};

const Container = styled.div``;

const GraphContainer = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 6px;
  background-color: #ececec;
  margin-bottom: 40px;
  background: ${color.white};
  color: ${color.greyDarker};
  border-bottom: 1px solid ${color.greyLighter};
  border-right: 1px solid ${color.greyLighter};
  border-radius: 3px;
`;

const GraphTitle = styled.div`
  padding: 10px 0;
  background: ${color.primaryDarker};
`;

export default Graph;
