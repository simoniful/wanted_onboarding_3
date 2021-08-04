import React from 'react';
import styled from 'styled-components';

const AccountButton = ({ onClick, content }) => {
  return <Button onClick={onClick}>{content}</Button>;
};

const Button = styled.button`
  width: 100%;
  height: 36px;
  border-radius: 8px;
  border: none;
  background: #8263cc;
  &:hover {
    background-color: #6243aa;
  }
  color: #fff;
  cursor: pointer;
`;

export default AccountButton;
