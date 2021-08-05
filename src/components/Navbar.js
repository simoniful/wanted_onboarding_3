import React from 'react';
import styled from 'styled-components';
import { COLOR_STYLES, FONT_SIZE_STYLES } from 'styles/styles';

const Navbar = ({ user }) => {
  const menuList = ['공통메뉴1', '공통메뉴2', '공통메뉴3'];

  return (
    <NavWrap>
      <NavContainer>
        <NavContent>
          
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
const Logo = styled.a`
  width: 100%;
  cursor: pointer;
  h2 {
    color: ${COLOR_STYLES.white};
    font-size: ${FONT_SIZE_STYLES.larger};
  }
`;

const NavWrap = styled.nav`
  width: 100%;
  height: 100%;
  padding: 0;
  color: ${COLOR_STYLES.white};
  background: ${COLOR_STYLES.primaryGradient};
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
    text-shadow: 2px 2px 5px ${COLOR_STYLES.white};
    transition: 0.3s;
  }
`;

const Account = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  color: ${COLOR_STYLES.greyDarker};
`;

export default Navbar;
