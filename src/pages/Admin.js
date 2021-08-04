import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { layouts as S } from 'styles/layouts';
import GlobalStyles from 'styles/GlobalStyles';
import Navbar from 'components/Navbar';
import Graph from 'components/Graph';
import UserTable from 'components/UserTable';
import AccountButton from 'components/AccountButton';
import SearchBox from 'components/SearchBox';
import { tempGetStoreage, tempSetStoreage } from 'utils/storage';
import { GET_USER_STORAGE_KEYWARD } from '../utils/constants';

const Admin = () => {
  // 사용자 test data & 버튼클릭 test 이벤트
  const user = '관리자1';
  const menuList = ['menu1', 'menu2', 'menu3', 'menu4'];
  const logout = () => {};

  // 데이터 테이블 관련 state 입니다.
  const [userData, setUserData] = useState([]);
  const [copiedData, setCopiedData] = useState([]);

  useEffect(() => {
    tempSetStoreage();
    setUserData(tempGetStoreage(GET_USER_STORAGE_KEYWARD));
    setCopiedData(tempGetStoreage(GET_USER_STORAGE_KEYWARD));
  }, []);

  return (
    <>
      <GlobalStyles />
      <S.Wrap>
        <Navbar user={user} menuList={menuList} />
        <S.Body>
          <S.Section>
            <SearchBox userData={userData} setUserData={setUserData} copiedData={copiedData} />
            <UserTable userData={userData} />
          </S.Section>
          <S.Aside>
            <S.AccountContainer>
              <AccountButton onClick={logout} content='계정 생성' />
              <AccountButton onClick={logout} content='로그아웃' />
            </S.AccountContainer>
            <Sidebar>
              <Graph />
            </Sidebar>
          </S.Aside>
        </S.Body>
      </S.Wrap>
    </>
  );
};

const Sidebar = styled.div`
  width: 100%;
  background-color: #bbbbbb;
`;

export default Admin;
