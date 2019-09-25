// @flow
import React from 'react';
import { component } from 'react-garden-kit';
import { LogoContainer, LogoImage, LogoText } from './styledComponents';
import { LogoConfigType } from '../../../app.params';

type Props = { logo: LogoConfigType, open: boolean };

const Logo = ({ logo, open }: Props) => {
  const { withText, logoText, logoImg } = logo;
  return (
    <LogoContainer>
      <LogoImage src={logoImg} />
      { open && withText ? <LogoText>{logoText}</LogoText> : null}
    </LogoContainer>
  );
};

export default component<Props>(Logo);
