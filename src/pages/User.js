import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { layouts as S } from 'styles/layouts';
import GlobalStyles from 'styles/GlobalStyles';
import Navbar from 'components/Navbar';
import Graph from 'components/Chart';
import UserTable from 'components/UserTable';
import SearchBox from 'components/SearchBox';
import { tempGetStorage, tempSetStorage } from 'utils/storage/index';
import { GET_USER_STORAGE_KEYWORD } from '../utils/config';

const User = () => {
  // 페이지 관련 state (수정예정)
  const [user, setUser] = useState('사용자');
  const [menu, setMenu] = useState(['menu1', 'menu2', 'menu3', 'menu4']);
  const history = useHistory();

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
        <Navbar user={user} menuList={menu} userMenu={[]} />
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

export default User;
