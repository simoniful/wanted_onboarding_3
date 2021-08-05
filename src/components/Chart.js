import React from 'react';
import styled from 'styled-components';
import { COLOR_STYLES } from '../styles/styles';
import BarChart from './chart/BarChart';
import LineChart from './chart/LineChart';
import DoughnutChart from './chart/DoughnutChart';

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
        <DoughnutChart />
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
  background: ${COLOR_STYLES.white};
  color: ${COLOR_STYLES.white};
  border-bottom: 1px solid ${COLOR_STYLES.greyLighter};
  border-right: 1px solid ${COLOR_STYLES.greyLighter};
  border-radius: 3px;
  
`;

const ChartTitle = styled.div`
  padding: 10px 0;
  background: ${COLOR_STYLES.primaryDarker};
`;

export default Chart;
