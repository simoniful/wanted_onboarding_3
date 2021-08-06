import React, { useEffect, useState } from 'react';

import { layouts as S } from 'styles/layouts';
import styled from 'styled-components';
import GlobalStyles from 'styles/GlobalStyles';
import Navbar from 'components/Navbar';
import UserTable from 'components/UserTable';
import AccountButton from 'components/AccountButton';
import SearchBox from 'components/SearchBox';
import UserCard from 'components/UserCard'
import { tempGetStorage, tempSetStorage } from 'utils/storage/index';
import { GET_USER_STORAGE_KEYWORD } from '../utils/config';
import { currentUsers } from '../utils/currentUsers';



let teacherList = [];
const pageType = 'user';

const Admin = () => {
  // 사용자 test data & 버튼클릭 test 이벤트
  const [user, setUser] = useState('사용자1');
  // const [menuList, setMenuList] = useState(['menu1', 'menu2', 'menu3', 'menu4']); // menu mock data
  const userMenu = ['마이페이지', '이용안내'];
  const menuList = ['선생님보기', '신청서작성', '신청내역', '방문일정', '방문일지'];
  const logout = () => {};

  // 데이터 테이블 관련 state 입니다.
  const [userData, setUserData] = useState([]);
  const [copiedData, setCopiedData] = useState([]);

  useEffect(() => {
    tempSetStorage();
    setUserData(tempGetStorage(GET_USER_STORAGE_KEYWORD));
    setCopiedData(tempGetStorage(GET_USER_STORAGE_KEYWORD));
   
  }, []);

  const [currentUserData, setCurrentUserData] = useState([]);
  const [firstIndex, setFirstIndex] = useState(null);
  const [lastIndex, setLastIndex] = useState(null);


  useEffect(() => {
    setCurrentUserData((currentUsers(userData, firstIndex, lastIndex)));
  }, [userData, firstIndex, lastIndex]);

  teacherList = [];
  for(let i =0; i<userData.length; i++){
    if(userData[i].userType==='teacher'){
      teacherList.push(userData[i])
    }
  }

  console.log(teacherList);
  if (userData.length === 0) {
    return <p>데이터가 비어 있습니다.</p>;
  }

  return (
    <>
      <GlobalStyles />
      <UserWrap>
        <UserNavbar user={user} menuList={menuList} userMenu={userMenu} />
        <SwipeZone>
      
        </SwipeZone>
        <UserContainer>
          <UserSection>
            <TableBox>
              <UserSearchBox>
                <SearchBox userData={teacherList} setUserData={setUserData} copiedData={copiedData} />
              </UserSearchBox>
              <UserPageTable userData={teacherList} pageType={pageType} />
            </TableBox>
            <ChartAside>
              <S.Sidebar>
                {teacherList.map((teacher, key)=>(
                  <UserCard teacherName={teacher.name}/>
                ))}
              </S.Sidebar>
            </ChartAside>
          </UserSection>
        </UserContainer>
      </UserWrap>
    </>
  );
};

const UserNavbar = styled(Navbar)`

    position: fixed !important;
    top: 0;

`

const UserSearchBox = styled.div`
  @media only screen and (max-width: 800px){
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

  @media only screen and (max-width: 800px){
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
  min-width: 600px;
`;

const ChartAside = styled(S.Aside)`
  width: 30%;
  min-width: 300px;
  max-height: 580px;
  overflow: scroll;
  background: linear-gradient(to right bottom,#a7cf53,#69d872);
`;

const UserContainer = styled(S.Container)`
  @media only screen and (max-width: 1055px){
    margin: 0 auto;
  }
`;

const UserSection = styled(S.Section)`
  
  @media only screen and (max-width: 1055px){
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

export default Admin;
