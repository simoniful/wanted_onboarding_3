import React from 'react';
import styled from 'styled-components';
import { COLOR_STYLES } from '../styles/styles';
import BarChart from './chart/BarChart';
import LineChart from './chart/LineChart';
import DoughnutChart from './chart/DoughnutChart';

const Chart = ({ userData }) => {
  const getCntObj = (addressList) => {
    const labelList = [];
    const dataCnt = {};
    addressList.forEach((address) => {
      if (!labelList.includes(address)) {
        dataCnt[address] = 1;
        labelList.push(address);
      } else {
        dataCnt[address] += 1;
      }
    });
    return dataCnt;
  };

  const getUserTypeList = () => {
    const userTypeTotalList = userData.map((user) => user.userType);
    const userTypeList = userTypeTotalList.filter((userType) => userType !== 'admin');
    return getCntObj(userTypeList);
  };

  const getUserAgeList = () => {
    const userAgeList = userData.map((user) => parseInt(user.age / 10) * 10);
    const userAgeRangeList = getCntObj(userAgeList);
    return userAgeRangeList;
  };

  const getUserAddressList = () => {
    const userAddress = userData.map((user) => user.address.split(' ')[0]);
    return getCntObj(userAddress);
  };

  return (
    <ChartContainer>
      <ChartBox>
        <ChartTitle>권한</ChartTitle>
        <BarChart chartData={getUserTypeList()} />
      </ChartBox>
      <ChartBox>
        <ChartTitle>나이</ChartTitle>
        <LineChart chartData={getUserAgeList()} />
      </ChartBox>
      <ChartBox>
        <ChartTitle>주소</ChartTitle>
        <DoughnutChart chartData={getUserAddressList()} />
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
