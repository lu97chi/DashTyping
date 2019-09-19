import React from 'react';
import { ButtonBase } from '../styled';
const Icon = require('../icons/google.svg') as string;

type Props = {
  onClick: Function;
  label: string;
};

function GoogleVariant({ label, onClick }: Props) {
  return (
    <ButtonBase
      background="white"
      color="rgba(0, 0, 0, 0.65)"
      onClick={onClick}>
      <img width="20" src={Icon} alt="Google icon" />
      {label}
    </ButtonBase>
  );
}

export default GoogleVariant;
