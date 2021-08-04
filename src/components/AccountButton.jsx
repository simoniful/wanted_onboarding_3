import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AccountButton = ({ onClick, content }) => {
  return (
    <Button onClick={onClick}>
      <Link to='/login'>{content}</Link>
    </Button>
  );
};

const Button = styled.button`
  width: 110px;
  height: 36px;
  border-radius: 26px;
  border: none;
  background: #8263cc;
  &:hover {
    background-color: #6243aa;
  }
  color: #fff;
  cursor: pointer;
`;

export default AccountButton;
