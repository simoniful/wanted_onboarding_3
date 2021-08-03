import React from 'react';
import styled from 'styled-components';
import { layouts as S } from 'styles/layouts';
import GlobalStyles from 'styles/GlobalStyles';
import Navbar from 'components/Navbar';
import Graph from 'components/Graph';
import UserTable from 'components/UserTable';
import AccountButton from 'components/AccountButton';
import SearchBox from 'components/SearchBox';

const Admin = () => {
  // 사용자 test data & 버튼클릭 test 이벤트
  const user = '관리자1';
  const menuList = ['menu1', 'menu2', 'menu3', 'menu4'];
  const logout = () => {};
  return (
    <>
      <GlobalStyles />
      <S.Wrap>
        <Navbar user={user} menuList={menuList} />
        <S.Container>
          <S.ButtonBox>
            <SearchBox />
            <S.AccountBox>
              <AccountButton onClick={logout} content='계정 생성' />
              <AccountButton onClick={logout} content='로그아웃' />
            </S.AccountBox>
          </S.ButtonBox>
          <S.Section>
            <S.Content>
              <UserTable />
            </S.Content>
            <S.Aside>
            <S.Sidebar>
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
