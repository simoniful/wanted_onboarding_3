import React from 'react';
import styled from 'styled-components';
import { SignIn, SignUp } from 'components';

const Login = () => (
  <Container>
    <h2>Jaranda</h2>
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

  h2 {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    transform: translate(15%, 50%);
    color: #fff;
    font-size: 30px;
  }
`;
