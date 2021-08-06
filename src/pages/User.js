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
import { COLOR_STYLES } from 'styles/styles';

const User = () => {
  const history = useHistory();
  const [teacherList] = useState(getTeacherList());
  const [loginUser] = useState(getLocalStorage(LOGIN_USER));
  const [isTeacher] = useState(loginUser.userType === 'teacher' ? true : false);
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
        <UserContainer>
          <UserSection>
            <S.Content>
              <PageText>
                <UserIcon />
                {` 어서오세요 자란다 ${isTeacher ? `선생님` : `부모님`} 페이지입니다`}
              </PageText>
              <MenuList>
                {menuList.map((sideMenu, key) => (
                  <Menu key={key}>{sideMenu}</Menu>
                ))}
              </MenuList>
              {isTeacher ? (
                <>
                  <ContentText>아이를 좋아하는 자란쌤</ContentText>
                  <ContentText>함께 놀고 뛰며 아이의 꿈을 키워주세요!</ContentText>
                  <TeacherImg />
                </>
              ) : (
                <>
                  <ContentText>96% 부모님이 추천합니다.</ContentText>
                  <ContentText>딱 맞는 선생님을 무료로 추천 받으세요.</ContentText>
                  <ParentImg />
                </>
              )}
            </S.Content>
            <CardAside>
              <S.Sidebar>
                <UserAccountBox>
                  <AccountButton onClick={onLogout} content='로그아웃' />
                </UserAccountBox>
                <CardTitle>자란다와 함께하는 {`${isTeacher ? `학생` : `선생님`} `}</CardTitle>
                <CardBox>
                  {teacherList.map(({ name }, key) => (
                    <UserCard teacherName={name} key={key} userType={isTeacher} />
                  ))}
                </CardBox>
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
  align-items: center;
`;

const CardTitle = styled.div`
  padding: 10px 0;
  margin-top: 58px;
  color: ${COLOR_STYLES.white};
  background: ${COLOR_STYLES.primaryDarker};
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

const CardBox = styled.div`
  height: 550px;
  overflow: scroll;
`;

const UserIcon = styled.img.attrs({
  src: '../../images/expertise_level_3.png',
})`
  width: 24px;
  height: 24px;
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

const TeacherImg = styled.img.attrs({
  src: 'images/teacher.png',
})`
  width: 620px;
  height: 400px;
  margin: 10px;
`;
const ParentImg = styled.img.attrs({
  src: 'images/parent.png',
})`
  width: 620px;
  height: 400px;
  margin: 10px;
`;

export default User;
