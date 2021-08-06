import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Pagination from './Pagination';
import TableData from './TableData';
import { CenterText } from '../styles/CenterText';
import { COLOR_STYLES } from '../styles/styles';
import { currentUsers } from '../utils/currentUsers';
import { DATA_PER_PAGE } from '../utils/config';

let userInfo;
let tableHead;


const UserTable = ({ userData, pageType }) => {
  const [currentUserData, setCurrentUserData] = useState([]);
  const [firstIndex, setFirstIndex] = useState(null);
  const [lastIndex, setLastIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState([]);

  useEffect(() => {
    const nextLastIndex = currentPage * DATA_PER_PAGE;
    const nextFirstIndex = nextLastIndex - DATA_PER_PAGE;

    setLastIndex(nextLastIndex);
    setFirstIndex(nextFirstIndex);
  }, [currentPage, lastIndex]);

  
  userInfo = userData;
  tableHead = ['아이디', '이름', '나이','주소','카드 번호','권한'];
  if(pageType === 'user'){
    userInfo = userData.filter((user)=> delete user.cardNumber);
    tableHead = tableHead.filter((head)=> head !== '카드 번호');
  }


  useEffect(() => {
    setCurrentUserData(currentUsers(userData, firstIndex, lastIndex));
  }, [userData, firstIndex, lastIndex]);
  

  
  if (userData.length === 0) {
    return <CenterText>데이터가 없습니다</CenterText>;
  }

  return (
    <>
      <TableContainer>
        <thead>
          <tr>
            {tableHead.map((menu, key)=>(
              <th key={key}>{menu}</th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          <TableData TableData={userData} pageType={pageType} />
        </tbody>
      </TableContainer>
      <Pagination
        totalDataNum={userData.length}
        currentPage={currentPage}
        paginate={setCurrentPage}
      />
    </>
  );
};

const TableContainer = styled.table`
  border-collapse: separate;
  border-spacing: 1px;
  text-align: center;
  border-radius: 6px 6px 6px 6px;
  width: 100%;

  & tr,
  th,
  td {
    padding: 10px;
  }
  & th {
    padding: 10px;
    font-weight: bold;
    vertical-align: top;
    color: #fff;
    background: ${COLOR_STYLES.primaryDarker};
    border-radius: 3px;
  }
  & td {
    padding: 10px;
    vertical-align: top;
    vertical-align: middle;
    background: ${COLOR_STYLES.white};
    color: ${COLOR_STYLES.greyDarker};
    border-bottom: 1px solid ${COLOR_STYLES.greyLighter};
    border-right: 1px solid ${COLOR_STYLES.greyLighter};
    border-radius: 3px;
  }
`;

export default UserTable;
