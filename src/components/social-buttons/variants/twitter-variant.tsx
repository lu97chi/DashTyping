import React from 'react';
import { ButtonBase } from '../styled';
const Icon = require('../icons/twitter.svg') as string;

type Props = {
  onClick: Function;
  label: string;
};

function TwitterVariant({ label, onClick }: Props) {
  return (
    <ButtonBase background="#38a1f2" color="white" onClick={onClick}>
      <img width="30" src={Icon} alt="Google icon" />
      {label}
    </ButtonBase>
  );
}

export default TwitterVariant;
