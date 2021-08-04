import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Pagination from './Pagination';
import UserData from './UserData';
import { currentUsers } from '../utils/currentUsers';
import { DATA_PER_PAGE, GET_USER_STORAGE_KEYWARD } from '../utils/constants';
import { tempGetStoreage, tempSetStoreage } from '../utils/storage';

const TableContainer = styled.table`
  border: 1px solid black;
  text-align: center;
  margin: 0 auto;
  min-width: 650px;
  width: 100%;

  & tr,
  th,
  td {
    border: 1px solid black;
    padding: 10px;
  }
`;

const UserTable = () => {
  const [userData, setUserData] = useState([]);
  const [currentUserData, setCurrentUserData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [firstIndex, setFirstIndex] = useState(null);
  const [lastIndex, setLastIndex] = useState(null);

  useEffect(() => {
    tempSetStoreage();
    setUserData(tempGetStoreage(GET_USER_STORAGE_KEYWARD));
  }, []);

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
          <UserData userData={currentUserData} />
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

export default UserTable;
