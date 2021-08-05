import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { layouts as S } from 'styles/layouts';
import GlobalStyles from 'styles/GlobalStyles';
import Navbar from 'components/Navbar';
import Chart from 'components/Chart';
import UserTable from 'components/UserTable';
import AccountButton from 'components/AccountButton';
import SearchBox from 'components/SearchBox';
import { tempGetStoreage, tempSetStoreage } from 'utils/storage';
import { GET_USER_STORAGE_KEYWARD } from '../utils/config';




const Admin = () => {
  // 사용자 test data & 버튼클릭 test 이벤트
  const user = '관리자1';
  const menuList = ['menu1', 'menu2', 'menu3', 'menu4'];
  const logout = () => {};


  // 데이터 테이블 관련 state 입니다.
  const [userData, setUserData] = useState([]);
  const [copiedData, setCopiedData] = useState([]);

  useEffect(() => {
    tempSetStoreage();
    setUserData(tempGetStoreage(GET_USER_STORAGE_KEYWARD));
    setCopiedData(tempGetStoreage(GET_USER_STORAGE_KEYWARD));
  }, []);

  return (
    <>
      <GlobalStyles />
      <S.Wrap>
        <Navbar user={user} menuList={menuList} userMenu={[]} />
        <AdminContainer >
          <AdminSection>
            <TableBox>
              <SearchBox userData={userData} setUserData={setUserData} copiedData={copiedData} />
              <UserTable userData={userData} />
            </TableBox>
            <ChartAside>
              <S.Sidebar>
                <S.AccountBox>
                  <AccountButton onClick={logout} content='계정 생성' />
                  <AccountButton onClick={logout} content='로그아웃' />
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
  @media only screen and (max-width: 1287px){
    margin: 0 calc( (${window.innerWidth}px - 600px) / 2 ) !important;
  }
`
const AdminSection = styled(S.Section)`
@media only screen and (max-width: 973px){
  display: block;

  & ${TableBox}{
    width: 100%
    margin: 0 auto;
  }
  & ${ChartAside}{
    width: 60%
  }
}
`

export default Admin;
