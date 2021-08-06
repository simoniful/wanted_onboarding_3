import React from 'react';
import styled from 'styled-components';
import { COLOR_STYLES, FONT_SIZE_STYLES } from '../styles/styles';

const AccountButton = ({ onClick, content, width, height }) => (
  <Button width={width} height={height} onClick={onClick}>
    {content}
  </Button>
);

const Button = styled.button`
  width: ${(props) => (props.width ? props.width : '45%')};
  height: ${(props) => (props.height ? props.height : '36px;')};
  border: none;
  background: ${COLOR_STYLES.primaryDarker};
  &:hover {
    background: ${COLOR_STYLES.primary};
    transition: 0.5s;
  }
  color: ${COLOR_STYLES.white};
  font-size: ${FONT_SIZE_STYLES.medium};
  cursor: pointer;
`;

export default AccountButton;
