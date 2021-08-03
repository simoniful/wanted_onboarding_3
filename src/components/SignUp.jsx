import React from 'react';
import styled from 'styled-components';
import { AiOutlineCheck } from 'react-icons/ai';

const SignUp = () => {
  return (
    <Container>
      <div className='form-container'>
        <h3>자란다 회원가입</h3>
        <p>10초만에 가입하고 아이와 함께 할 선생님 정보를 받아보세요</p>

        <form>
          <input type='text' placeholder='아이디를 입력해주세요' />
          <input type='text' placeholder='비밀번호를 입력해주세요' className='double right' />
          <input type='text' placeholder='비밀번호 확인' className='double' />
          <input type='text' placeholder='이름을 입력해주세요' className='double right' />
          <input type='text' placeholder='나이를 입력해주세요' className='double' />
          <input type='text' placeholder='주소를 입력해주세요' />
          <input type='text' placeholder='카드번호, 예) 1234-1234-1234-1234' />

          <div className='term'>
            <input type='checkbox' id='term' />
            <AiOutlineCheck />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor='term'>이용약관을 모두 읽었으며 이에 동의합니다.</label>
          </div>
          <button type='submit'>
            <span>가입하기</span>
          </button>
        </form>
      </div>
    </Container>
  );
};

export default SignUp;

const Container = styled.section`
  flex-basis: 55%;
  display: flex;
  justify-content: center;
  align-items: center;

  .form-container {
    width: 60%;
    text-align: center;
    color: #666;

    h3 {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 30px;
    }

    p {
      margin-bottom: 30px;
    }

    input {
      width: 100%;
      padding: 15px 0;
      padding-left: 15px;
      border: 1px solid #dedede;
      border-radius: 3px;
      margin-bottom: 20px;
      font-size: 14px;
      outline: none;
    }

    input[type='checkbox'] {
      display: none;
    }

    input:focus {
      border-color: #9fe945;
    }

    button {
      width: 100%;
      background: #9fe945;
      padding: 15px;
      border: 1px solid #9fe945;
      border-radius: 3px;
      cursor: pointer;
      transition: all 0.3s;
    }

    button:hover {
      background-color: #fff;
      border: 1px solid #9fe945;
      span {
        color: #69d872;
      }
    }

    span {
      color: #fff;
      font-size: 15px;
      font-weight: 500;
    }

    .double {
      width: calc(50% - 2.5px);
    }

    .right {
      margin-right: 5px;
    }

    .term {
      display: flex;
      align-items: center;
      margin-bottom: 30px;
      font-size: 14px;

      label {
        cursor: pointer;
      }

      svg {
        /* on check, color change to #69d872 */
        color: #dedede;
        font-size: 20px;
        margin-right: 10px;
        cursor: pointer;
      }
    }
  }
`;
