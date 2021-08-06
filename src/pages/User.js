import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { layouts as S } from 'styles/layouts';
import GlobalStyles from 'styles/GlobalStyles';
import Navbar from 'components/Navbar';
import { AccountButton } from 'components';
import { getLocalStorage } from 'utils/storage';
import { LOGIN_USER } from '../utils/config';
import { logout } from '../utils/auth';
import { COLOR_STYLES } from '../styles/styles';

const User = () => {
  const history = useHistory();

  const [loginUser, _] = useState(getLocalStorage(LOGIN_USER));
  const [menuList, __] = useState(
    loginUser.userType === 'parent'
      ? ['학부모 메뉴1', '학부모 메뉴2', '학부모 메뉴3']
      : ['선생님 메뉴1', '선생님 메뉴2', '선생님 메뉴3'],
  );

  const onLogout = () => (logout(), history.push('/'));

  return (
    <>
      <GlobalStyles />
      <S.Wrap>
        <Navbar name={loginUser.name} />
        <UserContainer>
          <UserSection>
            <S.Content>
              <PageText>
                {`어서오세요 자란다 ${
                  loginUser.userType === `teacher` ? `선생님` : `부모님`
                } 페이지입니다`}
              </PageText>
              <MenuList>
                {menuList.map((sideMenu, key) => (
                  <Menu key={key}>{sideMenu}</Menu>
                ))}
              </MenuList>
              <ContentText>96% 부모님이 추천합니다.</ContentText>
              <ContentText>딱 맞는 선생님을 무료로 추천 받으세요.</ContentText>
              <MainImg />
            </S.Content>
            <CardAside>
              <S.Sidebar>
                <UserAccountBox>
                  <AccountButton onClick={onLogout} content='로그아웃' />
                </UserAccountBox>
              </S.Sidebar>
            </CardAside>
          </UserSection>
        </UserContainer>
      </S.Wrap>
    </>
  );
};

const MenuList = styled.ul`
  display: flex;
  width: 100%;
  padding: 10px 20px;
  margin: 50px 0;
  justify-content: center;
  color: ${COLOR_STYLES.white};
  background: ${COLOR_STYLES.primaryGradient};
  border-radius: 20px;
`;

const Menu = styled.li`
  width: 100%;
  padding: 10px 0;
  text-align: center;
`;

const PageText = styled.div`
  font-size: 20px;
  margin: 30px 0;
  text-align: center;
`;

const ContentText = styled.div`
  font-size: 20px;
  margin: 10px 0;
`;

const CardAside = styled(S.Aside)`
  width: 40%;
  min-width: 300px;
`;

const UserAccountBox = styled(S.AccountBox)`
  justify-content: center;
`;

const UserContainer = styled(S.Container)`
  @media only screen and (max-width: 1287px) {
    margin: 0 calc((${window.innerWidth}px - 600px) / 2) !important;
  }
`;

const UserSection = styled(S.Section)`
  @media only screen and (max-width: 973px) {
    display: block;
  }
`;

const MainImg = styled.img.attrs({
  src: 'images/user-img.png',
})`
  width: 620px;
  height: 400px;
  margin: 10px;
`;

export default User;
