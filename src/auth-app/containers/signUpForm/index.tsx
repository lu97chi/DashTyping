// @flow
import React from 'react';
import {
  // eslint-disable-next-line no-trailing-spaces
  Icon,
  Input,
  Button,
  Alert,
} from 'antd';
import { component, useAppConfig } from 'react-garden-kit';
import { AppParams } from '../../app.params';
import { Container, ButtonContainer } from './styled';
import useSignUpForm from './hooks/useSignUpForm';

type Props = {
  login: (email: string, password: string) => {};
  register: (login: string, password: string) => {};
};

const SignUpForm = ({ login, register }: Props) => {
  const appConfig = useAppConfig();
  const {
    openRegister,
    setOpenRegister,
    onEmailInput,
    onPasswordInput,
    onPasswordConfirmInput,
    email,
    password,
    error,
    tryIt,
    setError,
    loading,
    passwordConfirm,
  } = useSignUpForm();
  const appParams = appConfig.params as AppParams;
  const emailFormOptions = appParams.emailFormOptions || {};
  const { errorDictionary, disableSignUp } = appParams;
  const loginForm = (
    <form onSubmit={(e) => e.preventDefault()}>
      <Input
        onInput={onEmailInput}
        prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
        placeholder={emailFormOptions.emailPlaceHolder || 'Email'}
      />
      <Input
        onInput={onPasswordInput}
        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
        type="password"
        placeholder={emailFormOptions.passwordPlaceHolder || 'Contraseña'}
      />
      <ButtonContainer>
        <Button
          onClick={() => {
            tryIt(login)(email.trim(), password.trim());
          }}
          size="large"
          style={{ width: '100%' }}
          type="primary"
          htmlType="submit"
          className="login-form-button"
          loading={loading}>
          {emailFormOptions.buttonLoginName || 'Acceder'}
        </Button>
        {!disableSignUp ? (
          <Button
            onClick={() => setOpenRegister(true)}
            size="large"
            style={{ width: '100%' }}
            type="default"
            className="login-form-button">
            {emailFormOptions.buttonSignUpName || 'Registrar'}
          </Button>
        ) : null}
      </ButtonContainer>
    </form>
  );

  const registerForm = (
    <form onSubmit={(e) => e.preventDefault()}>
      <Input
        onInput={onEmailInput}
        prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
        placeholder={emailFormOptions.emailPlaceHolder || 'Email'}
      />
      <Input
        onInput={onPasswordInput}
        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
        type="password"
        placeholder={emailFormOptions.passwordPlaceHolder || 'Contraseña'}
      />
      <Input
        onInput={onPasswordConfirmInput}
        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
        type="password"
        placeholder={
          emailFormOptions.confirmPasswordHolder || 'Confirmar contraseña'
        }
      />
      <ButtonContainer>
        <Button
          size="large"
          style={{ width: '100%' }}
          type="primary"
          htmlType="submit"
          className="login-form-button"
          onClick={() => {
            if (password.trim() === passwordConfirm.trim()) {
              tryIt(register)(email.trim(), password.trim());
            } else {
              setError({
                code: 'same-password',
                name: 'pass-same',
                message: 'Password must be the same',
              });
            }
          }}>
          {emailFormOptions.buttonLoginName || 'Registrar'}
        </Button>
        <Button
          onClick={() => setOpenRegister(false)}
          size="large"
          style={{ width: '100%' }}
          type="default"
          htmlType="submit"
          className="login-form-button">
          {emailFormOptions.buttonBackFromSignUpName || 'Cancelar'}
        </Button>
      </ButtonContainer>
    </form>
  );

  return (
    <Container>
      {!openRegister ? loginForm : registerForm}
      {error ? (
        <Alert
          style={{ marginTop: '20px' }}
          message={errorDictionary[error.code] || error.message}
          type="error"
          closable
          afterClose={() => {
            setError(undefined);
          }}
        />
      ) : null}
    </Container>
  );
};

export default component<Props>(SignUpForm);
