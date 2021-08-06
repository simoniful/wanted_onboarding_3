import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { COLOR_STYLES, FONT_SIZE_STYLES, SIZE_STYLES } from 'styles/styles';
import styled from 'styled-components';

const Radios = ({ handleClick, isChecked }) => {
  return (
    <RadioContainer>
      <RadioBox id='parent' isChecked={isChecked} onClick={handleClick}>
        <AiOutlineCheck />
        <label htmlFor='parent'>부모님</label>
      </RadioBox>
      <RadioBox id='teacher' isChecked={!isChecked} onClick={handleClick}>
        <AiOutlineCheck />
        <label htmlFor='teacher'>선생님</label>
      </RadioBox>
    </RadioContainer>
  );
};

export default Radios;

const RadioContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  margin-bottom: ${SIZE_STYLES.large};
`;

const RadioBox = styled.div`
  display: flex;
  align-items: center;
  font-size: ${FONT_SIZE_STYLES.small};
  cursor: pointer;

  label {
    cursor: pointer;
  }

  svg {
    color: ${(props) => (props.isChecked ? COLOR_STYLES.primaryDarker : COLOR_STYLES.greyLighter)};
    font-size: ${FONT_SIZE_STYLES.large};
    margin-right: ${SIZE_STYLES.small};
  }
`;
