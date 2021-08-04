import React from 'react';
import styled from 'styled-components';
import { AiOutlineCheck } from 'react-icons/ai';
import { color, fontSize, size } from 'styles/styles';
import { InputWrapper } from 'styles/InputWrapper';
import useForm from 'hooks/useForm';
import { validate } from 'utils/regex';

const SignUp = () => {
  function login() {
    console.log('No errors, submit callback called!');
  }

  const { values, errors, handleChange, handleSubmit } = useForm(login, validate);
  // isChecked svg color change

  return (
    <Container>
      <h3>자란다 회원가입</h3>
      <p>10초만에 가입하고 아이와 함께 할 선생님 정보를 받아보세요</p>
      <form onSubmit={handleSubmit} noValidate>
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

        <InputWrapper double='true' marginR='true'>
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
        <InputWrapper double='true'>
          <input
            autoComplete='off'
            className={`input ${errors.checkingPassword && 'is-danger'}`}
            type='password'
            id='checkingPassword'
            name='checkingPassword'
            placeholder='비밀번호 확인'
            onChange={handleChange}
            value={values.checkingPassword || ''}
            required
          />
          {errors.checkingPassword && (
            <label htmlFor='checkingPassword' className='help is-danger'>
              {errors.checkingPassword}
            </label>
          )}
        </InputWrapper>

        <InputWrapper double='true' marginR='true'>
          <input
            autoComplete='off'
            className={`input ${errors.name && 'is-danger'}`}
            type='text'
            id='name'
            name='name'
            placeholder='이름을 입력해주세요'
            onChange={handleChange}
            value={values.name || ''}
            required
          />
          {errors.name && (
            <label htmlFor='name' className='help is-danger'>
              {errors.name}
            </label>
          )}
        </InputWrapper>
        <InputWrapper double='true'>
          <input
            autoComplete='off'
            className={`input ${errors.age && 'is-danger'}`}
            type='text'
            id='age'
            name='age'
            placeholder='나이를 입력해주세요'
            onChange={handleChange}
            value={values.age || ''}
            required
          />
          {errors.age && (
            <label htmlFor='name' className='help is-danger'>
              {errors.age}
            </label>
          )}
        </InputWrapper>
        <InputWrapper>
          <input type='text' placeholder='주소를 입력해주세요' />
        </InputWrapper>
        <InputWrapper>
          <input type='text' placeholder='카드번호, 예) 1234-1234-1234-1234' />
        </InputWrapper>

        <TermWrapper className='term'>
          <input type='checkbox' id='term' />
          <AiOutlineCheck />
          <a href='https://media.tenor.com/images/78ecca5aa42d67bb4eced2eb2ea57bd3/tenor.gif'>
            이용약관
          </a>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor='term'>을 모두 읽었으며 이에 동의합니다.</label>
        </TermWrapper>

        <ButtonSubmit type='submit'>
          <span>가입하기</span>
        </ButtonSubmit>
      </form>
    </Container>
  );
};

export default SignUp;

const Container = styled.section`
  flex-basis: 55%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${color.greyDarker};

  h3 {
    font-size: ${fontSize.large};
    font-weight: 600;
    margin-bottom: ${size.large};
  }

  p {
    font-size: ${fontSize.medium};
    margin-bottom: ${size.larger};
  }

  form {
    width: 60%;
  }
`;

const TermWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${size.larger};
  font-size: ${fontSize.small};

  input[type='checkbox'] {
    display: none;
  }

  label {
    cursor: pointer;
  }

  a {
    color: ${color.primary};
  }

  svg {
    /* on check, color change to primaryDarker */
    color: ${color.greyLighter};
    font-size: ${fontSize.large};
    margin-right: ${size.small};
    cursor: pointer;
  }
`;

const ButtonSubmit = styled.button`
  width: 100%;
  background: ${color.primary};
  padding: ${size.medium};
  border: ${size.micro} solid ${color.primary};
  border-radius: ${size.smallest};
  cursor: pointer;
  transition: all 0.3s;

  span {
    color: ${color.white};
    font-size: ${fontSize.medium};
    font-weight: 500;
  }

  &:hover {
    background-color: ${color.white};
    border: ${size.micro} solid ${color.primary};
    span {
      color: ${color.primaryDarker};
    }
  }
`;
