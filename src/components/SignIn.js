import React, { useState } from 'react';
import styled from 'styled-components';
import { COLOR_STYLES, FONT_SIZE_STYLES, SIZE_STYLES } from 'styles/styles';
import useForm from 'hooks/useForm';
import { validate } from 'utils/regex';
import SignInForm from './SignInForm';

const SignIn = () => {
  function login() {
    console.log('No errors, submit callback called!');
  }

  const { values, errors, handleChange, handleSubmit } = useForm(login, validate);

  const [isSignInFormOpen, setIsSignInFormOpen] = useState(false);
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    if (!isSignInFormOpen) return setIsSignInFormOpen(true);
    handleSubmit();
    // if form is open, validate login form and move to userPage, isSignInFormOpen to false
  };

  return (
    <Container isSignInFormOpen={isSignInFormOpen}>
      <form noValidate>
        <SignInForm
          isSignInFormOpen={isSignInFormOpen}
          values={values}
          errors={errors}
          handleChange={handleChange}
        />
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
  color: ${COLOR_STYLES.white};
  background: ${COLOR_STYLES.primaryGradient};
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
  border: ${SIZE_STYLES.micro} solid ${COLOR_STYLES.white};
  border-radius: ${SIZE_STYLES.smallest};
  padding: ${SIZE_STYLES.medium} ${SIZE_STYLES.largest};
  margin-top: ${SIZE_STYLES.larger};
  cursor: pointer;
  transition: all 0.3s;

  span {
    color: ${COLOR_STYLES.white};
    font-size: ${FONT_SIZE_STYLES.medium};
    font-weight: 500;
    transition: all 0.3s;
  }

  &:hover {
    background-color: ${COLOR_STYLES.white};
    span {
      color: ${COLOR_STYLES.primaryDarker};
    }
  }
`;
