import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { layouts as S } from 'styles/layouts';
import GlobalStyles from 'styles/GlobalStyles';
import Navbar from 'components/Navbar';
import Graph from 'components/Graph';
import UserTable from 'components/UserTable';
import AccountButton from 'components/AccountButton';
import SearchBox from 'components/SearchBox';
import { tempGetStorage, tempSetStorage } from 'utils/storage';
import { GET_USER_STORAGE_KEYWORD } from '../utils/config';

const Admin = () => {
  // 페이지 관련 state (수정예정)
  const [user, setUser] = useState('관리자A');
  const [menuList, setMenu] = useState([]);
  const history = useHistory();

  // 테이블 관련 state
  const [userData, setUserData] = useState([]);
  const [copiedData, setCopiedData] = useState([]);

  const onLogout = () => history.push('/');
  const onCreateAccount = () => {}; // TODO 1. 회원가입 모달창 띄우기

  useEffect(() => {
    // TODO 2. 비정상적인 url 접근 막기 & 메인화면으로 redirect
    // TODO 3. history에서 state : {user, menu} 받아서 setState

    tempSetStorage();
    setUserData(tempGetStorage(GET_USER_STORAGE_KEYWORD));
    setCopiedData(tempGetStorage(GET_USER_STORAGE_KEYWORD));
  }, []);

  return (
    <>
      <GlobalStyles />
      <S.Wrap>
        <Navbar user={user} menuList={menuList} />
        <S.Container>
          <S.Section>
            <S.Content>
              <SearchBox userData={userData} setUserData={setUserData} copiedData={copiedData} />
              <UserTable userData={userData} />
            </S.Content>
            <S.Aside>
              <S.Sidebar>
                <S.AccountBox>
                  <AccountButton onClick={onCreateAccount} content='계정 생성' />
                  <AccountButton onClick={onLogout} content='로그아웃' />
                </S.AccountBox>
                <Graph />
              </S.Sidebar>
            </S.Aside>
          </S.Section>
        </S.Container>
      </S.Wrap>
    </>
  );
};

export default Admin;
