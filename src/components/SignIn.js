import React from 'react';
import styled from 'styled-components';
import { color, fontSize, size } from 'styles/styles';

const SignIn = () => {
  return (
    <Container>
      {/* onClick button login, this text container should be changed to  the login form */}
      <TextContainer>
        <h3>이미 회원이신가요?</h3>
        <p>
          자란다는 현재 대한민국 4세~13세 450만명 아이들의 1/3의 시간을 책임지는 교육,돌봄 매칭
          플랫폼입니다.
          <br />
          지금 자란다에 합류하세요.
        </p>
      </TextContainer>
      <ButtonLogin type='button'>
        <span>LOG IN</span>
      </ButtonLogin>
    </Container>
  );
};

export default SignIn;

const Container = styled.section`
  flex-basis: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${color.white};
  background: ${color.primaryGradient};
  clip-path: polygon(0 0, 100% 0, 90% 100%, 0 100%);
`;

const TextContainer = styled.div`
  width: 60%;
  text-align: center;

  h3 {
    font-size: ${fontSize.large};
    font-weight: 600;
    margin-bottom: 30px;
  }

  p {
    font-size: ${fontSize.medium};
    line-height: 1.5;
    margin-bottom: 30px;
  }
`;

const ButtonLogin = styled.button`
  background-color: inherit;
  border: ${size.micro} solid ${color.white};
  border-radius: ${size.smallest};
  padding: ${size.medium} ${size.largest};
  cursor: pointer;
  transition: all 0.3s;

  span {
    color: ${color.white};
    font-size: ${fontSize.medium};
    font-weight: 500;
    transition: all 0.3s;
  }

  &:hover {
    background-color: ${color.white};
    span {
      color: ${color.primaryDarker};
    }
  }
`;
