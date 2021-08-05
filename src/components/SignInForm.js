import React from 'react';
import styled from 'styled-components';
import { FONT_SIZE_STYLES, SIZE_STYLES } from 'styles/styles';
import { InputWrapper } from 'styles/InputWrapper';

const SignInForm = ({ isSignInFormOpen }) => {
  if (!isSignInFormOpen)
    return (
      <TextContainer>
        <h3>이미 회원이신가요?</h3>
        <p>
          자란다는 현재 대한민국 4세~13세 450만명 아이들의 1/3의 시간을 책임지는 교육,돌봄 매칭
          플랫폼입니다.
          <br />
          지금 자란다에 합류하세요.
        </p>
      </TextContainer>
    );

  return (
    <>
      <InputWrapper>
        <input type='text' id='id' name='id' placeholder='아이디를 입력해주세요' />
        {/* <label htmlFor='id'>아이디를 다시 확인해주세요.</label> */}
      </InputWrapper>
      <InputWrapper>
        <input
          type='password'
          id='password'
          name='password'
          placeholder='비밀번호를 입력해주세요'
        />
        {/* <label htmlFor='id'>비밀번호가 일치하지 않습니다.</label> */}
      </InputWrapper>
    </>
  );
};

export default SignInForm;

const TextContainer = styled.div`
  width: 60%;
  text-align: center;

  h3 {
    font-size: ${FONT_SIZE_STYLES.large};
    font-weight: 600;
    margin-bottom: ${SIZE_STYLES.larger};
  }

  p {
    font-size: ${FONT_SIZE_STYLES.medium};
    line-height: 1.5;
  }
`;
