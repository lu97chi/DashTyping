// @flow
import React from 'react';
import { component, useAppConfig } from 'react-garden-kit';
import SocialButtons from '../../../components/social-buttons';
import { AppParams } from '../../app.params';
import { Container } from './styled';

type Props = {
  style?: CSSStyleDeclaration;
  className?: string;
};

const SocialNetworkButtons = ({ style, className }: Props) => {
  const appConfig = useAppConfig();
  const {
    firebaseAuth,
    providers: {
      googleProvider,
      facebookProvider,
      githubProvider,
      twitterProvider,
    },
  } = appConfig.params as AppParams;
  return (
    <Container className={className} style={style}>
      {googleProvider ? (
        <SocialButtons
          label="Acceder con google"
          variant="google"
          onClick={() => {
            firebaseAuth.signInWithPopup(googleProvider);
          }}
        />
      ) : null}
      {facebookProvider ? (
        <SocialButtons
          label="Acceder con facebook"
          variant="facebook"
          onClick={() => {
            firebaseAuth.signInWithPopup(facebookProvider);
          }}
        />
      ) : null}
      {githubProvider ? (
        <SocialButtons
          label="Acceder con github"
          variant="github"
          onClick={() => {
            firebaseAuth.signInWithPopup(githubProvider);
          }}
        />
      ) : null}
      {twitterProvider ? (
        <SocialButtons
          label="Acceder con twitter"
          variant="twitter"
          onClick={() => {
            firebaseAuth.signInWithPopup(twitterProvider);
          }}
        />
      ) : null}
    </Container>
  );
};

export default component<Props>(SocialNetworkButtons);
