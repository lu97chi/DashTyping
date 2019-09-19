import React, { MouseEventHandler } from 'react';
import { ButtonBase, CircleButton } from '../styled';
const icon = require('../icons/facebook.svg') as string;
type Props = {
  onClick: Function;
  label: string;
  type: 'default' | 'circle';
};

function FacebookVariant({ type, label, onClick }: Props) {
  return type ? (
    <ButtonBase
      background="#3578E5"
      color="white"
      onClick={onClick as MouseEventHandler}>
      <img width="20" src={icon} alt="Google icon" />
      {label}
    </ButtonBase>
  ) : (
    <CircleButton>
      <img width="20" src={icon} alt="Google icon" />
    </CircleButton>
  );
}

export default FacebookVariant;
