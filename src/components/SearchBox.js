import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchDropdown from './SearchDropdown';
import SearchIcon from '../styles/icons/SearchIcon';
<<<<<<< HEAD
import { COLOR_STYLES } from '../styles/styles';
=======
import { COLOR_STYLES, FONT_SIZE_STYLES } from '../styles/styles';
>>>>>>> 918724f3958f1af82b701c71db8eda98c9bc9161

const SearchBox = ({ setUserData, copiedData, setCurrentPage }) => {
  const [dropdownItem, setDropdownItem] = useState('name');
  const [dropdownName, setDropdownName] = useState('이름');
  const [inputValue, setInputValue] = useState('');

  const onInputValue = useCallback((e) => {
    const word = e.target.value;
    setInputValue(word);
  }, []);

  useEffect(() => {
    if (inputValue !== '') {
      const valueLen = inputValue.length;
      const filterdData = copiedData.filter(
        (data) => String(data[dropdownItem]).substring(0, valueLen) === inputValue,
      );

      setUserData(filterdData);
      setCurrentPage(1);
    } else {
      setUserData(copiedData);
      setCurrentPage(1);
    }
  }, [inputValue, setUserData, copiedData, dropdownItem, setCurrentPage]);

  return (
    <SearchBoxContainer>
      <SearchDropdown
        dropdownName={dropdownName}
        setDropdownItem={setDropdownItem}
        setDropdownName={setDropdownName}
        setInputValue={setInputValue}
      />
      <SearchInput
        placeholder={`${dropdownName}을 입력해주세요.`}
        onChange={onInputValue}
        type='text'
        value={inputValue}
      />
      <SearchButton>
        <SearchIcon />
      </SearchButton>
    </SearchBoxContainer>
  );
};

export default SearchBox;
<<<<<<< HEAD

export const SearchBoxContainer = styled.div`
  margin: 20px auto;
  width: 100%;
`;
=======
>>>>>>> 918724f3958f1af82b701c71db8eda98c9bc9161

const SearchBoxContainer = styled.div`
  margin: 20px auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
<<<<<<< HEAD
  float: right;
  top: unset;
  width: 48px;
  height: 48px;
  padding: 0;
  background: ${COLOR_STYLES.primaryDarker};
  border-radius: 0 6px 6px 0;
  cursor: pointer;
=======
  border: 1px solid ${COLOR_STYLES.primaryDarker};
  border-left: none;
  font-size: ${FONT_SIZE_STYLES.small};
  border-radius: 6px;
>>>>>>> 918724f3958f1af82b701c71db8eda98c9bc9161
`;

const SearchInput = styled.input`
  width: calc(100% - 48px);
<<<<<<< HEAD
  min-width: calc(572px - 48px);
  height: 48px;
  padding: 8px 12px;

  border: 1px solid ${COLOR_STYLES.primaryDarker};
=======
  min-width: calc(300px - 48px);
  padding: 0 12px;
>>>>>>> 918724f3958f1af82b701c71db8eda98c9bc9161
  border-radius: 6px 0 0 6px;
  border: none;
  :focus {
    outline: 0;
  }
  background-color: #fff;
`;
<<<<<<< HEAD
=======

const SearchButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;
  top: unset;
  width: 48px;
  padding: 15px 0;
  background: ${COLOR_STYLES.primaryDarker};
  border-radius: 0 6px 6px 0;
  cursor: pointer;
`;
>>>>>>> 918724f3958f1af82b701c71db8eda98c9bc9161
