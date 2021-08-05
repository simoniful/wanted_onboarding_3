import { layouts as S } from 'styles/layouts';
import GlobalStyles from 'styles/GlobalStyles';
import Navbar from 'components/Navbar';

import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const User = () => {
  const [user, setUser] = useState('사용자1'); // user mock data
  const [menuList, setMenuList] = useState(['menu1', 'menu2', 'menu3', 'menu4']); // menu mock data

  useEffect(() => {
    // 1. 비정상적인 url 접근 막기 & 메인화면으로 redirect
    // 2. history에서 state : {user, menu} 받아서 setState
  }, []);

  return (
    <>
      <GlobalStyles />
      <S.Wrap>
        <Navbar user={user} />
        <S.Body>
          <S.Section>
            <h1>어서오세요 사용자 페이지입니다</h1>
          </S.Section>
          <S.Aside>
            <Button>Button</Button>
            <MenuList>
              {menuList.map((sideMenu, key) => (
                <Menu key={key}>{sideMenu}</Menu>
              ))}
            </MenuList>
          </S.Aside>
        </S.Body>
      </S.Wrap>
    </>
  );
};

const Button = styled.button`
  width: 100%;
  height: 50px;
  background-color: #aaaaaa;
`;

const MenuList = styled.li`
  width: 100%;
  background-color: #bbbbbb;
`;

const Menu = styled.ul`
  width: 100%;
  padding: 16px 0;
`;

export default User;
