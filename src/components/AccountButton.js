import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { color, fontSize } from '../styles/styles';

const AccountButton = ({ onClick, content }) => (
  <Button onClick={onClick}>
    <Link to='/login'>{content}</Link>
  </Button>
);

const Button = styled.button`
  width: 45%;
  height: 36px;
  border: none;
  background: ${color.primaryDarker};
  &:hover {
    background: ${color.primary};
    transition: 0.5s;
  }
  color: ${color.white};
  font-size: ${fontSize.medium};
  cursor: pointer;
`;

export default AccountButton;
