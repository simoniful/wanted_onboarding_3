import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLOR_STYLES, FONT_SIZE_STYLES } from '../styles/styles';

const AccountButton = ({ onClick, content }) => {
  return <Button onClick={onClick}>{content}</Button>;
};

const Button = styled.button`
  width: 45%;
  height: 36px;
  border: none;
  background: ${COLOR_STYLES.primaryDarker};
  &:hover {
    background: ${COLOR_STYLES.primary};
    transition: 0.5s;
  }
  color: #fff;
  font-size: ${FONT_SIZE_STYLES.medium};
  cursor: pointer;
`;

export default AccountButton;
