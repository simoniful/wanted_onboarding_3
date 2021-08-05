import React from 'react';
import styled from 'styled-components';
import { fontSize, size } from 'styles/styles';
import { InputWrapper } from 'styles/InputWrapper';

const SignInForm = ({ isSignInFormOpen, values, errors, handleChange }) => {
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
        <input
          autoComplete='off'
          className={`input ${errors.id && 'is-danger'}`}
          type='text'
          id='id'
          name='id'
          placeholder='아이디를 입력해주세요'
          onChange={handleChange}
          value={values.id || ''}
          required
        />
        {errors.id && (
          <label htmlFor='id' className='help is-danger'>
            {errors.id}
          </label>
        )}
      </InputWrapper>
      <InputWrapper>
        <input
          autoComplete='off'
          className={`input ${errors.password && 'is-danger'}`}
          type='password'
          id='password'
          name='password'
          placeholder='비밀번호를 입력해주세요'
          onChange={handleChange}
          value={values.password || ''}
          required
        />
        {errors.password && (
          <label htmlFor='password' className='help is-danger'>
            {errors.password}
          </label>
        )}
      </InputWrapper>
    </>
  );
};

export default SignInForm;

const TextContainer = styled.div`
  width: 60%;
  text-align: center;

  h3 {
    font-size: ${fontSize.large};
    font-weight: 600;
    margin-bottom: ${size.larger};
  }

  p {
    font-size: ${fontSize.medium};
    line-height: 1.5;
  }
`;
