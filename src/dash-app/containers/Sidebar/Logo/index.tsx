// @flow
import React from 'react';
import { component } from 'react-garden-kit';
import { LogoContainer, LogoImage, LogoText } from './styledComponents';
import { LogoConfigType } from '../../../app.params';

type Props = { logo: LogoConfigType, open: boolean };

const Logo = ({ logo, open }: Props) => {
  const { withText, logoText, logoImg, logoHeigth, logoWidth, logoTextConfig } = logo;
  return (
    <LogoContainer>
      <LogoImage src={logoImg} logowidth={logoWidth} logoheigth={logoHeigth} />
      { open && withText ? <LogoText style={logoTextConfig}>{logoText}</LogoText> : null}
      {/* <LogoText isOpen={open && withText}>{logoText}</LogoText> */}
    </LogoContainer>
  );
};

export default component<Props>(Logo);
