import React from 'react';
import styled from 'styled-components';
import { COLOR_STYLES, FONT_SIZE_STYLES } from 'styles/styles';
import { SignIn, SignUp } from 'components';

const Login = () => (
  <Container>
    <Logo href='/user'>
      <h2>Jaranda</h2>
    </Logo>
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
const Logo = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  transform: translate(15%, 50%);
  cursor: pointer;

  h2 {
    color: ${COLOR_STYLES.white};
    font-size: ${FONT_SIZE_STYLES.larger};
  }
`;
