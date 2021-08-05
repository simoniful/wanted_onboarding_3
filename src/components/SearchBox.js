import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchIcon from '../styles/icons/SearchIcon';

const SearchBox = ({ setUserData, copiedData }) => {
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
  }, [inputValue, setUserData, copiedData]);

  return (
    <SearchBoxContainer>
      <SearchInput
        placeholder='이름을 입력해주세요.'
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

export const SearchBoxContainer = styled.div`
  width: 100%;
  height: 36px;
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: 300;
  color: #333;
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
  background-color: #aac14f;
  border-radius: 0 6px 6px 0;
  cursor: pointer;
`;

const SearchInput = styled.input`
  width: calc(100% - 36px);
  height: 36px;
  padding: 8px 12px;
  border: 1px solid #aac14f;
  border-radius: 6px 0 0 6px;
  :focus {
    outline: 0;
  }
  background-color: #fff;
`;

export default SearchBox;
