import React from 'react';
import styled from 'styled-components';
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

const LogoDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  transform: translate(15%, 50%);

  h2 {
    color: #fff;
    font-size: 2rem;
  }
`;
