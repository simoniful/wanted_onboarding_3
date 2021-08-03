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
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  max-width: 360px;
  font-size: 14px;
  font-weight: 300;
  color: #333;
`;

const SearchInput = styled.input`
  width: calc(100% - 40px);
  height: 40px;
  padding: 8px 12px;
  border: 1px solid #81c147 ;
  border-radius: 6px 0 0 6px;
  :focus {
    outline: 0;
  }
  background-color: #fff;
`;

const SearchButton = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  top: unset;
  width: 40px;
  height: 40px;
  padding: 0;
  background-color: #81c147 ;
  border-radius: 0 6px 6px 0;
  cursor: pointer;
`;

export default SearchBox;
