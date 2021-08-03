import { layouts as S } from 'styles/layouts';
import GlobalStyles from 'styles/GlobalStyles';
import Navbar from 'components/Navbar';
import Graph from 'components/Graph';
import UserTable from 'components/UserTable';

import React from 'react';
import styled from 'styled-components';

const Admin = () => {
  const user = '관리자1';
  const menuList = ['menu1', 'menu2', 'menu3', 'menu4'];

  return (
    <>
      <GlobalStyles />
      <S.Container>
        <Navbar user={user} menuList={menuList} />
        <S.Body>
          <S.Section>
            <UserTable />
          </S.Section>
          <S.Aside>
            <Button>Button</Button>
            <Sidebar>
              <Graph />
            </Sidebar>
          </S.Aside>
        </S.Body>
      </S.Container>
    </>
  );
};

const Button = styled.button`
  width: 100%;
  height: 50px;
  background-color: #aaaaaa;
`;

const Sidebar = styled.div`
  width: 100%;
  background-color: #bbbbbb;
`;

export default Admin;
