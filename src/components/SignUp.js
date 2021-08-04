import React from 'react';
import styled from 'styled-components';
import { AiOutlineCheck } from 'react-icons/ai';

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
  color: #666;

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 20px;
  }

  p {
    font-size: 1rem;
    margin-bottom: 30px;
  }

  form {
    width: 60%;
  }
`;

const InputWrapper = styled.div`
  display: inline-block;
  width: ${(props) => (props.double ? 'calc(50% - 2.5px)' : '100%')};
  text-align: start;
  margin-right: ${(props) => props.marginR && '5px'};
  margin-bottom: 15px;

  input {
    width: 100%;
    padding: 15px 0;
    padding-left: 15px;
    border: 1px solid #dedede;
    border-radius: 3px;
    font-size: 14px;
    outline: none;

    &:focus {
      border-color: #9fe945;
    }
  }

  label {
    font-size: 10px;
    cursor: pointer;
    color: #ff0000;
  }
`;

const TermWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  font-size: 0.875rem;

  input[type='checkbox'] {
    display: none;
  }

  label {
    cursor: pointer;
  }

  a {
    color: #9fe945;
  }

  svg {
    /* on check, color change to #69d872 */
    color: #dedede;
    font-size: 1.25rem;
    margin-right: 10px;
    cursor: pointer;
  }
`;

const ButtonSubmit = styled.button`
  width: 100%;
  background: #9fe945;
  padding: 15px;
  border: 1px solid #9fe945;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.3s;

  span {
    color: #fff;
    font-size: 0.9375rem;
    font-weight: 500;
  }

  &:hover {
    background-color: #fff;
    border: 1px solid #9fe945;
    span {
      color: #69d872;
    }
  }
`;
