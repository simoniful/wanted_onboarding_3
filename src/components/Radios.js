import React from 'react';
import styled from 'styled-components';
import { COLOR_STYLES, FONT_SIZE_STYLES, SIZE_STYLES } from 'styles/styles';
import { InputWrapper } from 'styles/InputWrapper';

const Radios = () => {
  return (
    <InputWrapper>
      <RadioContainer>
        <RadioBox>
          <input type='radio' name='userType' value='teacher' /> 선생님
        </RadioBox>
        <RadioBox>
          <input type='radio' name='userType' value='parent' /> 학부모
        </RadioBox>
      </RadioContainer>
    </InputWrapper>
  );
};

export default Radios;

const RadioContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
`;

const RadioBox = styled.div`
  font-size: 14px;
  line-height: 18px;
  align-content: center;
`;
