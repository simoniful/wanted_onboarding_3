import styled from 'styled-components';
import SearchIcon from '../styles/icons/SearchIcon';

const SearchBox = () => {
  return (
    <SearchBoxDiv>
      <SearchInput />
      <SearchButton>
        <SearchIcon />
      </SearchButton>
    </SearchBoxDiv>
  );
};

const SearchBoxDiv = styled.div`
  width: 100%;
  height: 48px;
  max-width: 360px;
  margin: 0 0 10% 10%;
  font-size: 14px;
  font-weight: 300;
  color: #333;
`;

const SearchInput = styled.input`
  width: calc(100% - 48px);
  height: 48px;
  padding: 8px 12px;
  border: 1px solid #aac14f;
  border-radius: 6px 0 0 6px;
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
  width: 48px;
  height: 48px;
  padding: 0;
  background-color: #aac14f;
  border-radius: 0 6px 6px 0;
  cursor: pointer;
`;

export default SearchBox;
