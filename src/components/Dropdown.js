import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { SEARCH_DROPDOWN_ITEMS } from 'utils/config';

const DropdownContainer = styled.div``;

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
`;

const DropdownItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
`;

const Dropdown = ({ setDropdownItem, dropdownName, setDropdownName }) => {
  const [dropdownToggle, setDropdownToggle] = useState(false);

  const onDropdownToggle = useCallback(() => {
    setDropdownToggle((prev) => !prev);
  }, []);

  const onSelectDropdownItem = useCallback(
    (data) => {
      setDropdownItem(data.value);
      setDropdownName(data.title);
    },
    [setDropdownItem, setDropdownName],
  );

  return (
    <DropdownContainer onClick={onDropdownToggle}>
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

export default Dropdown;
