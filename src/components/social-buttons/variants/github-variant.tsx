import React from 'react';
import { ButtonBase } from '../styled';
const Icon = require('../icons/github.png') as string;

type Props = {
  onClick: Function;
  label: string;
};

function GithubVariant({ label, onClick }: Props) {
  return (
    <ButtonBase background="#333333" color="white" onClick={onClick}>
      <img width="20" src={Icon} alt="Google icon" />
      {label}
    </ButtonBase>
  );
}

export default GithubVariant;
