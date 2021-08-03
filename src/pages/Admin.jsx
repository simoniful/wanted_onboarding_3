import React from 'react';
import styled from 'styled-components';
import { layouts as S } from 'styles/layouts';
import GlobalStyles from 'styles/GlobalStyles';
import Navbar from 'components/Navbar';
import Graph from 'components/Graph';
import Table from 'components/Table';
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
        <NavDiv>
          <Navbar user={user} menuList={menuList} />
        </NavDiv>
        <S.Body>
          <S.Section>
            <SearchBox />
            <Table />
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

const NavDiv = styled.div`
  display: flex;
`;
const Sidebar = styled.div`
  width: 100%;
  background-color: #bbbbbb;
`;

export default Admin;
