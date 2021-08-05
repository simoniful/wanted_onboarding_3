import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import DropDown from './Dropdown';
import SearchIcon from '../styles/icons/SearchIcon';

const SearchBox = ({ setUserData, copiedData }) => {
  const [dropdownItem, setDropdownItem] = useState('id');
  const [inputValue, setInputValue] = useState('');

  const onInputValue = useCallback((e) => {
    const word = e.target.value;
    setInputValue(word);
  }, []);

  useEffect(() => {
    if (inputValue !== '') {
      const valueLen = inputValue.length;

      const filterdData = copiedData.filter(
        (data) => data.name.substring(0, valueLen) === inputValue,
      );

      if (filterdData.length > 0) setUserData(filterdData);
    } else {
      setUserData(copiedData);
    }
  }, [inputValue, setUserData, copiedData, dropdownItem]);

  return (
    <SearchBoxContainer>
      <DropDown dropdownItem={dropdownItem} setDropdownItem={setDropdownItem} />
      <SearchInput
        placeholder={`${dropdownItem}을 입력해주세요.`}
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

const SearchBoxContainer = styled.div`
  width: 100%;
  height: 36px;
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: 300;
  color: #333;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #aac14f;
  border-radius: 6px 0 0 6px;
`;

const SearchInput = styled.input`
  width: calc(100% - 36px);
  padding: 8px 12px;
  border: none;

  :focus {
    outline: 0;
  }
  background-color: #fff;
`;

const SearchButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;
  top: unset;
  width: 36px;
  height: 36px;
  padding: 0;

  cursor: pointer;
`;

export default SearchBox;
