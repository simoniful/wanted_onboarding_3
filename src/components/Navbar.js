/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { color, fontSize } from 'styles/styles';

const Navbar = ({ menuList, user }) => {
  return (
    <NavWrap>
      <NavContainer>
        <NavContent>
          <Logo href='/admin'>
            <h2>Jaranda</h2>
          </Logo>
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
const Logo = styled.a`
  width: 100%;
  cursor: pointer;
  h2 {
    color: ${color.white};
    font-size: ${fontSize.larger};
  }
`;

const NavWrap = styled.nav`
  width: 100%;
  height: 100%;
  padding: 0;
  color: ${color.white};
  background: ${color.primaryGradient};
`;

const NavContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const NavContent = styled.div`
  align-items: center;
  justify-content: space-between;
  display: flex;
  height: 10vh;
  padding: 0 15px;
`;

const MenuList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300%;
`;

const Menu = styled.li`
  cursor: pointer;
  padding: 0 5%;
  :hover {
    text-shadow: 2px 2px 5px ${color.white};
    transition: 0.3s;
  }
`;

const Account = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  color: ${color.greyDarker};
`;

export default Navbar;
