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
  width: 100px;
  min-width: 70px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

const DropdownMenu = styled.ul`
  display: ${(props) => (props.isActive ? `block` : `none`)};
  position: absolute;
  background-color: white;
  width: 150px;
  background: ${COLOR_STYLES.primaryDarker};
  color: white;
  border-radius: 0 0 6px 6px;
`;

const DropdownItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  cursor: pointer;
  border-top: 1px solid white;

  &:hover {
    border-left: 1px solid white;
    border-right: 1px solid white;
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
      <DropdownBody>{dropdownName}</DropdownBody>
      <DropdownMenu isActive={dropdownToggle}>
        {SEARCH_DROPDOWN_ITEMS.map((data) => (
          <DropdownItem key={data.id} onClick={() => onSelectDropdownItem(data)}>
            <p>{data.title}</p>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </DropdownContainer>
  );
};

export default SearchDropdown;
