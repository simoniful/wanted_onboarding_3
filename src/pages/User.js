import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { layouts as S } from 'styles/layouts';
import GlobalStyles from 'styles/GlobalStyles';
import styled from 'styled-components';
import { getLocalStorage, getTeacherList } from 'utils/storage';
import { LOGIN_USER } from 'utils/config';
import { logout } from 'utils/auth';
import Navbar from 'components/Navbar';
import { AccountButton } from 'components';
import UserCard from 'components/UserCard';

const User = () => {
  const history = useHistory();
  const [teacherList] = useState(getTeacherList());
  const [loginUser] = useState(getLocalStorage(LOGIN_USER));
  const [menuList] = useState(
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
        <S.Container>
          <S.Section>
            <S.Content>
              <Title>
                {`어서오세요 ${
                  loginUser.userType === `teacher` ? `선생님` : `부모님`
                } 페이지입니다`}
              </Title>
              {teacherList.map(({ name }, key) => (
                <UserCard teacherName={name} key={key} />
              ))}
            </S.Content>
            <S.Aside>
              <AccountButton onClick={onLogout} content='로그아웃' />
              <MenuList>
                {menuList.map((sideMenu, key) => (
                  <Menu key={key}>{sideMenu}</Menu>
                ))}
              </MenuList>
            </S.Aside>
          </S.Section>
        </S.Container>
      </S.Wrap>
    </>
  );
};

const Title = styled.h1`
  width: 100%;
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
