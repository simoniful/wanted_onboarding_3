import React, { useEffect, useState } from 'react';
import { layouts as S } from 'styles/layouts';
import GlobalStyles from 'styles/GlobalStyles';
import Navbar from 'components/Navbar';
import Graph from 'components/Chart';
import UserTable from 'components/UserTable';
import AccountButton from 'components/AccountButton';
import SearchBox from 'components/SearchBox';
import { tempGetStorage, tempSetStorage } from 'utils/storage/index';
import { GET_USER_STORAGE_KEYWORD } from '../utils/config';

const Admin = () => {
  // 사용자 test data & 버튼클릭 test 이벤트
  const user = 'user1';
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

  return (
    <>
      <GlobalStyles />
      <S.Wrap>
        <Navbar user={user} menuList={menuList} userMenu={userMenu} />
        <S.Container>
          <S.Section>
            <S.Content>
              <SearchBox userData={userData} setUserData={setUserData} copiedData={copiedData} />
              <UserTable userData={userData} />
            </S.Content>
            <S.Aside>
              <S.Sidebar>
                <Graph />
              </S.Sidebar>
            </S.Aside>
          </S.Section>
        </S.Container>
      </S.Wrap>
    </>
  );
};

export default Admin;
