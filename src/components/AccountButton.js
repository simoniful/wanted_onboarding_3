import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { color, fontSize } from '../styles/styles';

const AccountButton = ({ onClick, content, width, height }) => (
  <Button width={width} height={height} onClick={onClick}>
    <Link to='/login'>{content}</Link>
  </Button>
);

const Button = styled.button`
  width: ${props => props.width ? props.width : '45%'};
  height: ${props => props.height ? props.height : '36px;'};
  border: none;
  background: ${color.primaryDarker};
  &:hover {
    background: ${color.primary};
    transition: 0.5s;
  }
  color: #fff;
  font-size: ${fontSize.medium};
  cursor: pointer;
`;

export default AccountButton;
