import React from 'react';
import styled from 'styled-components';
import { AiOutlineCheck } from 'react-icons/ai';
import { COLOR_STYLES, FONT_SIZE_STYLES, SIZE_STYLES } from 'styles/styles';
import { InputWrapper } from 'styles/InputWrapper';
import useForm from 'hooks/useForm';
import { signupValidate } from 'utils/regex';
import CardNumber from 'components/CardNumber';
import Address from 'components/Address';
import useInput from 'hooks/useInput';

const SignUp = () => {
  function enroll() {
    console.log('No errors, submit callback called!');
  }

  const { values, errors, handleChange, handleSubmit } = useForm(enroll, signupValidate);
  // isChecked svg color change
  const address = useInput('');
  const cardNumber = useInput('');

  return (
    <Container>
      <h3>자란다 회원가입</h3>
      <p>10초만에 가입하고 아이와 함께 할 선생님 정보를 받아보세요</p>
      <form onSubmit={handleSubmit} noValidate>
        <InputWrapper error={errors.id}>
          <input
            autoComplete='off'
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

        <InputWrapper double='true' marginR='true' error={errors.password}>
          <input
            autoComplete='off'
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
        <InputWrapper double='true' error={errors.checkingPassword}>
          <input
            autoComplete='off'
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

        <InputWrapper double='true' marginR='true' error={errors.name}>
          <input
            autoComplete='off'
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
        <InputWrapper double='true' error={errors.age}>
          <input
            autoComplete='off'
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
          {/* <input type='text' placeholder='주소를 입력해주세요' /> */}
          <Address id='address' {...address} />
        </InputWrapper>
        <InputWrapper>
          {/* <input type='text' placeholder='카드번호, 예) 1234-1234-1234-1234' /> */}
          <CardNumber id='cardNumber' {...cardNumber} />
        </InputWrapper>

        <TermWrapper className='term'>
          <input type='checkbox' id='term' />
          <AiOutlineCheck />
          <a href='https://media.tenor.com/images/78ecca5aa42d67bb4eced2eb2ea57bd3/tenor.gif'>
            이용약관
          </a>
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
  color: ${COLOR_STYLES.greyDarker};

  h3 {
    font-size: ${FONT_SIZE_STYLES.large};
    font-weight: 600;
    margin-bottom: ${SIZE_STYLES.large};
  }

  p {
    font-size: ${FONT_SIZE_STYLES.medium};
    margin-bottom: ${SIZE_STYLES.larger};
  }

  form {
    width: 60%;
  }
`;

const TermWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${SIZE_STYLES.larger};
  font-size: ${FONT_SIZE_STYLES.small};

  input[type='checkbox'] {
    display: none;
  }

  label {
    cursor: pointer;
  }

  a {
    color: ${COLOR_STYLES.primary};
  }

  svg {
    /* on check, color change to primaryDarker */
    color: ${COLOR_STYLES.greyLighter};
    font-size: ${FONT_SIZE_STYLES.large};
    margin-right: ${SIZE_STYLES.small};
    cursor: pointer;
  }
`;

const ButtonSubmit = styled.button`
  width: 100%;
  background: ${COLOR_STYLES.primary};
  padding: ${SIZE_STYLES.medium};
  border: ${SIZE_STYLES.micro} solid ${COLOR_STYLES.primary};
  border-radius: ${SIZE_STYLES.smallest};
  cursor: pointer;
  transition: all 0.3s;

  span {
    color: ${COLOR_STYLES.white};
    font-size: ${FONT_SIZE_STYLES.medium};
    font-weight: 500;
  }

  &:hover {
    background-color: ${COLOR_STYLES.white};
    border: ${SIZE_STYLES.micro} solid ${COLOR_STYLES.primary};
    span {
      color: ${COLOR_STYLES.primaryDarker};
    }
  }
`;
