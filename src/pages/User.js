import React, { useEffect, useState } from 'react';
import { layouts as S } from 'styles/layouts';
import { useHistory } from 'react-router-dom';
import GlobalStyles from 'styles/GlobalStyles';
import Navbar from 'components/Navbar';
import UserTable from 'components/UserTable';
import SearchBox from 'components/SearchBox';
import UserCard from 'components/UserCard'
import styled from 'styled-components';
import { getLocalStorage, setLocalStorage } from 'utils/storage';
import AccountButton from '../components/AccountButton';
import { LOGIN_USER, SEARCH_DROPDOWN_ITEMS } from '../utils/config';
import { logout } from '../utils/auth';
import { currentUsers } from '../utils/currentUsers';


let teacherList;
const pageType = 'user';

const User = () => {
  const history = useHistory();

  const [loginUser, _] = useState(getLocalStorage(LOGIN_USER));


  const onLogout = () => (logout(), history.push('/'));

  const userMenu = ['마이페이지', '이용안내'];
  const [currentUserData, setCurrentUserData] = useState([]);
  const [firstIndex, setFirstIndex] = useState(null);
  const [lastIndex, setLastIndex] = useState(null);
  const [userData, setUserData] = useState([]);
  const [copiedData, setCopiedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  
  teacherList = []

  useEffect(() => {
    setCurrentUserData((currentUsers(userData, firstIndex, lastIndex)));
  }, [userData, firstIndex, lastIndex]);

  useEffect(() => {
    setUserData(getLocalStorage( SEARCH_DROPDOWN_ITEMS));
    setCopiedData(getLocalStorage( SEARCH_DROPDOWN_ITEMS));
  }, []);

  function pushData(){
    for(let i =0; i<userData.length; i++){
      if(userData[i].userType==='teacher'){
        teacherList.push(userData[i])
      }
    }
  }
  pushData();
  pushData();
  pushData();
  pushData();
  

  return (
    <>
      <GlobalStyles />
      <UserWrap>
        <UserNavbar name={loginUser.name} />
        <SwipeZone>
      
        </SwipeZone>
        <UserContainer>
          <UserSection>
            <ChartAside>
              <S.Sidebar>
                {teacherList.map((teacher, key)=>(
                  <UserCard teacherName={teacher.name}/>
                ))}
              </S.Sidebar>
            </ChartAside>
            <TableBox>
              <Welcome>
                {`어서오세요 ${
                  loginUser.userType === `teacher` ? `선생님` : `부모님`
                } 페이지입니다`}
              </Welcome>
              <UserSearchBox>
                <SearchBox  userData={teacherList}
                  copiedData={copiedData}
                  setUserData={setUserData}
                  setCurrentPage={setCurrentPage} />
              </UserSearchBox>
            
            </TableBox>
          </UserSection>
        </UserContainer>
      </UserWrap>
    </>
  );
};

const Welcome = styled.h1`
  @media only screen and (max-width: 1015px){
    position: fixed;
    top: 0;
  }
`;

const UserNavbar = styled(Navbar)`

    position: fixed !important;
    top: 0;

`
const MainImg = styled.div`
  
  height: 580px;
  width: 600px;
`

const UserSearchBox = styled.div`
  width: 100%;
  @media only screen and (max-width: 1015px){
    position: fixed;
    left: 50%;
    top: -14px;
    transform: translate(-50%);
    width: 530px;
  }
`;

const SwipeZone = styled.div`
  width: 100%;
  height: 200px;
  background: url(./images/web_53.jpeg);

`;

const UserWrap = styled(S.Wrap)`
  background-color: #f9f9f9;
  margin: 0 auto;
  @media only screen and (max-width: 1015px){
    background-color: #ececec;
  }
`;

const UserPageTable = styled(UserTable)`
  & th:nth-child(5), td:nth-child(5) {
    display: none !important;
  }
`;

const TableBox = styled(S.Content)`
  width: 70%;
  background: url(./images/user-img.png)no-repeat;

`;

const ChartAside = styled(S.Aside)`
  width: 30%;
  min-width: 300px;
  max-height: 580px;
  overflow: scroll;
  background: linear-gradient(to right bottom,#a7cf53,#69d872);
`;

const UserContainer = styled(S.Container)`
  width: 80%;
  @media only screen and (max-width: 1015px){
    margin: 0 auto;
  }
`;

const UserSection = styled(S.Section)`

  @media only screen and (max-width: 1015px){
    display: block;

    & ${TableBox}{
      min-width: 528px;
      width: 100%;
    }
    & ${ChartAside}{
      min-width: 528px;
      width: 60%;
      margin: 0 auto;
    }
  }
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
