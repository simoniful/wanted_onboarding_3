import React from 'react';
import styled from 'styled-components';
import { color } from '../styles/styles';
import BarChart from './graph/BarChart';
import LineChart from './graph/LineChart';

const Chart = () => {
  return (
    <ChartContainer>
      <ChartBox>
        <ChartTitle>권한 분포</ChartTitle>
        <BarChart />
      </ChartBox>
      <ChartBox>
        <ChartTitle>나이 분포</ChartTitle>
        <LineChart />
      </ChartBox>
      <ChartBox>
        <ChartTitle>주소 분포</ChartTitle>
      </ChartBox>
    </ChartContainer>
  );
};

const ChartContainer = styled.div``;

const ChartBox = styled.div`
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

const ChartTitle = styled.div`
  padding: 10px 0;
  background: ${color.primaryDarker};
`;

export default Chart;
