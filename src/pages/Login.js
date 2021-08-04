import React from 'react';
import styled from 'styled-components';
import { color, fontSize } from 'styles/styles';
import { SignIn, SignUp } from 'components';

const Login = () => (
  <Container>
    <LogoDiv>
      <h2>Jaranda</h2>
    </LogoDiv>
    <SignIn />
    <SignUp />
  </Container>
);

export default Login;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
`;

// change to Link
const LogoDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  transform: translate(15%, 50%);
  cursor: pointer;

  h2 {
    color: ${color.white};
    font-size: ${fontSize.larger};
  }
`;
