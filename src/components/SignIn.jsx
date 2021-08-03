import React from 'react';
import styled from 'styled-components';

const SignIn = () => {
  return (
    <Container>
      <div className='text-box'>
        <h3>이미 회원이신가요?</h3>
        <p>
          자란다는 현재 대한민국 4세~13세 450만명 아이들의 1/3의 시간을 책임지는 교육,돌봄 매칭
          플랫폼입니다.
          <br />
          지금 자란다에 합류하세요.
        </p>
        <div>
          <button type='button'>
            <span>LOG IN</span>
          </button>
        </div>
      </div>
    </Container>
  );
};

export default SignIn;

const Container = styled.section`
  flex-basis: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: linear-gradient(to right bottom, #87bf43, #69d872);
  clip-path: polygon(0 0, 100% 0, 90% 100%, 0 100%);

  .text-box {
    width: 60%;
    text-align: center;

    h3 {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 30px;
    }

    p {
      font-size: 15px;
      line-height: 1.5;
      margin-bottom: 30px;
    }

    button {
      background-color: inherit;
      border: 1px solid #fff;
      border-radius: 3px;
      padding: 15px 60px;
      cursor: pointer;
      transition: all 0.3s;
    }

    button:hover {
      background-color: #fff;
      span {
        color: #69d872;
      }
    }

    span {
      color: #fff;
      font-size: 15px;
      font-weight: 500;
      transition: all 0.3s;
    }
  }
`;
