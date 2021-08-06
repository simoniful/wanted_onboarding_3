import React, {useState} from 'react';
import styled from 'styled-components';
import { layouts as S } from 'styles/layouts';
import { useHistory } from 'react-router-dom';
import { COLOR_STYLES, FONT_SIZE_STYLES } from 'styles/styles';
import AccountButton from 'components/AccountButton';
import { getLocalStorage, setLocalStorage } from 'utils/storage';
import { LOGIN_USER } from '../utils/config';

import { logout } from '../utils/auth';


const Navbar = ({ name }) => {
  const [loginUser, _] = useState(getLocalStorage(LOGIN_USER));
  const [menuList, __] = useState(
    loginUser.userType === 'parent'
      ? ['선생님보기', '신청서작성', '신청내역', '방문일정', '방문일지']
      : ['선생님메뉴', '신청서보기', '수락내역', '일정', '방문일지'],
  );
  const history = useHistory();
  
  const userMenu = ['마이페이지', '이용안내'];
  const onLogout = () => (logout(), history.push('/'));

  return (
    <NavWrap>
      <NavContainer>
        <NavContent>
          <Logo href='/admin'>
            <h2>Jaranda</h2>
          </Logo>
          <MenuList>
            {menuList.map((menu, key) => (
              <Menu key={key}>{menu}</Menu>
            ))}
          </MenuList>
          <Account>
            <AccountImg></AccountImg>
          
            <PopupMenu>
              <Name>
                {name}님 hi
              </Name>
              <SmallMenuList>
                  {menuList.map((menu, key) => (
                  <Menu key={key}>{menu}</Menu>
                  ))}
              </SmallMenuList>
              <UserMenuList>
                {userMenu.map((menu, key) => (
                <Menu key={key}>{menu}</Menu>
                ))}
              </UserMenuList>
              <AccountContainer>
                <AccountButton width='70%;' height='34px;' onClick={onLogout} content='로그아웃'></AccountButton>
              </AccountContainer>
            </PopupMenu>
          </Account>
          
        </NavContent>
      </NavContainer>
    </NavWrap>
  );
};

const theme = {
  threshold: '800px',
};

const Name = styled.h1`
  width: 100%;
  display: block;
  text-align: center;
  padding: 8px;
  color: purple;
  font-weight: bold;
`

const AccountContainer = styled(S.Container)`
  width: 100px;
  margin: 4px auto !important;
  text-align: center;
`;

const PopupMenu = styled.div`
  width: 160px;
  position: absolute;
  top: 56px;
  right: 3%;
  background: white;
  border: 1px solid #ececec;
  border-radius: 3px;
  box-shadow: 0 6px 12px rgb(0 0 0 / 18%);
  display: none;

  @media only screen and ${`(min-width: ${theme.threshold})`} {
    display: none;
    right: 11%;
    & ul {
      display: none;
    }
  }
  & li {
    color: #777;
    padding: 12px;
    font-size: ${FONT_SIZE_STYLES.middle};
    :hover {
      color: ${COLOR_STYLES.primary};
    }
  }
`;

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
  height: 62px;
  padding: 0;
  color: ${COLOR_STYLES.white};
  background: ${COLOR_STYLES.primaryGradient};

  @media only screen and ${`(max-width: ${theme.threshold})`}{
    color: linear-gradient(to right bottom,#a7cf53,#69d872);
  }

  & h2 {
    @media only screen and ${`(max-width: ${theme.threshold})`} {
      font-size: ${FONT_SIZE_STYLES.large};
      color: black;
    }
  }
`;

const NavContainer = styled(S.Container)`
  @media only screen and ${`(max-width: ${theme.threshold})`} {
    width: 95%;
    position: fixed;

  }
`;

const NavContent = styled.div`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  display: flex;
  height: 62px;
  padding: 0 15px;
`;

const MenuList = styled.ul`
  display: flex;
  align-items: center;
  width: 540%;
  margin-left: 8%;
  @media only screen and ${`(max-width: ${theme.threshold})`}{
    opacity: 0;
    margin: 0 auto;
  }
`;

const UserMenuList = styled.ol`
  border-top: solid 2px #ececec;

  @media only screen and ${`(min-width: ${theme.threshold})`} {
    border: none;
  }
`;

const Menu = styled.li`
  min-width: 80px;
  display: block;
  cursor: pointer;
  white-space: nowrap;
  text-align: center;
  padding: 0 5%;
  :hover {
    text-shadow: 2px 2px 5px ${COLOR_STYLES.white};
    transition: 0.3s;
  }
`;

const SmallMenuList = styled(MenuList)`
  width: 160px;
  @media only screen and ${`(max-width: ${theme.threshold})`} {
    opacity: 1 !important;
    display: block;
  }
`;

const Account = styled.div`
  display: flex;
  position: relaive;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 60px;
  color: ${COLOR_STYLES.greyDarker};

  :hover ${PopupMenu} {
    display: block;
  }
`;

const AccountImg = styled.div`
  background-image: url(https://jaranda.kr/assets/image/mypage.svg);
  width: 22px;
  height: 22px;
  padding: 5px 0;
  filter: opacity(0.5) drop-shadow(0 0 0 black);
  :hover {
    filter: opacity(1);
    position: relative;
  }
`;

export default Navbar;
