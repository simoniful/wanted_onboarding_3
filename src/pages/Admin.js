import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { layouts as S } from 'styles/layouts';
import GlobalStyles from 'styles/GlobalStyles';
import Navbar from 'components/Navbar';
import Chart from 'components/Chart';
import UserTable from 'components/UserTable';
import AccountButton from 'components/AccountButton';
import SearchBox from 'components/SearchBox';
import { tempGetStorage, tempSetStorage } from 'utils/storage';
import { GET_USER_STORAGE_KEYWORD } from '../utils/config';



const pageType = 'admin';
const Admin = () => {
  // 페이지 관련 state (수정예정)
  const [user, setUser] = useState('관리자A');
  const [menu, setMenu] = useState([]);
  const history = useHistory();


  // 데이터 테이블 관련 state 입니다.
  const [userData, setUserData] = useState([]);
  const [copiedData, setCopiedData] = useState([]);

  const user1 = '관리자1';
  const menuList = ['menu1', 'menu2', 'menu3', 'menu4'];

  const onLogout = () => history.push('/');
  const onCreateAccount = () => {}; // TODO 1. 회원가입 모달창 띄우기

  useEffect(() => {
    // TODO 2. 비정상적인 url 접근 막기 & 메인화면으로 redirect
    // TODO 3. history에서 state : {user, menu} 받아서 setState

    tempSetStorage();
    setUserData(tempGetStorage(GET_USER_STORAGE_KEYWORD));
    setCopiedData(tempGetStorage(GET_USER_STORAGE_KEYWORD));
  }, []);

  return (
    <>
      <GlobalStyles />
      <S.Wrap>
        <Navbar user={user1} menuList={menuList} userMenu={[]} />
        <AdminContainer >
          <AdminSection>
            <TableBox>
              <SearchBox userData={userData} setUserData={setUserData} copiedData={copiedData} />
              <UserTable userData={userData} pageType={pageType} />
            </TableBox>
            <ChartAside>
              <S.Sidebar>
                <S.AccountBox>
                  <AccountButton onClick={onCreateAccount} content='계정 생성' />
                  <AccountButton onClick={onLogout} content='로그아웃' />
                </S.AccountBox>
                <Chart />
              </S.Sidebar>
            </ChartAside>
          </AdminSection>
        </AdminContainer>
      </S.Wrap>
    </>
  );
};

const TableBox = styled(S.Content)`
  width: 60%;
  min-width: 600px;
`;

const ChartAside = styled(S.Aside)`
  width: 40%;
  min-width: 300px;
`;

const AdminContainer = styled(S.Container)`
  @media only screen and (max-width: 1055px){
    margin: 0 auto;
  }
`;

const AdminSection = styled(S.Section)`
  
  @media only screen and (max-width: 1055px){
    display: block;

    & ${TableBox}{
      min-width: 528px;
      width: 100%;
    }
    & ${ChartAside}{
      min-width: 528px;
      width: 100%;
    }
  }
`;


export default Admin;
