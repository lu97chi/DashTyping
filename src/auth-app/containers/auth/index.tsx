// @flow
import React from 'react';
import { component, useAppConfig } from 'react-garden-kit';
import { WrappedComponentProps } from 'react-with-firebase-auth';
import { AppParams } from '../../app.params';
import SignUpForm from '../signUpForm';
import { Container } from './styled';
import SocialNetworkButtons from '../social-network-buttons';

const Login = () => {
  const appConfig = useAppConfig();
  const {
    firebaseAuth,
    socialLoginMessage,
    providers: {
      emailProvider,
      githubProvider,
      googleProvider,
      facebookProvider,
      twitterProvider,
    },
    Head,
  } = appConfig.params as AppParams;

  return (
    <Container>
      <Head />
      {emailProvider ? (
        <SignUpForm
          login={(email: string, password: string) =>
            firebaseAuth.signInWithEmailAndPassword(email, password)
          }
          register={(email: string, password: string) =>
            firebaseAuth.createUserWithEmailAndPassword(email, password)
          }
        />
      ) : null}
      {githubProvider ||
      googleProvider ||
      facebookProvider ||
      twitterProvider ? (
        <div
          style={{
            padding: '10px',
          }}>
          {socialLoginMessage || 'O'}
        </div>
      ) : null}
      <SocialNetworkButtons />
    </Container>
  );
};

export default component<WrappedComponentProps>(Login);
