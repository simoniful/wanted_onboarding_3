import React, { useState } from 'react';
import styled from 'styled-components';
import { color, fontSize, size } from 'styles/styles';
import SignInForm from './SignInForm';

const SignIn = () => {
  const [isSignInFormOpen, setIsSignInFormOpen] = useState(false);
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    if (!isSignInFormOpen) return setIsSignInFormOpen(true);
    // if form is open, validate login form and move to userPage, isSignInFormOpen to false
  };

  return (
    <Container isSignInFormOpen={isSignInFormOpen}>
      <form>
        <SignInForm isSignInFormOpen={isSignInFormOpen} />
        <ButtonLogin type='submit' onClick={handleSubmitLogin}>
          <span>LOG IN</span>
        </ButtonLogin>
      </form>
    </Container>
  );
};

export default SignIn;

const Container = styled.section`
  flex-basis: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${color.white};
  background: ${color.primaryGradient};
  clip-path: polygon(0 0, 100% 0, 90% 100%, 0 100%);

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: ${(props) => props.isSignInFormOpen && '50%'};
  }
`;

const ButtonLogin = styled.button`
  background-color: inherit;
  border: ${size.micro} solid ${color.white};
  border-radius: ${size.smallest};
  padding: ${size.medium} ${size.largest};
  margin-top: ${size.larger};
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
