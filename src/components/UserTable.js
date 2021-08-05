import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Pagination from './Pagination';
import TableData from './TableData';
import { color } from '../styles/styles';
import { currentUsers } from '../utils/currentUsers';
import { DATA_PER_PAGE, GET_USER_STORAGE_KEYWARD } from '../utils/constants';
import { tempGetStoreage, tempSetStoreage } from '../utils/storage';

const UserTable = ({ userData }) => {
  const [currentUserData, setCurrentUserData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [firstIndex, setFirstIndex] = useState(null);
  const [lastIndex, setLastIndex] = useState(null);

  useEffect(() => {
    const nextLastIndex = currentPage * DATA_PER_PAGE;
    const nextFirstIndex = nextLastIndex - DATA_PER_PAGE;

    setLastIndex(nextLastIndex);
    setFirstIndex(nextFirstIndex);
  }, [currentPage, lastIndex]);

  useEffect(() => {
    setCurrentUserData(currentUsers(userData, firstIndex, lastIndex));
  }, [userData, firstIndex, lastIndex]);

  if (userData.length === 0) {
    return <p>데이터가 비어 있습니다.</p>;
  }

  return (
    <>
      <TableContainer>
        <thead>
          <tr>
            <th>아이디</th>
            <th>이름</th>
            <th>나이</th>
            <th>주소</th>
            <th>카드 번호</th>
            <th>권한</th>
          </tr>
        </thead>
        <tbody>
          <TableData TableData={currentUserData} />
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
    background: ${color.primaryDarker};
    border-radius: 3px;
  }
  & td {
    padding: 10px;
    vertical-align: top;
    vertical-align: middle;
    background: ${color.white};
    color: ${color.greyDarker};
    border-bottom: 1px solid ${color.greyLighter};
    border-right: 1px solid ${color.greyLighter};
    border-radius: 3px;
  }
`;

export default UserTable;
