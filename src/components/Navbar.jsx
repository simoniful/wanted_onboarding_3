/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Navbar = ({ menuList, user }) => {
  return (
    <Container>
      <MenuList>
        {menuList.map((menu) => (
          <Menu>{menu}</Menu>
        ))}
      </MenuList>
      <MyPage>{user}</MyPage>
    </Container>
  );
};

const Container = styled.nav`
  width: 100%;
  height: 10vh;
  background-color: gray;
  margin-bottom: 20px;
  display: flex;
`;

const MenuList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 3;
`;

const Menu = styled.li`
  color: white;
`;

const MyPage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export default Navbar;
