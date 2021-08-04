/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Navbar = ({ user }) => {
  const menuList = ['공통메뉴1', '공통메뉴2', '공통메뉴3'];

  return (
    <NavWrap>
      <NavContainer>
        <NavContent>
          <LogoImg />
          <MenuList>
            {menuList.map((menu, key) => (
              <Menu key={key}>{menu}</Menu>
            ))}
          </MenuList>
          <Account>{user}</Account>
        </NavContent>
      </NavContainer>
    </NavWrap>
  );
};

const NavWrap = styled.nav`
  width: 100%;
  height: 100%;
  padding: 0;
  color: #4a4a4a;
  box-shadow: 1px 1px 1px #bababa;
  margin-bottom: 12px;
`;

const NavContainer = styled.div`
  width: 95%;
  margin: 0 auto;
`;

const NavContent = styled.div`
  display: flex;
  align-items: center;
  height: 8vh;
  padding: 0 15px;
`;

const LogoImg = styled.img.attrs({
  src: 'images/jaranda-logo.png',
})`
  width: 80px;
`;

const MenuList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  flex: 5;
`;

const Menu = styled.li`
  font-size: 16px;
  cursor: pointer;
  :hover {
    color: #aac14f;
    transition: 0.2s;
  }
`;

const Account = styled.div`
  font-size: 16px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  width: 100%;
`;

export default Navbar;
