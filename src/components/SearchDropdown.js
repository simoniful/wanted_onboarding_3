import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { COLOR_STYLES } from 'styles/styles';
import { SEARCH_DROPDOWN_ITEMS } from 'utils/config';

const DropdownContainer = styled.div`
  background: ${COLOR_STYLES.primaryDarker};
  color: white;
  padding: 6px 0;
  border-radius: 6px 0 0 6px;
`;

const DropdownBody = styled.p`
  width: 150px;

  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DropdownMenu = styled.ul`
  display: ${(props) => (props.isActive ? `block` : `none`)};
  position: absolute;
  background-color: white;
  border: 1px solid black;
  width: 150px;
  background: ${COLOR_STYLES.primaryDarker};
  color: white;
`;

const DropdownItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  border: 1px solid black;
  cursor: pointer;

  &:hover {
    border: 1px solid red;
  }
`;

const SearchDropdown = ({ dropdownName, setDropdownItem, setDropdownName, setInputValue }) => {
  const [dropdownToggle, setDropdownToggle] = useState(false);

  const onDropdownToggle = useCallback(() => {
    setDropdownToggle((prev) => !prev);
  }, []);

  const onSelectDropdownItem = useCallback(
    (data) => {
      const { value, title } = data;
      setDropdownItem(value);
      setDropdownName(title);
      setInputValue('');
    },
    [setDropdownItem, setDropdownName, setInputValue],
  );

  return (
    <DropdownContainer onClick={onDropdownToggle} onMouseLeave={() => setDropdownToggle(false)}>
      <DropdownBody>검색 필터 : {dropdownName}</DropdownBody>
      <DropdownMenu isActive={dropdownToggle}>
        {SEARCH_DROPDOWN_ITEMS.map((data) => (
          <DropdownItem key={data.id} onClick={() => onSelectDropdownItem(data)}>
            <p>검색 필터 : {data.title}</p>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </DropdownContainer>
  );
};

export default SearchDropdown;
