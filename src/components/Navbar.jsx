/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Navbar = ({ menuList, user }) => {
  return (
    <NavWrap>
      <NavContainer>
        <NavContent>
          <LogoImg />
          <MenuList>
            {menuList.map((menu) => (
              <Menu>{menu}</Menu>
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
`;

const NavContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const NavContent = styled.div`
  display: flex;
  align-items: center;
  height: 10vh;
  padding: 0 15px;
`;

const LogoImg = styled.img.attrs({
  src: 'images/jaranda-logo.png',
})`
  width: 63px;
  height: 24px;
  margin: 0 20% 1% 0;
`;

const MenuList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex: 3;
`;

const Menu = styled.li`
  cursor: pointer;
  color: #656565;
  :hover {
    color: #aac14f;
    transition: 0.2s;
  }
`;

const Account = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  width: 100%;
  color: #656565;
`;

export default Navbar;
