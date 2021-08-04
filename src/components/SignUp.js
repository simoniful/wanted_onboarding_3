import React from 'react';
import styled from 'styled-components';
import { AiOutlineCheck } from 'react-icons/ai';
import { color, fontSize, size } from 'styles/styles';

const SignUp = () => {
  // isError && <label>
  // isError && change input border color to red
  // isChecked svg color change
  return (
    <Container>
      <h3>자란다 회원가입</h3>
      <p>10초만에 가입하고 아이와 함께 할 선생님 정보를 받아보세요</p>
      <form>
        <InputWrapper>
          <input type='text' id='id' name='id' placeholder='아이디를 입력해주세요' />
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          {/* <label htmlFor='id'>아이디를 다시 입력해주세요.</label> */}
        </InputWrapper>

        <InputWrapper double='true' marginR='true'>
          <input type='text' id='password' name='password' placeholder='비밀번호를 입력해주세요' />
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          {/* <label htmlFor='password'>비밀번호를 다시 입력해주세요.</label> */}
        </InputWrapper>
        <InputWrapper double='true'>
          <input type='text' id='password-re' name='password-re' placeholder='비밀번호 확인' />
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          {/* <label htmlFor='password-re'>비밀번호가 일치하지 않습니다.</label> */}
        </InputWrapper>

        <InputWrapper double='true' marginR='true'>
          <input type='text' id='name' name='name' placeholder='이름을 입력해주세요' />
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          {/* <label htmlFor='name'>이름을 다시 입력해주세요.</label> */}
        </InputWrapper>
        <InputWrapper double='true'>
          <input type='text' id='age' name='age' placeholder='나이를 입력해주세요' />
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          {/* <label htmlFor='age'>not displaying</label> */}
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

const InputWrapper = styled.div`
  display: inline-block;
  width: ${(props) => (props.double ? 'calc(50% - 3px)' : '100%')};
  text-align: start;
  margin-right: ${(props) => props.marginR && size.smaller};
  margin-bottom: ${size.medium};

  input {
    width: 100%;
    padding: ${size.medium} 0;
    padding-left: ${size.medium};
    border: ${size.micro} solid ${color.greyLighter};
    border-radius: ${size.smallest};
    font-size: ${fontSize.small};
    outline: none;

    &:focus {
      border-color: ${color.primary};
    }
  }

  label {
    font-size: ${fontSize.smaller};
    cursor: pointer;
    color: ${color.red};
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
