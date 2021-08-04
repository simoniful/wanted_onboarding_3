import { layouts as S } from 'styles/layouts';
import GlobalStyles from 'styles/GlobalStyles';
import Navbar from 'components/Navbar';

import React from 'react';
import styled from 'styled-components';

const User = () => {
  const user = '부모님';
  const menuList = ['menu1', 'menu2', 'menu3', 'menu4'];
  const sideMenuList = ['side menu1', 'side menu2', 'side menu3', 'side menu4'];

  return (
    <>
      <GlobalStyles />
      <S.Wrap>
        <Navbar user={user} menuList={menuList} />
        <S.Container>
          <S.Section>
            <h1>어서오세요 사용자 페이지입니다</h1>
          </S.Section>
          <S.Aside>
            <Button>Button</Button>
            <SideMenu>
              {sideMenuList.map((sideMenu) => (
                <Menu>{sideMenu}</Menu>
              ))}
            </SideMenu>
          </S.Aside>
        </S.Container>
      </S.Wrap>
    </>
  );
};

const Button = styled.button`
  width: 100%;
  height: 50px;
  background-color: #aaaaaa;
`;

const SideMenu = styled.div`
  width: 100%;
  background-color: #bbbbbb;
`;

const Menu = styled.div`
  width: 100%;
  padding: 16px 0;
`;

export default User;
