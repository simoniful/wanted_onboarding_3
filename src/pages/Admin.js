import { layouts as S } from 'styles/layouts';
import GlobalStyles from 'styles/GlobalStyles';
import Navbar from 'components/Navbar';
import Graph from 'components/Graph';
import UserTable from 'components/UserTable';
import AccountButton from 'components/AccountButton';
import SearchBox from 'components/SearchBox';

import styled from 'styled-components';
import { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

const Admin = () => {
  const [user, setUser] = useState('관리자A');
  const [menu, setMenu] = useState([]);
  const history = useHistory();

  useEffect(() => {
    // 1. 비정상적인 url 접근 막기 & 메인화면으로 redirect
    // 2. history에서 state : {user, menu} 받아서 setState
  }, []);

  const onLogout = () => history.push('/');
  const onCreateAccount = () => {}; // TODO: 회원가입 모달창 띄우기

  return (
    <>
      <GlobalStyles />
      <S.Wrap>
        <Navbar user={user} />
        <S.Body>
          <S.Section>
            <SearchBox />
            <UserTable />
          </S.Section>
          <S.Aside>
            <S.AccountButtonBox>
              <AccountButton onClick={onCreateAccount} content='계정 생성' />
              <AccountButton onClick={onLogout} content='로그아웃' />
            </S.AccountButtonBox>
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
