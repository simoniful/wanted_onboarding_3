import React from 'react';
import styled from 'styled-components';
import { COLOR_STYLES } from '../styles/styles';
import BarChart from './chart/BarChart';
import LineChart from './chart/LineChart';
import DoughnutChart from './chart/DoughnutChart';

const Chart = ({ userData }) => {
  const getUserTypeList = () => {
    return userData.map((user) => user.userType);
  };

  const getUserAgeRange = (ageList) => {
    const ageRangeCntList = [0, 0, 0, 0, 0];
    ageList.forEach((age) => {
      const ages = age % 10;
      if (ages < 1) ageRangeCntList[0] += 1;
      if (ages < 2) ageRangeCntList[1] += 1;
      if (ages < 3) ageRangeCntList[2] += 1;
      if (ages < 4) ageRangeCntList[3] += 1;
      else ageRangeCntList[4] += 1;
    });
    return ageRangeCntList;
  };

  const getUserAgeList = () => {
    const userAgeList = userData.map((user) => user.age);
    const userAgeRangeList = getUserAgeRange(userAgeList);
    return userAgeRangeList;
  };
  const getUserAddressCnt = (addressList) => {
    const addressLabel = [];
    const addressCnt = {};

    addressList.forEach((address) => {
      if (!addressLabel.includes(address)) {
        addressCnt[address] = 1;
        addressLabel.push(address);
      } else {
        addressCnt[address] += 1;
      }
    });
    return addressCnt;
  };

  const getUserAddressList = () => {
    const userAddress = userData.map((user) => user.address.split(' ')[0]);
    return getUserAddressCnt(userAddress);
  };

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
        <DoughnutChart chartList={getUserAddressList()} />
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
