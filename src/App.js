import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Pagination from './components/Pagination';
import UserData from './components/UserData';
import { currentUsers } from './utils/currentUsers';
import { getStorage } from './utils/storage';
import { DATA_PER_PAGE, GET_USER_STORAGE_KEYWARD } from './utils/constants';

const TableContainer = styled.table`
  border: 1px solid black;
  text-align: center;

  & tr,
  th,
  td {
    border: 1px solid black;
    padding: 10px;
  }
`;

const App = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [userDataPerPage] = useState(DATA_PER_PAGE);

  const indexOfLast = currentPage * userDataPerPage;
  const indexOfFirst = indexOfLast - userDataPerPage;

  useEffect(() => {
    setUserData(getStorage(GET_USER_STORAGE_KEYWARD));
  }, []);

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
            <th>은행</th>
            <th>카드 번호</th>
          </tr>
        </thead>
        <tbody>
          <UserData
            userData={currentUsers(userData, indexOfFirst, indexOfLast)}
            loading={loading}
          />
        </tbody>
      </TableContainer>
      <Pagination
        userDataPerPage={userDataPerPage}
        totalUserData={userData.length}
        paginate={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
};

export default App;
